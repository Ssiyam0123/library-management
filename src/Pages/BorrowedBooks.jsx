import React, { useState } from "react";

const BorrowedBooks = () => {
  // Sample borrowed books data for the logged-in user
  const [borrowedBooks, setBorrowedBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      category: "Novel",
      borrowedDate: "2024-12-01",
      returnDate: "2024-12-15",
      image: "/path/to/book1.jpg",
    },
    {
      id: 2,
      title: "1984",
      category: "Sci-Fi",
      borrowedDate: "2024-12-05",
      returnDate: "2024-12-20",
      image: "/path/to/book2.jpg",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      category: "Drama",
      borrowedDate: "2024-12-10",
      returnDate: "2024-12-25",
      image: "/path/to/book3.jpg",
    },
  ]);

  // Function to handle the return of a book
  const handleReturnBook = (bookId) => {
    // Simulate removing the book from the borrowed books list
    setBorrowedBooks(borrowedBooks.filter((book) => book.id !== bookId));

    // You can add more logic here to update the database, e.g., increasing the quantity of the book
    console.log(`Book with ID: ${bookId} has been returned.`);
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
              <p className="text-gray-600">Borrowed Date: {book.borrowedDate}</p>
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
