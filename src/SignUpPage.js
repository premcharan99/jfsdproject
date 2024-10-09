import React, { useState } from "react";
import './SignUpPage.css'; // Link to CSS for styling
import signupImage from "../src/images/signupImage.png"; // Replace with your image path

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");

  // Handle signup action
  const handleSignUp = () => {
    if (name && email && password) {
      // Perform your signup logic here (e.g., call an API)
      alert(`Signing up with:\nName: ${name}\nEmail: ${email}\nPassword: ${password}\nRole: ${role}`);
      // Redirect to the home page or login page
      // Example: window.location.href = "/login"; (adjust to your app's routing)
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Outer container for form and image */}
        <div className="signup-wrapper">
          {/* Left side with signup form */}
          <div className="signup-form">
            <h2>Sign up</h2>
            <p>Already have an account? <a href="/">Login here</a></p>

            <div className="input-field">
              <label>Name:</label>
              <input 
                type="text" 
                placeholder="Enter your name here" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>

            <div className="input-field">
              <label>Email:</label>
              <input 
                type="email" 
                placeholder="Enter your email id here" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            <div className="input-field">
              <label>Password:</label>
              <input 
                type="password" 
                placeholder="Enter your password here" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            <div className="role-selection">
              <label>Role:</label>
              <label>
                <input 
                  type="radio" 
                  value="Student" 
                  checked={role === "Student"} 
                  onChange={() => setRole("Student")} 
                /> Student
              </label>
              <label>
                <input 
                  type="radio" 
                  value="Teacher" 
                  checked={role === "Teacher"} 
                  onChange={() => setRole("Teacher")} 
                /> Teacher
              </label>
            </div>

            {/* Signup button */}
            <button className="signup-button" onClick={handleSignUp}>Sign up</button>
          </div>

          {/* Right side with image */}
          <div className="signup-image">
            <img src={signupImage} alt="Signup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
