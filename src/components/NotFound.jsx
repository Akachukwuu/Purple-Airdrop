// src/components/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#0d0d16] px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
