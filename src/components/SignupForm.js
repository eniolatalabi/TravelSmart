import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as EyeOpenIcon } from "./Assets/eye-open (1).svg";
import { ReactComponent as EyeCloseIcon } from "./Assets/eye-closed.svg";
import CustomButton from "./Buttons/CustomButton";
import ErrorMessage from "./Messages/ErrorMessage";
import SignUpSuccessAlert from "./Messages/SignUpSucessAlert";
import { saveAs } from 'file-saver';

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordStrengthVisible, setPasswordStrengthVisible] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPasswordInput(value);

    if (value.length > 0) {
      setPasswordStrengthVisible(true);
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    } else {
      setPasswordStrengthVisible(false);
    }
  };

  const calculatePasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;

    if (/\d/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score += 1;
    if (!/(.).*?\1/.test(password)) score += 1;

    if (score < 4) return "Weak";
    if (score < 6) return "Moderate";
    if (score < 8) return "Strong";
    return "Very Strong";
  };

  const validateForm = () => {
    const newErrors = {};
    if (!fullname.trim()) newErrors.fullname = "Full Name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid Email is required.";
    if (!passwordInput) newErrors.password = "Password is required.";
    if (passwordStrength === "Weak") newErrors.passwordStrength = "Password is too weak.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const saveUserInput = () => {
    const userData = {
      fullname,
      email,
      password: passwordInput,
    };

    const fileData = new Blob([JSON.stringify(userData, null, 2)], { type: 'application/json' });
    saveAs(fileData, 'user_data.json');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage("Your account has been created successfully!");


      setTimeout(() => {
        saveUserInput();
        setEmail("");
        setFullname("");
        setPasswordInput("");
        setPasswordStrength("");
        setPasswordStrengthVisible(false);
      }, 500);
    }
  };

  return (
    <div className="relative h-screen flex flex-col justify-between bg-gradient-to-b from-white to-blue-100">
      <div className="relative bg-white shadow-lg rounded-lg max-w-4xl w-full p-8 mx-auto flex flex-col md:flex-row justify-between items-start mt-16 ring-0 md:ring-1 lg:ring-2 ring-primary-light ring-opacity-50">
        

        <div className="hidden md:flex w-full md:w-1/2 flex-col relative mobile-center">
          <h1 className="text-2xl font-bold text-primary-dark mb-1 mt-0">
            TravelSmart
          </h1>
          <h2 className="text-1xl font-bold text-primary-dark mb-3">
            Your Ultimate Travel Companion
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-2 text-primary-dark border border-primary-dark rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-dark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15l5-5l-1.41-1.41L10 12.17L8.41 10.59L7 12l3 3z" fill="currentColor"/>
                </svg>
              </span>
              <span className="text-gray-700">Explore dream destinations with expert insights</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-primary-dark border border-primary-dark rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-dark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15l5-5l-1.41-1.41L10 12.17L8.41 10.59L7 12l3 3z" fill="currentColor"/>
                </svg>
              </span>
              <span className="text-gray-700">Get personalized recommendations for your trips</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-primary-dark border border-primary-dark rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-dark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15l5-5l-1.41-1.41L10 12.17L8.41 10.59L7 12l3 3z" fill="currentColor"/>
                </svg>
              </span>
              <span className="text-gray-700">Find the best travel deals and discounts</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-primary-dark border border-primary-dark rounded-full w-6 h-6 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-dark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15l5-5l-1.41-1.41L10 12.17L8.41 10.59L7 12l3 3z" fill="currentColor"/>
                </svg>
              </span>
              <span className="text-gray-700">Track your trips and experiences seamlessly</span>
            </li>
          </ul>
        </div>


        <div className="flex w-full md:w-1/2 flex-col relative px-0 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold text-primary-dark mb-5 mt-2 md:mt-0">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="relative">
              <label
                htmlFor="fullname"
                className={`absolute text-sm transition-all ${nameFocus || fullname ? "-top-4 left-2 text-xs text-primary-dark" : "left-2 top-2 text-primary-dark"}`}
              >
                Full Name *
              </label>
              <input
                id="fullname"
                type="text"
                className={`w-full px-4 py-2 border ${errors.fullname ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-0`}
                value={fullname}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                onChange={(e) => setFullname(e.target.value)}
              />
              {errors.fullname && <ErrorMessage message={errors.fullname} />}
            </div>


            <div className="relative">
              <label
                htmlFor="email"
                className={`absolute text-sm transition-all ${emailFocus || email ? "-top-4 left-2 text-xs text-primary-dark" : "left-2 top-2 text-primary-dark"}`}
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-0`}
                value={email}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <ErrorMessage message={errors.email} />}
            </div>


            <div className="relative">
              <label
                htmlFor="password"
                className={`absolute text-sm transition-all ${passwordFocus || passwordInput ? "-top-4 left-2 text-xs text-primary-dark" : "left-2 top-2 text-primary-dark"}`}
              >
                Password *
              </label>
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-0`}
                value={passwordInput}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                onChange={handlePasswordChange}
              />
              <div className="absolute right-2 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
                {passwordVisible ? <EyeOpenIcon className="w-6 h-6" /> : <EyeCloseIcon className="w-6 h-6" />}
              </div>
              {errors.password && <ErrorMessage message={errors.password} />}
            </div>


            {passwordStrengthVisible && (
              <div className="text-sm">
                Password Strength:{" "}
                <span
                  className={`font-bold ${
                    passwordStrength === "Weak"
                      ? "text-red-600"
                      : passwordStrength === "Moderate"
                      ? "text-yellow-500"
                      : "text-green-600"
                  }`}
                >
                  {passwordStrength}
                </span>
              </div>
            )}


            <div className="flex justify-center">
            <CustomButton type="submit">Sign Up</CustomButton>
            </div>

            {successMessage && <SignUpSuccessAlert message={successMessage} />}


            <div className="text-center text-gray-700 text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-primary-dark ml-1 font-semibold">
                Log in here
              </Link>
            </div>
          </form>
        </div>
      </div>
        <div className="text-center text-gray-700 text-sm mt-4">
          <p>NB: For Now, Log in with admin details:</p>
          <p>Email: admin@example.com</p>
          <p>Password: admin123</p>
        </div>

      <footer className="flex justify-center py-4 text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} DevPros. All Rights Reserved.
      </footer>
    </div>
  );
}
