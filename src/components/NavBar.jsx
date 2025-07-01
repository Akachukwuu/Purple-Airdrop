import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="flex bg-[#0d0d16] p-4 h-16">
        <h3 className="text-white text-2xl font-bold">
          Purple<span className="text-[#7756f5]">Whale</span>
        </h3>
        <ul className="flex ml-auto space-x-8 text-white">
          <Link to="/subscribe">
            <li className="text-sm md:text-xl hover:cursor-pointer hover:text-[#7556f5] transition-colors duration-300">
              Join Premium
            </li>
          </Link>
          <a
            href="https://forms.gle/WTxicv79zcSbx73D9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-sm md:text-xl hover:cursor-pointer hover:text-[#7556f5] transition-colors duration-300">
              Submit Airdrop
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
