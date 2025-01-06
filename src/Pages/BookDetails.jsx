import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to toggle modal
  const [returnDate, setReturnDate] = useState(""); // Return date state


  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/book/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error("Error fetching book data:", err);
        setError("Failed to fetch book details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  const handleBorrow = async (e) => {
    e.preventDefault();

    const borrowData = {
      bookId: book._id,
      bookTitle: book.title,
      userName: user.displayName,
      userEmail: user.email,
      returnDate,
    };

    try {
      await axios.post("http://localhost:5000/borrow", borrowData);
      toast.success("Book borrowed successfully!");
      setShowModal(false); // Close the modal
    } catch (err) {
      console.error("Error borrowing the book:", err);
      toast.error("Failed to borrow the book. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-xl font-semibold">Loading book details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-center">Error</h2>
        <p className="text-center mt-4">{error}</p>
        <div className="text-center mt-6">
          <Link to="/all-books" className="text-blue-500 hover:text-blue-700">
            Back to All Books
          </Link>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-center">Book Not Found</h2>
        <p className="text-center mt-4">
          Sorry, the book you're looking for does not exist.
        </p>
        <div className="text-center mt-6">
          <Link to="/all-books" className="text-blue-500 hover:text-blue-700">
            Back to All Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center">
        {/* Book Image */}
        <div className="md:w-1/3">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Book Details */}
        <div className="md:w-2/3 md:ml-8 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold text-blue-600">{book.title}</h2>
          <p className="text-xl text-gray-700">Author: {book.authorName}</p>
          <p className="mt-4 text-gray-600">{book.description}</p>

          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-800">Genre:</p>
            <p className="text-gray-600">{book.category}</p>
          </div>

          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-800">Quantity:</p>
            <p className="text-gray-600">{book.quantity}</p>
          </div>

          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-800">Rating:</p>
            <p className="text-gray-600">{book.rating}/5</p>
          </div>

          {/* Borrow Button */}
          <div className="mt-6">
            <button
              onClick={() => setShowModal(true)} // Open modal
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Borrow
            </button>
          </div>
        </div>
      </div>

      {/* Borrow Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Borrow Book</h2>
            <form onSubmit={handleBorrow}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Return Date
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)} // Close modal
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Borrow
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
