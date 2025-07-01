import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import CardDetail from "./components/CardDetail";
import SubscriptionCard from "./components/SubscriptionCard";
import NotFound from "./components/NotFound";
import airdrops from "./data/airdrops.json"; // Ensure the path is correct
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

function App() {
  const cardInfo = airdrops;

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0d0d16] text-white">
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage cardInfo={cardInfo} />} />
            <Route
              path="/airdrops/:slug"
              element={<CardDetail cardInfo={cardInfo} />}
            />
            <Route path="/subscribe" element={<SubscriptionCard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-[#0d0d16] text-white text-center p-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Purple Whale. All rights reserved.
          </p>
          <div className="flex flex-col space-y-4 w-12 fixed left-0 top-100 text-white text-2xl transition-all">
            <a
              className=" hover:text-blue-600 hover:scale-110"
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              className=" hover:text-blue-600 hover:scale-110"
              href="https://t.me/purpplewhale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
