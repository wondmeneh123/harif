import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

const HeaderNav: React.FC = () => {
  const { t } = useLanguage();
  return (
    <header className="w-full   border-t border-red-500 h-14 bg-red-700 flex items-center justify-between px-6 text-white text-xs">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-white text-2xl font-bold">AlphaBet</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex space-x-6 items-center">
        <button className="bg-yellow-500 text-black px-3 py-1 rounded-md font-bold hover:bg-yellow-600 transition">
          {t("sport")}
        </button>
        <a href="#" className="hover:text-gray-300">
          {t("todaysBet")}
        </a>
        <a href="#" className="hover:text-gray-300">
          {t("live")}
        </a>
        <a href="#" className="hover:text-gray-300">
          {t("jackpot")}
        </a>
        <a href="#" className="hover:text-gray-300">
          {t("virtual")}
        </a>
        <a href="#" className="hover:text-gray-300">
          {t("specialGames")}
        </a>
        <a href="#" className="hover:text-gray-300">
          {t("crashGames")}
        </a>
        <a href="#" className="hover:text-gray-300">
          {t("race")}
        </a>
        <a href="#" className="hover:text-gray-300">
          {t("promo")}
        </a>
      </nav>
    </header>
  );
};

export default HeaderNav;
