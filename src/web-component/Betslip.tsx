import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaTimes,
  FaPlus,
  FaMinus,
  FaCog,
  FaShare,
  FaExclamationTriangle,
} from "react-icons/fa";

const Betslip: React.FC = () => {
  const { t } = useLanguage();
  const [stake, setStake] = useState<number | string>("");
  const [betAdded] = useState(true); // Simulates a selected bet

  return (
    <aside className="w-72  shadow-md  p-3 border text-xs bg-gray-50">
      {/* Header */}
      <div className="bg-red-700 text-white font-bold p-2 flex justify-between items-center ">
        <span>{t("betslip")}</span>
        <span className="bg-black text-white px-2 py-1  text-sm">
          {betAdded ? "1" : "0"}
        </span>
      </div>

      {/* Selected Match */}
      {betAdded ? (
        <div className="mt-3 border p-2  relative ">
          <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
            <FaTimes />
          </button>

          <div className="">Manchester City - Newcastle United</div>
          <div className="text-xs text-gray-500">
            {t("football")} - {t("premierLeague")}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {t("matchResult")}: 2
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-sm mt-3">{t("noBets")}</p>
      )}

      {/* Bet Type */}
      <div className="mt-3">
        <button className="w-full bg-gray-900 text-white p-2 font-bold ">
          {t("single")}
        </button>
      </div>

      {/* Stake Input */}
      <div className="mt-3 border p-2 w-full">
        <div className="flex items-center justify-between">
          <span className="font-bold">{t("stake")}</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setStake((prev) => (prev ? Number(prev) - 10 : 0))}
              className="bg-gray-300 text-black px-2 py-1 "
            >
              <FaMinus />
            </button>
            <input
              type="text"
              className="w-16 border p-1 text-center"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
            />
            <button
              onClick={() =>
                setStake((prev) => (prev ? Number(prev) + 10 : 10))
              }
              className="bg-gray-300 text-black px-2 py-1 "
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          {[20, 50, 100, 500].map((amount) => (
            <button
              key={amount}
              onClick={() => setStake(amount)}
              className="bg-gray-200 px-3 py-1  hover:bg-gray-300"
            >
              {amount}
            </button>
          ))}
        </div>
      </div>

      {/* Taxes */}
      <div className="mt-3 text-gray-700 flex justify-between text-sm">
        <span>{t("taxes")}</span>
        <span>0.00</span>
      </div>

      {/* Odds Type & Settings */}
      <div className="mt-3 flex justify-between items-center border-t pt-3 text-sm">
        <div className="flex items-center space-x-1">
          <FaCog className="text-gray-500" />
          <span>{t("oddsType")}</span>
        </div>
        <button className="text-gray-500 hover:text-black">
          {t("adjustments")}
        </button>
      </div>

      {/* Warnings */}
      <div className="mt-3 text-xs text-red-500 flex items-center space-x-2">
        <FaExclamationTriangle />
        <span>{t("loginToBet")}</span>
      </div>
      <div className="mt-1 text-xs text-orange-500 flex items-center space-x-2">
        <FaExclamationTriangle />
        <span>{t("setStake")}</span>
      </div>

      {/* Share Button */}
      <button className="w-full bg-black text-white p-2 mt-3 flex items-center justify-center space-x-2 ">
        <FaShare />
        <span>{t("share")}</span>
      </button>

      {/* Action Buttons */}
      <div className="mt-3 flex space-x-2">
        <button className="w-1/2 bg-red-600 text-white font-bold py-2 ">
          {t("cancel")}
        </button>
        <button className="w-1/2 bg-green-600 text-white font-bold py-2 ">
          {t("placeBet")}
        </button>
      </div>
    </aside>
  );
};

export default Betslip;
