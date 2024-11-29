// Frontend Logic for Login and Registration Forms
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
  
    if (loginForm) {
      loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        try {
          const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
          });
          const data = await response.json();
  
          if (response.ok) {
            alert("Login successful");
            localStorage.setItem("token", data.token); // Store the JWT token
            window.location.href = "index.html"; // Redirect to a dashboard
          } else {
            alert(data.message || "Login failed");
          }
        } catch (err) {
          console.error(err);
          alert("An error occurred");
        }
      });
    }
  
    if (registerForm) {
      registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;
  
        try {
          const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, role }),
          });
          const data = await response.json();
  
          if (response.ok) {
            alert(data.message || "Registration successful");
            window.location.href = "login.html";
          } else {
            alert(data.message || "Registration failed");
          }
        } catch (err) {
          console.error(err);
          alert("An error occurred");
        }
      });
    }
  });