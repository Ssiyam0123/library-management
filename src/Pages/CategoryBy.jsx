import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const CategoryBy = () => {
  const books = useLoaderData(); // Load data from the loader
  const navigate = useNavigate(); // For navigation to book details
  console.log(books);

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Books in this Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.length ? (
          books.map((book) => (
            <div key={book._id} className="bg-white p-4 shadow-md rounded-lg">
              {/* Book Image */}
              <img
                src={book.coverImage}
                alt={book.title}
                className="h-40 w-full object-cover rounded-lg"
              />

              {/* Book Details */}
              <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
              <p className="text-gray-600">Author: {book.authorName}</p>
              <p className="text-gray-600">Category: {book.category}</p>
              <p className="text-gray-600">Quantity: {book.quantity}</p>

              {/* Rating */}
              <div className="mt-2">
                <ReactStars
                  count={5} // Maximum number of stars
                  value={book.rating || 0} // Rating value from book data
                  size={30} // Size of the stars
                  activeColor="#ffd700" // Color of the filled stars
                  isHalf={true} // Allow half stars
                  edit={false} // Make it read-only
                />
                <p className="text-gray-500 text-sm">
                  Rating: {book.rating || "N/A"}
                </p>
              </div>

              {/* Details Button */}
              <div className="mt-4">
                <button
                  onClick={() => navigate(`/book/${book._id}`)} // Navigate to the book details page
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No books found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBy;
