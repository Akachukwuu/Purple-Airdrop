import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail";
import airdrops from "./data/airdrops.json"; // Assuming this is the correct path to your airdrops data
import SubscriptionCard from "./components/SubscriptionCard";

function App() {
  const cardInfo = airdrops;

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage cardInfo={cardInfo} />} />
        <Route
          path="/airdrops/:slug"
          element={<CardDetail cardInfo={cardInfo} />}
        />
      </Routes>
      <div className="bg-[#0d0d16]">
        <SubscriptionCard />
      </div>
      <footer className="bg-[#0d0d16] text-white text-center p-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Purple Whale. All rights reserved.
        </p>
      </footer>
      <div className="flex justify-center items-center"></div>
    </>
  );
}

export default App;
