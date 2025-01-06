import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookCategories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");

        const uniqueCategories = [
          ...new Set(res.data.map((book) => book.category)),
        ].map((category) => ({
          name: category,
          image: res.data.find((book) => book.category === category)
            ?.coverImage,
        }));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching book categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Book Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={category.image || "https://via.placeholder.com/150"}
                alt={category.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <button
                  onClick={() => navigate(`/categories/${category.name}`)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCategories;
