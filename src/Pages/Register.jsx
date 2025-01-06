import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {handleSignUp} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = formData;

    // Password validation (at least one uppercase, one lowercase, and a minimum of 6 characters)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, and one number.");
      return;
    }

    // Here you can add Firebase or another authentication service to register the user
    console.log("Registration form submitted", { name, email, photoURL, password });
    handleSignUp(formData?.email,formData?.password)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700 font-medium mb-2">
              Profile Picture URL (optional)
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your profile picture URL"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
            <small className="text-gray-500">Password must have at least 6 characters, one uppercase letter, one lowercase letter, and one number.</small>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
