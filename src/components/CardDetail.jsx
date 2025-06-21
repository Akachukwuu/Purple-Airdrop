import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = ({ cardInfo }) => {
  const { slug } = useParams();

  // Find the matching card using slug
  const card = cardInfo.find(
    (item) => item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  );

  if (!card) {
    return <div className="text-white p-4">Airdrop not found</div>;
  }

  // Validate the image URL and link
  const isValidUrl = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])?)\\.)+[a-z]{2,}|" +
        "localhost|" +
        "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|" +
        "\\[?[a-fA-F0-9]*:[a-fA-F0-9:]+\\]?)" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "i"
    );
    return !!pattern.test(url);
  };

  const imageUrl = isValidUrl(card.image) ? card.image : "/fallback.jpg";

  const validLink = isValidUrl(card.link) ? card.link : "#";

  return (
    <div className="min-h-screen bg-[#0d0d16] text-white p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={card.image}
          alt={`${card.title} logo`}
        />
        <h1 className="text-2xl font-bold">{card.title}</h1>
      </div>

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
        href={validLink}
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
