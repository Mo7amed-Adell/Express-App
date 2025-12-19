# 🚀 Backend API – Node.js, Express, Prisma & PostgreSQL

A production-style backend API built with **Node.js**, **Express**, **Prisma**, and **PostgreSQL**.  
This project focuses on **real backend fundamentals**, including authentication, authorization, database design, and clean architecture.

---

## 📌 Overview

This project demonstrates how modern backend systems are built and structured, with an emphasis on:

- RESTful API design
- Secure authentication and authorization
- Database modeling and querying
- Separation of concerns
- Real-world backend folder structure

This is a **backend-only project** (no frontend).

---

## ✨ Features

### 🔐 Authentication & Authorization
- User registration and login
- Password hashing with **bcrypt**
- JWT-based authentication
- Role-based authorization (`USER`, `ADMIN`)
- Protected routes using middleware

### 👤 Users Module
- Register and authenticate users
- View current user profile
- Update current user profile
- Delete own account
- Admin-only access to list all users

### 📦 Products Module
- Create, read, update, and delete products
- Admin-only access for creating, updating, and deleting products
- Public access for reading products

### 🗄️ Database
- PostgreSQL database
- Prisma ORM
- Schema-based data modeling
- Prisma migrations

---

## 🧱 Project Structure
src/
├── controllers/ # Handle HTTP requests and responses
├── services/ # Business logic and database access
├── routes/ # API route definitions
├── middlewares/ # Authentication & authorization middleware
├── prisma/ # Prisma schema and migrations
└── App.js # Application entry point

---

## ⚙️ Tech Stack

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JWT
- bcrypt
- ES Modules

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file in the root directory:

DATABASE_URL="postgresql://username:password@localhost:5432/dbname?schema=public"
JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="1h"

4️⃣ Run database migrations
npx prisma migrate dev --name init

5️⃣ Start the server
node App.js


Server will run at:

http://localhost:3000


🧪 Testing the API

You can test the API using:

Postman

curl

Browser (for GET routes)

Example – Register a user
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"Mohamed","email":"test@test.com","password":"123456"}'

Example – Login
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"test@test.com","password":"123456"}'