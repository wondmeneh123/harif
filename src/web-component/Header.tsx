import React from "react";
import {
  FaComments,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
import { SelectLanguage } from "@/components/select-languages";
import { useLanguage } from "@/contexts/LanguageContext";

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="w-full h-14 bg-red-700 flex items-center justify-between px-6 text-white text-xs">
      {/* Left Section: Login & Register */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="+251 (0) Number"
          className="bg-gray-200 text-black px-3 py-2 rounded-md w-40"
        />
        <input
          type="password"
          placeholder={t("password")}
          className="bg-gray-200 text-black px-3 py-2 rounded-md w-40"
        />
        <button className="text-white bg-yellow-500 px-4 py-2 rounded-md font-bold hover:bg-yellow-600 transition">
          {t("login")}
        </button>
        <button className="text-black bg-yellow-400 px-4 py-2 rounded-md font-bold hover:bg-yellow-500 transition">
          {t("register")}
        </button>
      </div>

      {/* Right Section: Socials, App, Language Selector */}
      <div className="flex items-center space-x-4">
        <button className="text-black bg-yellow-500 px-3 py-1 rounded-md font-bold hover:bg-yellow-600 transition">
          App
        </button>
        <button className="flex items-center space-x-1 hover:text-gray-300 transition">
          <FaComments size={40} />
          <span className="w-full">{t("liveChat")}</span>
        </button>
        <FaInstagram
          className="cursor-pointer hover:text-gray-300 transition"
          size={20}
        />
        <FaFacebook
          className="cursor-pointer hover:text-gray-300 transition"
          size={20}
        />
        <FaTiktok
          className="cursor-pointer hover:text-gray-300 transition"
          size={20}
        />
        <FaTelegramPlane
          className="cursor-pointer hover:text-gray-300 transition"
          size={20}
        />

        {/* Language Selector */}
        <div className="w-16">
          <SelectLanguage />
        </div>
      </div>
    </header>
  );
};

export default Header;
