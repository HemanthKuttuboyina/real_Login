# JWT Authentication with Node.js, Express, MongoDB, and Cookies

This is a beginner-friendly authentication system using **JWT (JSON Web Tokens)**, **Node.js**, **Express**, **MongoDB**, and **Cookie-Parser**. It includes features like user registration, login, and authentication using cookies.

---

## 🚀 Features
- 🔐 User **Signup & Login** with JWT authentication
- 🍪 Stores JWT securely in **cookies**
- 🛠️ Middleware for **protected routes**
- 📡 **MongoDB** integration for user storage
- 🏗️ Clean and beginner-friendly code

---

## 🛠️ Installation

1️⃣ **Clone the repository:**
```sh
git clone https://github.com/HemanthKuttuboyina/real_Login.git
cd real_Login
```

2️⃣ **Install dependencies:**
```sh
npm install
```

3️⃣ **Set up environment variables:**
Create a `.env` file and add:
```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/Ecommerce
JWT_SECRET=your_secret_key
```

4️⃣ **Run the server:**
```sh
npm start
```
Server runs on `http://localhost:8000`

---

## 🔑 API Endpoints

### 1️⃣ **User Signup**
```http
POST /user/signUp
```
#### Request Body:
```json
{
  "FirstName": "Hemanth",
  "LastName": "Kuttuboyina",
  "UserName": "hemanth",
  "Password": "securepassword"
}
```

### 2️⃣ **User Login**
```http
POST /user/logIn
```
#### Request Body:
```json
{
  "UserName": "hemanth",
  "Password": "securepassword"
}
```
#### Response:
- Sets a **JWT token in a cookie** for authentication.

### 3️⃣ **Protected Route (Requires Login)**
```http
GET /home
```
Requires **JWT stored in cookies**.

---

## 📌 How It Works
1️⃣ User **signs up** → Stored in **MongoDB**.  
2️⃣ User **logs in** → JWT token is **generated & stored** in a cookie.  
3️⃣ Every **protected route** checks for JWT in cookies before allowing access.

---

## 🛠️ Tech Stack
- **Node.js** (Backend)
- **Express.js** (Framework)
- **MongoDB & Mongoose** (Database)
- **JWT (JSON Web Token)** (Authentication)
- **Cookie-Parser** (Handling cookies)

---

## 🤝 Contributing
Feel free to fork the repo, make improvements, and submit a pull request!

---

### 🚀 Happy Coding! 🔥

