import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure this import is correct
import LoginPage from './LoginPage'; 
import SignUpPage from './SignUpPage'; // Import the SignUpPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* Default route for the login page */}
          <Route path="/signup" element={<SignUpPage />} /> {/* Route for the signup page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
