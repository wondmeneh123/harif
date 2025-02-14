import React from "react";
import {
  FaFutbol,
  FaBasketballBall,
  FaTableTennis,
  FaFootballBall,
  FaVolleyballBall,
} from "react-icons/fa";
import { GiTennisRacket, GiIceSkate, GiRugbyConversion } from "react-icons/gi";

const sportsData = [
  {
    name: "football",
    count: 913,
    icon: React.createElement(FaFutbol, { className: "text-gray-500" }),
  },
  {
    name: "basketball",
    count: 188,
    icon: React.createElement(FaBasketballBall, { className: "text-gray-500" }),
  },
  {
    name: "tennis",
    count: 227,
    icon: React.createElement(GiTennisRacket, { className: "text-gray-500" }),
  },
  {
    name: "iceHockey",
    count: 231,
    icon: React.createElement(GiIceSkate, { className: "text-gray-500" }),
  },
  {
    name: "volleyball",
    count: 49,
    icon: React.createElement(FaVolleyballBall, { className: "text-gray-500" }),
  },
  {
    name: "rugbyUnion",
    count: 38,
    icon: React.createElement(GiRugbyConversion, {
      className: "text-gray-500",
    }),
  },
  {
    name: "tableTennis",
    count: 179,
    icon: React.createElement(FaTableTennis, { className: "text-gray-500" }),
  },
  {
    name: "rugbyLeague",
    count: 14,
    icon: React.createElement(FaFootballBall, { className: "text-gray-500" }),
  },
];

export default sportsData;
