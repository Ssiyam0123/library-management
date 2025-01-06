import React from "react";
import { FaBook, FaLaptop, FaUserFriends, FaCalendarAlt } from "react-icons/fa";

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      icon: <FaBook className="text-4xl text-blue-500" />,
      title: "Book Reservations",
      description:
        "Reserve your favorite books online and pick them up at your convenience.",
    },
    {
      id: 2,
      icon: <FaLaptop className="text-4xl text-green-500" />,
      title: "Digital Library Access",
      description:
        "Access thousands of e-books, journals, and magazines online anytime.",
    },
    {
      id: 3,
      icon: <FaUserFriends className="text-4xl text-purple-500" />,
      title: "Study Rooms",
      description:
        "Book private or group study rooms equipped with all modern amenities.",
    },
    {
      id: 4,
      icon: <FaCalendarAlt className="text-4xl text-yellow-500" />,
      title: "Community Events",
      description:
        "Join our workshops, reading clubs, and fun events to connect with fellow book lovers.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Library Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
