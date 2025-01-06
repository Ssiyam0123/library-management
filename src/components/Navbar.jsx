import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
//   console.log(x);
//   const user = true;
  const navigate = useNavigate();

  // Handle logout function
  const handleLogout = async () => {
    try {
      await logOut(); // Call your logout function here
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo/Website Name */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-200">
          Library Management
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </Link>
          {user && (
            <>
              <Link
                to="/all-books"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                All Books
              </Link>
              <Link
                to="/add-book"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Add Book
              </Link>
              <Link
                to="/borrowed-books"
                className="hover:text-gray-200 transition-colors duration-200"
              >
                Borrowed Books
              </Link>
            </>
          )}
        </div>

        {/* User Authentication Section */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              {/* User Profile */}
              <div className="relative group">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                />
                <div className="absolute left-0 mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded hidden group-hover:block">
                  {user.displayName || "User"}
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleSignOut}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login and Register Buttons */}
              <Link
                to="/login"
                className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-blue-700 p-4">
        <Link
          to="/"
          className="block py-2 hover:text-gray-200 transition-colors duration-200"
        >
          Home
        </Link>
        {user && (
          <>
            <Link
              to="/all-books"
              className="block py-2 hover:text-gray-200 transition-colors duration-200"
            >
              All Books
            </Link>
            <Link
              to="/add-book"
              className="block py-2 hover:text-gray-200 transition-colors duration-200"
            >
              Add Book
            </Link>
            <Link
              to="/borrowed-books"
              className="block py-2 hover:text-gray-200 transition-colors duration-200"
            >
              Borrowed Books
            </Link>
          </>
        )}
        {user ? (
          <>
            {/* User Profile and Logout */}
            <div className="mt-4 flex items-center space-x-4">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <span>{user.displayName || "User"}</span>
            </div>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 mt-4 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Login and Register */}
            <Link
              to="/login"
              className="block bg-green-500 w-full mt-4 px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block bg-blue-500 w-full mt-4 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
