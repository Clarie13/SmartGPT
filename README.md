# 🤖 SmartGPT

A clean, full-stack AI-powered chatbot built with the MERN stack — designed as a hands-on learning project to explore how modern AI chat interfaces are built from the ground up.

---

## ✨ Features

- 💬 Real-time AI-powered chat interface
- 🧠 Powered by OpenAI's GPT API
- 🗂️ Client-server architecture with separate frontend and backend
- ⚡ Fast and responsive UI

---

## 🛠️ Tech Stack

| Layer    | Technology          |
|----------|---------------------|
| Frontend | React.js            |
| Backend  | Node.js + Express   |
| Database | MongoDB             |
| AI       | OpenAI GPT API      |

---

## 📁 Project Structure

```
SmartGPT/
├── client/       # React frontend
├── server/       # Express backend & API routes
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- An OpenAI API key

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Clarie13/SmartGPT.git
   cd SmartGPT
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd server && npm install

   # Frontend
   cd ../client && npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the `server/` directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the app**
   ```bash
   # Start backend (from /server)
   npm start

   # Start frontend (from /client)
   npm start
   ```

   The app will be available at `http://localhost:3000`

---

## 🎯 Purpose

This project was built to learn and practice:
- Integrating third-party AI APIs into a full-stack app
- Building a RESTful backend with Express
- Managing state and async data in React
- Structuring a MERN stack project end-to-end

