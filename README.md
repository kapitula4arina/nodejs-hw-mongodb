# 📇 Contacts REST API (Node.js + MongoDB)

Backend-only project: a REST API for managing a contacts collection with authentication, validation, file upload, email verification and API documentation via Swagger.  
The project is structured as a series of homework steps (branches) for the GoIT Node.js course.

---

## ✨ Features

- CRUD operations for contacts (create, read, update, delete)
- MongoDB + Mongoose for data storage
- Request body & params validation
- Pagination, filtering and sorting
- User registration & login (JWT-based auth)
- Protected routes for authorized users only
- Email verification for new users
- Avatar upload and image processing
- API documentation with **Swagger**

> This repository contains only the **backend** part (no frontend).

---

## 🧰 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT, bcrypt
- **Validation:** Joi 
- **File upload / images:** Multer, image processing library
- **Docs:** Swagger
- **Linters / formatting:** ESLint, Prettier

> See `package.json` for the full list of dependencies.

---

## 🌿 Branches

The project is split into branches that represent different homework stages:

- `hw2-mongodb` – basic Express server, MongoDB connection, contacts collection
- `hw3-crud` – structured controllers & services, full RESTful CRUD
- `hw4-validation` – data validation, pagination, filtering
- `hw5-auth` – user model, registration, login, JWT auth, protected routes
- `hw6-email-and-images` – email verification & avatar upload/processing
- `hw7-swagger` – API documentation with Swagger / OpenAPI
- (additional branch(es) may exist for experiments or fixes)

The most complete version is in **`hw7-swagger`**.

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/kapitula4arina/nodejs-hw-mongodb.git
cd nodejs-hw-mongodb
```

### 2️⃣ Checkout the desired branch

For the latest version with Swagger:
```bash
git checkout hw7-swagger
```

Or switch to any other branch from the list above.

###  3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Configure environment variables

Create .env file based on .env.example:

```bash
cp .env.example .env
```

Fill in required variables, e.g.:

PORT – server port

MONGODB_URI – MongoDB connection string

JWT_SECRET – secret key for JWT

email-related keys (for verification)

BASE_URL and other values if needed

(see .env.example for the full list).

### 5️⃣ Run the server in development mode

```bash
npm run start:dev
```

The API will be available at:
```text
http://localhost:PORT
```

(where PORT is the value from your .env).

---

## 📚 API Documentation (Swagger)

API documentation for the `hw7-swagger` branch is generated using **Swagger / OpenAPI**.

- Swagger / OpenAPI configuration: `swagger/`
- Additional documentation files: `docs/` and `redocly.yaml`

After starting the server, you can open Swagger UI in the browser at a route like:

```text
http://localhost:PORT/api-docs
```

---

## 📌 Project Status

🟢 Completed as a set of backend practice modules.  
Further improvements are possible: roles and permissions, extended filtering, rate limiting, and better logging.

---

## 👩‍💻 Author

**Oryna Kapitula**  
Junior Fullstack Developer  

📍 Zhytomyr, Ukraine  
📧 Email: `verhovskayarina@gmail.com`  
🔗 LinkedIn: *https://www.linkedin.com/in/oryna-kapitula/*  
💬 Telegram: `@chuu341`

---
