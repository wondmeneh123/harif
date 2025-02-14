import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import tot from "../assets/logo.png";
import Man from "../assets/manutd.png";

const matches = [
  {
    league: "England - Premier League",
    date: "16 Feb 08:30",
    team1: { name: "Tottenham Hotspur", logo: tot },
    team2: { name: "Manchester United", logo: Man },
    odds: { "1": 2.49, X: 3.78, "2": 2.67 },
  },
  {
    league: "England - Premier League",
    date: "15 Feb 07:00",
    team1: { name: "Manchester City", logo: tot },
    team2: { name: "Newcastle United", logo: Man },
    odds: { "1": 1.96, X: 4.07, "2": 3.51 },
  },
  {
    league: "England - Premier League",
    date: "15 Feb 07:00",
    team1: { name: "Manchester City", logo: tot },
    team2: { name: "Newcastle United", logo: Man },
    odds: { "1": 1.96, X: 4.07, "2": 3.51 },
  },
];

const TopMatches: React.FC = () => {
  const { t } = useLanguage();
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => setScrollPosition((prev) => Math.max(prev - 1, 0));
  const scrollRight = () =>
    setScrollPosition((prev) => Math.min(prev + 1, matches.length - 1));

  return (
    <div className=" text-white ">
      {/* Header */}
      <div className="flex bg-red-700 justify-between items-center p-2 mt-1">
        <span>{t("topMatches")}</span>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className="text-white hover:text-gray-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="text-white hover:text-gray-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Matches Container */}
      <div className="overflow-x-auto scrollbar-hide mt-2">
        <div
          className="flex space-x-3 w-max transition-transform"
          style={{ transform: `translateX(-${scrollPosition * 320}px)` }}
        >
          {matches.map((match, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-md shadow-md p-3 min-w-[320px]"
            >
              {/* League and Date */}
              <div className="text-gray-600 text-xs flex justify-between">
                <span>{match.league}</span>
                <span>{match.date}</span>
              </div>

              {/* Teams */}
              <div className="flex items-center justify-between my-2">
                <div className="flex flex-col items-center">
                  <img
                    src={match.team1.logo}
                    alt={match.team1.name}
                    className="h-8"
                  />
                  <span className="text-xs">{match.team1.name}</span>
                </div>
                <span className="">vs</span>
                <div className="flex flex-col items-center">
                  <img
                    src={match.team2.logo}
                    alt={match.team2.name}
                    className="h-8"
                  />
                  <span className="text-xs">{match.team2.name}</span>
                </div>
              </div>

              {/* Match Result Odds */}
              <div className="text-center text-gray-700 font">
                {t("matchResult")}
              </div>
              <div className="flex justify-between mt-2">
                {Object.entries(match.odds).map(([key, value]) => (
                  <button
                    key={key}
                    className="bg-gray-200 px-3 py-1  rounded-md text-sm  hover:bg-gray-300"
                  >
                    <div className="flex justify-between w-full">
                      {key} {value}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopMatches;
