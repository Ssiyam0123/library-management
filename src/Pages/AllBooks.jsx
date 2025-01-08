import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDaata = async () => {
      const res = await axios.get("http://localhost:5000/books");
      setBooks(res.data);
      console.log(books);
    };
    fetchDaata();

    if (searchQuery) {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBooks(filteredBooks);
    } else {
      setBooks(books);
    }
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for books..."
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">All Books</h2>

      {/* Books List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
          <BookCard 
          key={book._id}
          book={book}/>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
