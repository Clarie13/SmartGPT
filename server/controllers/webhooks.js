import Stripe from "stripe";
import Transaction from "../models/Transaction.js";
import User from  "../models/User.js"



export const stripewebhooks = async(request, response  )=>{

    const stripe= new Stripe(process.env.STRIPE_SECRET_KEY)
    const sig= request.headers["stripe-signature"]

    let event;
    try {
        event = stripe.webhooks.constructEvent(request.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET)
    } catch (error) {
        return response.status(400).send(`Webhok Error:${error.message}`)
    }

    try {
        switch (event.type) {
            case "checkout.session.completed":{

                console.log("✅ CHECKOUT SESSION COMPLETED");
                const session= event.data.object;
                console.log("SESSION:", session);
            
                const {transactionId, appId}= session.metadata;
                console.log("METADATA:", session.metadata);

                if(appId==='smartgpt' ){
                    const transaction= await Transaction.findOne({_id: transactionId,
                        isPaid:false
                    })
                    if (!transaction) {
                    console.log("Transaction not found:", transactionId);
                    return response.json({ received: true });
                    }


                    //Update credits in user account
                    await User .updateOne({_id: transaction.userId},{$inc:{credits: transaction.credits}});

                    //update credit payment status
                    transaction.isPaid=true;
                    await transaction.save();

                    console.log("Payment processed successfully");
                   }     
                   else{
                    return response.json({received: true, message: "Ignored event: Invalid app"})
                   }
                   break;       
            }
            
            default:
                console.log("Unhandled event type:", event.type)
                break;
        }
        response.json({received: true})
    } catch (error) {
        console.error("Webhook processing error:", error)
        response.status(500).send("Internal server error")
    }

}