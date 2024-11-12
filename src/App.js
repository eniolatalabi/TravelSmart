import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Homepage from './components/Homepage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import CreatePassword from './components/CreatePassword';
import CookieConsent from 'react-cookie-consent';
import UserLayout from './components/Layout'; 
import NonUserLayout from './components/NonUserLayout';
import Profile from './components/HomePage/Profile';
import Contact from './components/HomePage/Contact';
import Community from './components/HomePage/Community'; 
import Destination from './components/HomePage/Destination'; 
import Book from './components/HomePage/Book'; 

// Authentication check
const useAuth = () => {
  const userToken = localStorage.getItem('userToken');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  return Boolean(userToken) || isAdmin;  // Return true if either token exists or isAdmin is true
};

const App = () => {
  const [cookieConsent, setCookieConsent] = useState(false);
  const isAuthenticated = useAuth();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setCookieConsent(true);
    }
  }, []);

  const handleCookieConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent(true);
  };

  const validateLogin = (email, passwordInput, navigate) => {
    // Hardcoded admin credentials
    const adminEmail = "admin@travelsmart.com";
    const adminPassword = "AdminPass123";

    // Check if the input matches admin credentials
    if (email === adminEmail && passwordInput === adminPassword) {
      console.log("Admin logged in successfully");
      localStorage.setItem('isAdmin', 'true');  // Store admin flag in localStorage
      navigate("/homepage"); // Redirect to homepage
      return;
    } else {
      console.log("Invalid credentials");
      // Perform regular login logic here
      localStorage.setItem('userToken', 'someUserToken'); // Set user token for regular user
      navigate("/homepage"); // Redirect to homepage
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/" 
            element={<NonUserLayout><LandingPage /></NonUserLayout>} 
          />
          <Route 
            path="/login" 
            element={<LoginForm validateLogin={validateLogin} />} 
          />
          <Route 
            path="/signup" 
            element={<SignUpForm />} 
          />
          <Route 
            path="/create-password" 
            element={<CreatePassword />} 
          />

          {/* Private Routes */}
          <Route 
            path="/homepage" 
            element={isAuthenticated ? <UserLayout><Homepage /></UserLayout> : <Navigate to="/" />}
          />
          <Route 
            path="/profile" 
            element={isAuthenticated ? <UserLayout><Profile /></UserLayout> : <Navigate to="/" />}
          />
          <Route 
            path="/contact" 
            element={isAuthenticated ? <UserLayout><Contact /></UserLayout> : <Navigate to="/" />}
          />
          <Route 
            path="/community" 
            element={isAuthenticated ? <UserLayout><Community /></UserLayout> : <Navigate to="/" />}
          />
          <Route 
            path="/destination" 
            element={isAuthenticated ? <UserLayout><Destination /></UserLayout> : <Navigate to="/" />}
          />
          <Route 
            path="/book" 
            element={isAuthenticated ? <UserLayout><Book/></UserLayout> : <Navigate to="/" />}
          />
        </Routes>

        {/* Cookie consent banner */}
        {!cookieConsent && (
          <CookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName="travelSmartCookies"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
            onAccept={handleCookieConsent}
          >
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}>
              Learn more about our <a href="/privacy-policy" style={{ color: "#fff" }}>privacy policy</a>.
            </span>
          </CookieConsent>
        )}
      </div>
    </Router>
  );
}

export default App;
