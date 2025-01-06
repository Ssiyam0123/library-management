import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
    return (
        <div
            key={book._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={book.coverImage} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600">
                {book.title}
              </h3>
              <p className="text-gray-700 text-sm">{book.authorName}</p>
              <p className="text-gray-600 text-sm mt-2">{book.description}</p>
              <Link
                to={`/book/${book._id}`}
                className="mt-4 text-blue-500 hover:text-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
    );
};

export default BookCard;