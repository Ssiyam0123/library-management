import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

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
  }, [id]); // Dependency on `id` ensures this runs whenever `id` changes

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
          <p className="text-xl text-gray-700">{book.authorName}</p>
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

          <div className="mt-6">
            <Link
              to="/all-books"
              className="text-white bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Back to All Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
