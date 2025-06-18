import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = ({ cardInfo }) => {
  const { slug } = useParams();

  const card = cardInfo.find(
    (item) => item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  );

  if (!card) {
    return <div className="text-white p-4">Airdrop not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#0d0d16] text-white p-6">
      <h1 className="text-2xl font-bold mb-2">{card.title}</h1>
      <p className="text-gray-300 mb-2 whitespace-pre-line">
        {card.description}
      </p>
      {card.requirements && (
        <p className="text-sm text-gray-400 mb-2">
          Requirements: {card.requirements}
        </p>
      )}
      <a
        className="text-sm text-green-600 underline mb-2"
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Start Airdrop
      </a>
      <br />
      <br />
      <span className="inline-block text-xs px-2 py-1 bg-purple-600 rounded">
        {card.status}
      </span>
    </div>
  );
};

export default CardDetails;
