import React from "react";

const TopBorrowedBooks = () => {
  // Sample data for the most borrowed books (replace with dynamic data if needed)
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A classic novel about love, wealth, and the American Dream.",
      image: "https://via.placeholder.com/300x200.png?text=The+Great+Gatsby",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "A powerful story of racial injustice and moral growth in the American South.",
      image: "https://via.placeholder.com/300x200.png?text=To+Kill+a+Mockingbird",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      description:
        "A dystopian novel about surveillance, totalitarianism, and freedom.",
      image: "https://via.placeholder.com/300x200.png?text=1984",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "A romantic tale of love, class, and societal expectations in 19th-century England.",
      image: "https://via.placeholder.com/300x200.png?text=Pride+and+Prejudice",
    },
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Top Borrowed Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Author: {book.author}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {book.description}
                </p>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBorrowedBooks;
