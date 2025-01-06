import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryBy = () => {
  const books = useLoaderData(); // Load data from the loader
  console.log(books)

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold mb-6">Books in this Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.length ? (
          books.map((book) => (
            <div key={book._id} className="bg-white p-4 shadow-md rounded-lg">
              <img
                src={book.coverImage}
                alt={book.title}
                className="h-40 w-full object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-gray-600">{book.category}</p>
            </div>
          ))
        ) : (
          <p>No books found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBy;
