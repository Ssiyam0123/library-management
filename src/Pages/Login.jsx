import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
// import { AuthContext } from "../context/AuthProvider"; // Ensure you have AuthContext for authentication

const Login = () => {
  const { handleGoogleLogIn, handleLogIn } = useContext(AuthContext); // Destructure login functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      await handleLogIn(email, password); // Call login with email/password function
      navigate("/"); // Redirect to the home page after successful login
    } catch (err) {
      setError(err.message); // Set error message if login fails
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await handleGoogleLogIn(); // Call Google login function
      navigate("/"); // Redirect to the home page after successful login
    } catch (err) {
      setError(err.message); // Set error message if login fails
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Login to Library Management
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center text-sm">{error}</p>
        )}

        <form onSubmit={handleEmailPasswordLogin}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 mt-6 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mt-4">or login with</p>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full py-2 mt-2 border rounded hover:bg-gray-100 transition duration-200"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
              className="w-6 h-6 mr-2"
            />
            Continue with Google
          </button>
        </div>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
