# 🎓 CampusMart — College Marketplace

A full-stack AI-powered marketplace for college students to buy and sell books, notes, gadgets, and more within their campus.

## 🚀 Features

- 🔐 User Authentication — Register & Login
- 📦 Product Listings — Buy & Sell college items
- 🤖 AI Description Generator — LLaMA 3.2 powered
- 💰 AI Price Suggester — Fair price recommendations
- 💬 In-App Messaging — Buyer-Seller chat
- 📬 Inbox — All conversations in one place
- 👤 User Profile — College, Branch, Roll No.
- 🖼️ Image Upload — Cloudinary powered
- 🔍 Search & Filter — By name, category, college
- ✅ Mark as Sold — Listing management

## 🛠️ Tech Stack

### Frontend
- React.js + Vite
- React Router DOM
- Axios
- React Hot Toast
- CSS Modules

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary (Image Upload)
- Multer

### AI Layer
- LLaMA 3.2 via Ollama (Local, Free!)

## 📁 Project Structure
```
campusmart/
├── client/          # React Frontend
│   ├── src/
│   │   ├── pages/       # All pages
│   │   ├── components/  # Reusable components
│   │   └── api.js       # Axios configuration
└── server/          # Node.js Backend
    ├── models/      # MongoDB Models
    ├── routes/      # API Routes
    ├── middleware/  # Auth Middleware
    └── config/      # DB & Cloudinary Config
```

## ⚙️ Setup & Installation

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account
- Ollama installed with LLaMA 3.2

### Backend Setup
```bash
cd server
npm install
```
Create `.env` file in server folder:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run server:
```bash
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

### AI Setup
```bash
ollama pull llama3.2
ollama run llama3.2
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/products | Get all products |
| POST | /api/products | Add product |
| DELETE | /api/products/:id | Delete product |
| GET | /api/users/profile | Get profile |
| PUT | /api/users/profile | Update profile |
| POST | /api/messages | Send message |
| GET | /api/messages/conversations | Get all chats |
| POST | /api/ai/describe | AI description |
| POST | /api/ai/price | AI price suggest |

## 👨‍💻 Developed By

**Your Name** — Ritu Agarwal 
**College:** Madan Mohan Malaviya University of Technology 
**Branch:** Computer Science and Engineering  
