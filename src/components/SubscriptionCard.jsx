import React from "react";
import { FaCrown, FaCheckCircle } from "react-icons/fa";

const SubscriptionCard = () => {
  return (
    <div className="bg-[#1a1a2e] my-24 text-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-auto border border-purple-600">
      <div className="flex items-center space-x-3 mb-4">
        <FaCrown className="text-yellow-400 text-2xl" />
        <h2 className="text-2xl font-bold text-purple-300">Premium Plan</h2>
      </div>

      <p className="text-gray-300 mb-6 text-sm leading-relaxed">
        Unlock exclusive access to early airdrops, token insights, and whale
        alerts. Get ahead of the crowd and maximize your crypto opportunities.
      </p>

      <ul className="mb-6 space-y-3 text-sm">
        <li className="flex items-center text-green-400">
          <FaCheckCircle className="mr-2" /> Early Access to Airdrops
        </li>
        <li className="flex items-center text-green-400">
          <FaCheckCircle className="mr-2" /> Telegram Alerts
        </li>
        <li className="flex items-center text-green-400">
          <FaCheckCircle className="mr-2" /> Weekly Alpha Reports
        </li>
      </ul>

      <div className="text-center">
        <p className="text-3xl font-extrabold text-white mb-2">$9.99</p>
        <p className="text-xs text-gray-400 mb-4">
          Billed annually, cancel anytime
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition font-medium hover:cursor-pointer">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
