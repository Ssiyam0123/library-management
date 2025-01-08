import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateBookPage = () => {
  const { id } = useParams(); 
  const { user } = useContext(AuthContext); 

  const [book, setBook] = useState([]);
    const {loading, setLoading} = useState([])

  const {error, setError} = useState('') 
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/book/${id}`);
        setBook(res.data);;
      } catch (err) {
        console.error("Error fetching book data:", err);
        setError("Failed to fetch book details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBookData()

  }, [id, user]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const coverImage = form.image.value;
    const title = form.title.value;
    // const quantity = parseInt(form.quantity.value);
    const authorName = form.authorName.value;
    const category = form.category.value;
    const rating = form.rating.value;

    const updatedData = {
        coverImage,
        title,
        authorName,
        category,
        rating
    }
    console.log(updatedData)

    try {
      const response = await axios.put(`http://localhost:5000/book/${id}`,updatedData );

      if (response.status === 200) {
        toast.success("Book updated successfully!");
       // Redirect to book details page
      } else {
        toast.error("Failed to update the book. Please try again.");
      }
    } catch (err) {
      console.error("Error updating the book:", err);
      toast.error("Failed to update the book. Please try again.");
    }
  };



  if (error) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-xl font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-blue-600">Update Book</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Image</label>
          <input
            type="url"
            name="image"
            defaultValue={book.coverImage}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={book.title}
           
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Author Name</label>
          <input
            type="text"
            name="authorName"
            defaultValue={book.authorName}
        
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Category</label>
          <select
            defaultValue={book.category}
            name="category"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          >
            <option value="History">History</option>
            <option value="Science">Science</option>
            <option value="Fiction">Fiction</option>
            <option value="Thriller">Thriller</option>
            <option value="Biography">Biography</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Rating</label>
          <input
            type="number"
            name="rating"
            defaultValue={book.rating}
            
            min="1"
            max="5"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
            required
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
           // Cancel and go back to book details
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBookPage;
