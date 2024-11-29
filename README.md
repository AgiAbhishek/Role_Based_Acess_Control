# Role-Based Access Control (RBAC) System

A Node.js project demonstrating secure authentication, role-based access control, and a clean API for user management. This system is designed for scenarios requiring differentiated access levels for administrators, managers, and users.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Set Up Environment Variables](#set-up-environment-variables)
- [Connect to MongoDB Atlas](#connect-to-mongodb-atlas)
- [Start the Application](#start-the-application)
- [Usage](#usage)
  - [Register a User](#register-a-user)
  - [Log In](#log-in)
  - [Role-Based Routes](#role-based-routes)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Description

This project implements a complete role-based access control (RBAC) system using **Node.js**, **Express**, **MongoDB**, and **JWT**. It supports:
- User registration with role assignment (admin, manager, user).
- Secure login with hashed passwords.
- Role-based access to API endpoints.
- A simple frontend for user interaction.

---

## Features

- User authentication with JWT.
- Password hashing using bcrypt.js.
- Role-based access control middleware.
- RESTful API for user and role management.
- Interactive UI for registration and login.
- MongoDB Atlas as a database backend.

---

## Project Structure

```plaintext
nodejs-rbac-tutorial/
├── src/
│   ├── config/
│   │   └── dbConnect.js     # MongoDB connection setup
│   ├── controllers/
│   │   └── authController.js # User registration and login logic
│   ├── middlewares/
│   │   ├── authMiddleware.js  # JWT verification
│   │   └── roleMiddleware.js  # Role-based access control
│   ├── models/
│   │   └── userModel.js       # Mongoose user schema
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication routes
│   │   └── userRoutes.js      # User role-based routes
│   ├── index.js               # Main server entry point
│   └── .env                   # Environment variables
├── public/                    # Frontend files
│   ├── login.html
│   ├── register.html
│   ├── landing.html
│   ├── styles.css
│   └── script.js
├── package.json
└── README.md
