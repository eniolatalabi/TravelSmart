import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as EyeOpenIcon } from "./Assets/eye-open (1).svg";
import { ReactComponent as EyeCloseIcon } from "./Assets/eye-closed.svg";
import CustomButton from "./Buttons/CustomButton";
import ErrorMessage from "./Messages/ErrorMessage";
import { loadUserData } from "./utils/loadUserData";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Fetch saved user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await loadUserData();
        setUsers(data.users || []);
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Validate login details against saved user data or hardcoded admin credentials
  const validateLogin = () => {
    // Hardcoded admin credentials
    const adminEmail = "admin@travelsmart.com";
    const adminPassword = "AdminPass123";

    // Check if the input matches admin credentials
    if (email === adminEmail && passwordInput === adminPassword) {
      console.log("Admin logged in successfully");
      localStorage.setItem('isAdmin', 'true');  // Store admin flag in localStorage
      navigate("/homepage"); // Redirect to homepage
      return true;
    }

    // Check for regular users
    const user = users.find((u) => u.email === email);
    if (!user) {
      setErrors({ email: "Email not found. Please sign up first." });
      return false;
    }
    if (user.password !== passwordInput) {
      setErrors({ password: "Password does not match." });
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors on new submission

    if (validateLogin()) {
      // Handle successful login for regular users
      console.log("User login successful");
      navigate("/homepage"); // Replace with the appropriate route
    }
  };

  return (
    <div className="relative h-screen flex flex-col justify-between bg-gradient-to-b from-white to-blue-100">
      <div className="relative bg-white shadow-lg rounded-lg max-w-md w-full p-8 mx-auto flex flex-col items-center mt-16 border-2 border-primary-light card card-glow">
        <h1 className="text-4xl font-bold text-primary mb-2">TravelSmart</h1>
        <h2 className="text-2xl font-semibold text-primary-dark mb-4 animate-slideIn">Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className={`absolute text-sm transition-all ${
                emailFocus || email ? "-top-4 left-2 text-xs text-primary-dark" : "left-2 top-2 text-primary-dark"
              }`}
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-0`}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && <ErrorMessage message={errors.email} />}
          </div>

          {/* Password Field */}
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className={`absolute text-sm transition-all ${
                passwordFocus || passwordInput ? "-top-4 left-2 text-xs text-primary-dark" : "left-2 top-2 text-primary-dark"
              }`}
            >
              Password *
            </label>
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              className={`w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-0`}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChange={(e) => setPasswordInput(e.target.value)}
              value={passwordInput}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <EyeCloseIcon className="w-5 h-5 text-primary-dark" /> : <EyeOpenIcon className="w-5 h-5 text-primary-dark" />}
            </button>
            {errors.password && <ErrorMessage message={errors.password} />}
          </div>

          <div className="flex justify-between mb-4 text-sm">
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                id="keepMeSignedIn"
                className="accent-navy mr-2"
              />
              <label htmlFor="keepMeSignedIn" className="text-gray-700 text-xs">
                Keep me signed in
              </label>
            </div>
            <Link
              to="/create-password"
              className="text-blue-500 hover:text-primary-dark transition duration-300 text-xs"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mb-4">
            <CustomButton className="relative overflow-hidden group">Log In</CustomButton>
          </div>

          <p className="text-center text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-blue-500 hover:text-primary-dark transition duration-300">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>


      <div className="text-center text-gray-700 text-sm mt-4">
        <p>NB: For Now, Log in with admin details:</p>
        <p>Email: admin@travelsmart.com</p>
        <p>Password: AdminPass123</p>
      </div>

      <footer className="flex justify-center py-4 text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} DevPros. All Rights Reserved.
      </footer>
    </div>
  );
}
