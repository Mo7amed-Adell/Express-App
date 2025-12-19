Backend API – Node.js, Express, Prisma & PostgreSQL

This project is a production-style backend API built with Node.js, Express, Prisma, and PostgreSQL.
It demonstrates core backend concepts including authentication, authorization, database design, and clean architecture.

The goal of this project is to practice and showcase real backend fundamentals, not just CRUD.

🧠 What This Project Demonstrates

How HTTP requests are handled in a Node.js server

REST API design with Express

Clean separation of concerns (routes, controllers, services, middleware)

Secure authentication and authorization

Database modeling and querying using Prisma

Role-based access control

Real-world backend folder structure

✨ Features
🔐 Authentication & Authorization

User registration and login

Password hashing using bcrypt

JWT-based authentication

Role-based authorization (USER, ADMIN)

Protected routes using middleware

👤 Users Module

Register and authenticate users

View own profile

Update own profile

Delete own account

Admin-only access for listing all users

📦 Products Module

Create, read, update, delete products

Admin-only access for creating, updating, and deleting products

Public access for reading products

🗄️ Database

PostgreSQL database

Prisma ORM

Schema-based modeling

Migrations for schema changes

🧱 Project Structure
src/
├── controllers/        # Handle HTTP requests and responses
├── services/           # Business logic and database operations
├── routes/             # Route definitions
├── middlewares/        # Auth & role-based access middleware
├── prisma/             # Prisma schema and migrations
└── App.js              # Application entry point

⚙️ Tech Stack

Node.js

Express

PostgreSQL

Prisma ORM

JWT

bcrypt

ES Modules

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file:

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

Example – Register User
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{"name":"Mohamed","email":"test@test.com","password":"123456"}'

🔒 Roles & Permissions
Role	Permissions
USER	Read products, manage own profile
ADMIN	Full access (users & products)

Admins are created manually or via controlled setup (not public registration).

📌 Notes

This is a backend-only project (no frontend)

Focused on correctness, security, and architecture

Suitable as a foundation for larger systems

📈 Future Improvements

Refresh tokens

Rate limiting

Request validation (Zod / Joi)

Logging

Testing (Jest / Supertest)

Pagination & filtering

👨‍💻 Author

Built as a learning and showcase project to solidify backend fundamentals.