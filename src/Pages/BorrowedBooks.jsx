import axios from "axios";
import React, { useEffect, useState } from "react";

const BorrowedBooks = () => {
  // Sample borrowed books data for the logged-in user
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const getDATA = await axios.get("http://localhost:5000/borrowed");
      setBorrowedBooks(getDATA.data)
    }
    fetchData()
  },[])
  
  // Function to handle the return of a book
  const handleReturnBook = (bookId) => {

  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">Borrowed Books</h2>

      {/* Display borrowed books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {borrowedBooks.length === 0 ? (
          <p className="text-center text-lg">No borrowed books found.</p>
        ) : (
          borrowedBooks.map((book) => (
            <div key={book.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-600">Category: {book.category}</p>
              <p className="text-gray-600">
                Borrowed Date: {book.borrowedDate}
              </p>
              <p className="text-gray-600">Return Date: {book.returnDate}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleReturnBook(book.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                >
                  Return
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BorrowedBooks;
