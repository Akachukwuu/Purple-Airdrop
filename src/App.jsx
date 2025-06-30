import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import CardDetail from "./components/CardDetail";
import SubscriptionCard from "./components/SubscriptionCard";
import NotFound from "./components/NotFound";
import airdrops from "./data/airdrops.json"; // Ensure the path is correct

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
        </footer>
      </div>
    </Router>
  );
}

export default App;
