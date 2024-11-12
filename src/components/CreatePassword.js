import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as EyeOpenIcon } from "./Assets/eye-open (1).svg";
import { ReactComponent as EyeCloseIcon } from "./Assets/eye-closed.svg";
import CustomButton from "./Buttons/CustomButton";
import ErrorMessage from "./Messages/ErrorMessage";
import SignUpSuccessAlert from "./Messages/SignUpSucessAlert";
import { loadUserData, saveUserData } from "./utils/loadUserData";

export default function CreatePasswordForm() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Password strength checker logic
  const evaluatePasswordStrength = (password) => {
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      return "Strong";
    } else if (password.length >= 6) {
      return "Moderate";
    } else {
      return "Weak";
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);
    setPasswordStrength(evaluatePasswordStrength(password));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess(false);

    // Find if the email exists in user data
    const userIndex = users.findIndex((u) => u.email === email);
    if (userIndex === -1) {
      setErrors({ email: "Email not found. Please sign up first." });
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setErrors({ password: "Passwords do not match." });
      return;
    }

    // If email exists, update the password
    const updatedUsers = [...users];
    updatedUsers[userIndex].password = newPassword;

    // Save updated user data
    saveUserData({ users: updatedUsers });

    // Show success message and redirect to login
    setSuccess(true);
    setTimeout(() => {
      navigate("/login"); // Navigate back to login after success
    }, 3000);
  };

  return (
    <div className="relative h-screen flex flex-col justify-between bg-gradient-to-b from-white to-blue-100">
      <div className="relative bg-white shadow-lg rounded-lg max-w-md w-full p-8 mx-auto flex flex-col items-center mt-16 border-2 border-primary-light card card-glow">
        {/* TravelSmart Logo */}
        <h1 className="text-4xl font-bold text-primary mb-2">TravelSmart</h1>

        {/* Create Password Text */}
        <h2 className="text-2xl font-semibold text-primary-dark mb-4 animate-slideIn">
          Create a New Password
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className={`absolute text-sm transition-all ${emailFocus || email ? "-top-4 left-2 text-xs text-primary-dark" : "left-2 top-2 text-primary-dark"}`}
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-0`}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && <ErrorMessage message={errors.email} />}
          </div>

          {/* New Password Field */}
          <div className="relative mb-4">
            <label
              htmlFor="newPassword"
              className={`absolute text-sm transition-all ${passwordFocus || newPassword ? "-top-4 left-2 text-xs text-primary-dark" : "left-2 top-2 text-primary-dark"}`}
            >
              New Password *
            </label>
            <input
              id="newPassword"
              type={passwordVisible ? "text" : "password"}
              className={`w-full px-4 py-2 border ${passwordStrength === "Weak" ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-0`}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChange={handlePasswordChange}
              value={newPassword}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <EyeCloseIcon className="w-5 h-5 text-primary-dark" />
              ) : (
                <EyeOpenIcon className="w-5 h-5 text-primary-dark" />
              )}
            </button>
            <p className={`text-xs ${passwordStrength === "Strong" ? "text-green-500" : passwordStrength === "Moderate" ? "text-yellow-500" : "text-red-500"}`}>
              Password Strength: {passwordStrength}
            </p>
          </div>

          {/* Confirm Password Field */}
          <div className="relative mb-4">
            <label
              htmlFor="confirmPassword"
              className={`absolute text-sm transition-all ${passwordFocus || confirmPassword ? "-top-4 left-2 text-xs text-primary-dark" : "left-2 top-2 text-primary-dark"}`}
            >
              Confirm Password *
            </label>
            <input
              id="confirmPassword"
              type={passwordVisible ? "text" : "password"}
              className={`w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-0`}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
            />
            {errors.password && <ErrorMessage message={errors.password} />}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mb-4">
            <CustomButton className="relative overflow-hidden group">
              Create Password
            </CustomButton>
          </div>

          {/* Go Back to Login */}
          <p className="text-center text-gray-500">
            Remembered your password?{" "}
            <Link to="/login">
              <span className="text-blue-500 hover:text-primary-dark transition duration-300">
                Go back to Login
              </span>
            </Link>
          </p>
        </form>

        {/* Success Message */}
        {success && <SignUpSuccessAlert message="Password reset successfully!" />}
      </div>

      <footer className="flex justify-center py-4 text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} DevPros. All Rights Reserved.
      </footer>
    </div>
  );
}
