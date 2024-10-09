import React, { useState } from "react";
import './LoginPage.css'; // Link to CSS for styling
import loginImage from "../src/images/loginImage.png"; // Replace with your image path

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login action
  const handleLogin = () => {
    if (email && password) {
      // Perform your login logic here (e.g., call an API)
      alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
      // Redirect to the home page or dashboard
      // Example: window.location.href = "/home"; (adjust to your app's routing)
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left side with image */}
        <div className="login-image">
          <img src={loginImage} alt="Login" />
        </div>

        {/* Right side with login form */}
        <div className="login-form">
          <h2>Welcome Back</h2>
          <p>Please enter your details</p>

          {/* Login with Google button */}
          <button className="google-login">Login with Google</button>

          <div className="separator">
            <hr className="line" /> <span>Or</span> <hr className="line" />
          </div>

          {/* Input fields */}
          <div className="input-field">
            <span className="icon">📧</span>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="input-field">
            <span className="icon">👁️</span>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          {/* Forgot password link */}
          <a href="#" className="forgot-password">Forgot Password?</a>

          {/* Login button */}
          <button className="login-button" onClick={handleLogin}>Login</button>

          {/* Signup link */}
          <p className="signup-link">
            Don't have an account? <a href="/signup">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
