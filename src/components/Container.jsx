import React, { useState } from "react";
import Card from "./Card";
import airdrops from "../data/airdrops.json"; // Assuming this is the correct path to your airdrops data

const Container = ({ cardInfo }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredCards =
    activeFilter === "All"
      ? [...cardInfo].reverse()
      : [...cardInfo].reverse().filter((card) => card.status === activeFilter);

  const visibleCards = filteredCards.slice(0, visibleCount);

  const filters = ["All", "Live", "Upcoming", "Ended", "Verified"];

  return (
    <div className="min-h-screen bg-[#0d0d16] text-white p-4">
      {/* Filter Navigation */}
      <ul className="flex flex-wrap gap-4 mb-6 mt-4">
        {filters.map((filter) => (
          <li
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setVisibleCount(8);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`cursor-pointer transition-all ${
              activeFilter === filter ? "underline font-bold" : ""
            } ${
              filter === "Live"
                ? "text-[#49dd35]"
                : filter === "Upcoming"
                ? "text-[#d99f20]"
                : filter === "Ended"
                ? "text-[#f21b1b]"
                : filter === "Verified"
                ? "text-blue-500"
                : "text-white"
            }`}
          >
            {filter}
          </li>
        ))}
      </ul>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {visibleCards.length > 0 ? (
          visibleCards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
              requirements={card.requirements}
              status={card.status}
              promoted={index === 0}
            />
          ))
        ) : (
          <p className="text-gray-400 col-span-full">None.</p>
        )}
      </div>

      {/* Show More Button */}
      {visibleCount < filteredCards.length && (
        <div className="text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Container;
