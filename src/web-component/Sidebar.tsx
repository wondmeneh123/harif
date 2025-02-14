import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaSearch, FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";
import sportsData from "./sportsData";
import esportsData from "./esportsData";

const Sidebar: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSportsOpen, setIsSportsOpen] = useState(true);
  const [isEsportsOpen, setIsEsportsOpen] = useState(true);

  // Filtered lists based on search input
  const filteredSports = sportsData.filter((sport) =>
    t(sport.name).toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredEsports = esportsData.filter((game) =>
    t(game.name).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className=" bg-white shadow-md text-xs">
      {/* Sports Menu Header */}
      <div className="bg-red-700 text-white text-xs font-bold p-2">
        {t("sportsMenu")}
      </div>

      {/* Search Box */}
      <div className="bg-gray-100 p-3 rounded-md my-2">
        <label className="text-gray-600 text-sm block">
          {t("searchEvent")}
        </label>
        <div className="flex items-center bg-white p-2 rounded-md mt-2 border">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 w-full outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Quick Filter */}
      <div className="bg-red-700 text-white font-bold p-2 flex justify-between items-center">
        <span>{t("quickFilter")}</span>
      </div>
      <div className="flex space-x-2 p-2">
        {["All", "3H", "6H", "9H", "12H", "24H"].map((filter) => (
          <button
            key={filter}
            className=" bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* In-Play Section */}
      <div className="bg-yellow-500 text-black font-bold p-2 flex items-center space-x-2 mt-2 rounded-md">
        <FaClock />
        <span>{t("inPlay")}</span>
      </div>

      {/* Sports Section */}
      <div
        className="bg-red-700 text-white font-bold p-2 mt-3 flex justify-between items-center cursor-pointer"
        onClick={() => setIsSportsOpen(!isSportsOpen)}
      >
        <span>{t("sports")}</span>
        {isSportsOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isSportsOpen && (
        <ul className="divide-y transition-all duration-300">
          {filteredSports.length > 0 ? (
            filteredSports.map((sport) => (
              <li
                key={sport.name}
                className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer"
              >
                <span>
                  <span className="text-gray-500 text-sm mr-1">
                    {sport.count}
                  </span>
                  {t(sport.name)}
                </span>
                {sport.icon}
              </li>
            ))
          ) : (
            <li className="text-center p-2 text-gray-500">{t("noResults")}</li>
          )}
        </ul>
      )}

      {/* Esports Section */}
      <div
        className="bg-red-700 text-white font-bold p-2 mt-3 flex justify-between items-center cursor-pointer"
        onClick={() => setIsEsportsOpen(!isEsportsOpen)}
      >
        <span>{t("esports")}</span>
        {isEsportsOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isEsportsOpen && (
        <ul className="divide-y transition-all duration-300">
          {filteredEsports.length > 0 ? (
            filteredEsports.map((game) => (
              <li
                key={game.name}
                className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer"
              >
                <span>
                  <span className="text-gray-500 text-sm mr-1">
                    {game.count}
                  </span>
                  {t(game.name)}
                </span>
                {game.icon}
              </li>
            ))
          ) : (
            <li className="text-center p-2 text-gray-500">{t("noResults")}</li>
          )}
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
