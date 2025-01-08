import React, { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const AddBooks = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const form = e.target;
    const title = form.title.value;
    const quantity = form.quantity.value;
    const authorName = form.author.value;
    const category = form.category.value;
    const description = form.description.value;
    const shortDescription = form.shortDescription.value;  // New short description field
    const rating = form.rating.value;
    const coverImage = form.image.value;
    const addedBy = user?.email;

    const newBook = {
      title,
      quantity,
      authorName,
      category,
      description,
      shortDescription,  // Include short description
      rating,
      coverImage,
      addedBy,
    };
    console.log(newBook)

    try {
      // Post data to the server
      const response = await axios.post("http://localhost:5000/books", newBook);
      console.log("Book added:", response.data);
      toast.success("Book added successfully!");
      form.reset();  // Reset form after submission
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error("Failed to add book. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Book</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        {/* Book Title */}
        <div>
          <label className="block text-lg font-semibold">Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter book title"
            required
          />
        </div>

        {/* Book Quantity */}
        <div>
          <label className="block text-lg font-semibold">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Book Author */}
        <div>
          <label className="block text-lg font-semibold">Author Name</label>
          <input
            type="text"
            name="author"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter author's name"
            required
          />
        </div>

        {/* Book Category */}
        <div>
          <label className="block text-lg font-semibold">Category</label>
          <select
            name="category"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select category</option>
            <option value="Novel">Novel</option>
            <option value="Thriller">Thriller</option>
            <option value="History">History</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg font-semibold">Description</label>
          <textarea
            name="description"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter a detailed description of the book"
            required
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-lg font-semibold">Short Description</label>
          <textarea
            name="shortDescription"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter a short description"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-lg font-semibold">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Book Image */}
        <div>
          <label className="block text-lg font-semibold">Book Cover Image</label>
          <input
            type="link"
            name="image"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
