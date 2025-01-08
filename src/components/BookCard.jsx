import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactStars from "react-stars";

const BookCard = ({ book }) => {

    const navigate = useNavigate()

  return (
    <div
      key={book._id}
      className="bg-white p-4 shadow-md rounded-lg overflow-hidden"
    >
      {/* Book Cover Image */}
      <img
        src={book.coverImage}
        alt={book.title}
        className="h-40 w-full object-cover rounded-lg mb-4"
      />

      {/* Book Details */}
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-gray-600">Author: {book.authorName}</p>
      <p className="text-gray-600">Category: {book.category}</p>
      <div className="flex items-center mt-2">
        <ReactStars
          count={5} // Maximum stars
          value={book.rating || 0} // Rating value from book
          size={20} // Size of stars
          isHalf={true} // Allow half-stars
          edit={false} // Make stars read-only
          activeColor="#ffd700" // Gold color
        />
        <span className="ml-2 text-sm text-gray-500">
          {book.rating || "N/A"}
        </span>
      </div>

      {/* Update Button */}
      <div className="mt-4">
        <button
          onClick={() => navigate(`/update-book/${book._id}`)} // Navigate to update page
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default BookCard;
