// src/pages/NotFound.jsx

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d16] text-white p-6">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
