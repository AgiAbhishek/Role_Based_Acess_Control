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

---
```
## Installation 

### Step 1: Clone the Repository

1. Open your terminal and run:
   ```bash
   git clone https://github.com/YourUsername/Role_Based_Access_Control.git
   cd Role_Based_Access_Control

### Step 2: Install Dependencies
1. Ensure that you have Node.js installed on your system.
2. Run the following command in the project directory to install the necessary dependencies: npm install

**3.This will install the following dependencies:**
- Express.js: A fast, unopinionated web framework for Node.js.
- Mongoose: A MongoDB object modeling tool for Node.js.
- bcrypt.js: A library to hash passwords securely.
- jsonwebtoken (JWT): A library for securely transmitting information between parties.
- dotenv: A module to load environment variables from a .env file into process.env.

### Step 3: Set Up Environment Variables
1. In the root of your src directory, create a .env file.
   
2. Add the following environment variables to the .env file:
 PORT=7001
 JWT_SECRET=your_jwt_secret
 CONNECTION_STRING=your_mongodb_connection_string

4. Replace placeholders with the appropriate values:
- your_jwt_secret: A secure random string to sign JWT tokens.
- your_mongodb_connection_string: Your MongoDB Atlas connection string.

**Example:**
PORT=7001
JWT_SECRET=mySuperSecureJWTSecret
CONNECTION_STRING=mongodb+srv://username:password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority

### Step 4: Connect to MongoDB Atlas

1.Visit MongoDB Atlas and log in.
2.Create a new cluster (the free tier is sufficient for this project).
3.Under the Database Access section:
- Add a new database user with a username and password.
- Ensure the user has proper read and write access.
4.Under the Network Access section:
- Allow access from your IP address or from all IPs (for development).
5.Go to the Clusters page and click Connect > Connect Your Application.
6.Copy the connection string and update your .env file as shown in Step 3.

### Step 5: Start the Application
1.Run the application locally using:
npm run dev
2.If everything is set up correctly:
- The server will start at http://localhost:7001.
- You should see a message in the terminal:
  
***Server is running at port 7001
Database connected: <host>, <database-name>***



