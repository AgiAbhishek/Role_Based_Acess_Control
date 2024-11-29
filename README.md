# Role-Based Access Control (RBAC)

This project is a Node. js-based application implementing Role-Based Access Control (RBAC). It allows users to register and log in with different roles (`admin`, `manager`, and `user`) and restricts access to certain features based on their roles.

## Features

- User authentication using **JWT**.
- Role-based access to specific routes and features.
- User registration and login with hashed passwords.
- Integration with **MongoDB Atlas** for database storage.

## Installation and Setup

Follow these steps to run the project on your local system:

### Prerequisites

- Node.js (v18 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account

---

### 1. Clone the Repository

```bash
git clone https://github.com/AgiAbhishek/Role_Based_Acess_Control.git
cd Role_Based_Acess_Control

### 2.  Project Structure

Role_Based_Access_Control/
│
├── src/
│   ├── config/
│   │   └── dbConnect.js  # MongoDB connection setup
│   ├── controllers/
│   │   └── authController.js  # Handles login and registration
│   ├── middlewares/
│   │   ├── authMiddleware.js  # JWT token verification
│   │   └── roleMiddleware.js  # Role-based authorization
│   ├── models/
│   │   └── userModel.js  # MongoDB user schema
│   ├── routes/
│   │   ├── authRoutes.js  # Login and register routes
│   │   └── userRoutes.js  # Role-based routes
│   ├── public/
│   │   ├── login.html     # Login page
│   │   ├── register.html  # Register page
│   │   ├── landing.html   # Dashboard after login
│   │   ├── styles.css     # CSS styles for the pages
│   │   └── script.js      # Client-side JavaScript
│   └── index.js           # Main server file
│
├── .env                   # Environment variables (not committed)
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Dependency lockfile
└── README.md              # Documentation


### 3. Usage

Register a User

	•	Open http://localhost:7001/register.html in your browser.
	•	Fill in the username, password, and role fields.
	•	Click Register to create a new user.

### 4. Log In
	•	Open http://localhost:7001/login.html.
	•	Enter your credentials and click Login.
	•	On successful login, you’ll be redirected to the dashboard.

### 5. API Endpoints

Authentication

	•	POST /api/auth/register: Register a new user.
	•	POST /api/auth/login: Log in as an existing user.

### 6. Role-Based Routes

	•	GET /api/users/admin: Accessible only to admins.
	•	GET /api/users/manager: Accessible to managers and admins.
	•	GET /api/users/user: Accessible to all logged-in users.

### Contributing

Contributions are welcome! Please follow these steps:
	1.	Fork the repository.
	2.	Create a new branch.
	3.	Make your changes.
	4.	Submit a pull request.
