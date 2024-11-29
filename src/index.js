const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect to Database
dbConnect();

// Middleware
app.use(express.json());

// Serve Static Files
app.use(express.static(path.join(__dirname, "../public")));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "../public")));

// Start the Server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});