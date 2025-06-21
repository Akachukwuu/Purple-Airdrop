import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  title,
  description,
  requirements,
  status,
  promoted,
  link,
  image,
}) => {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <Link to={`/airdrops/${slug}`} className="block h-full">
      <div
        className={`rounded-xl p-4 shadow-lg border transition-all duration-300 h-full ${
          promoted
            ? "bg-purple-800/30 border-purple-500 backdrop-blur-md ring-1 ring-purple-400"
            : "bg-white/10 border-white/10"
        }`}
      >
        {promoted && (
          <div className="text-xs bg-yellow-400 text-black font-bold px-2 py-1 rounded mb-2 inline-block">
            🌟 Promoted
          </div>
        )}
        <div className="flex items-center gap-3 mb-2">
          <img
            className="w-8 h-8 rounded-3xl object-cover"
            src={image}
            alt={`${title} logo`}
          />
          <h2 className="text-lg font-bold">{title}</h2>
        </div>

        <p className="text-sm text-gray-300 mb-2">
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </p>

        {requirements && (
          <p className="text-xs text-gray-400 mb-2">{requirements}</p>
        )}

        <span
          className={`inline-block text-xs font-medium px-2 py-1 rounded ${
            status === "Live"
              ? "bg-green-600"
              : status === "Upcoming"
              ? "bg-yellow-500 text-black"
              : status === "Ended"
              ? "bg-red-600"
              : "bg-gray-700"
          }`}
        >
          {status}
        </span>
      </div>
    </Link>
  );
};

export default Card;
