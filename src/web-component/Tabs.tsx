import { useState } from "react";

import DailyEvents from "./Home/DailyEvents";
import InplayCalendar from "./Home/InplayCalender";
import Sports from "./Home/Sports";
import Sidebar from "./Sidebar";
import Betslip from "./Betslip";
import AllEvents from "./Home/AllEvents";

const tabs = [
  { name: "sports", label: "Sports", component: <Sports /> },
  { name: "dailyEvents", label: "Daily Events", component: <DailyEvents /> },
  { name: "allEvents", label: "All Events", component: <AllEvents /> },
  {
    name: "inplayCalendar",
    label: "Inplay Calendar",
    component: <InplayCalendar />,
  },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("sports");

  return (
    <div className="w-full text-xs">
      {/* Tab Buttons */}
      <div className="bg-gray-200 flex space-x-6   font-semibold border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-4 py-2 ${
              activeTab === tab.name ? " text-red-600" : "text-gray-700"
            } hover:text-red-500 transition`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Render Active Tab Content */}
      <div className=" flex gap-2 w-full px-1">
        <Sidebar />
        {tabs.find((tab) => tab.name === activeTab)?.component}
        <Betslip />
      </div>
    </div>
  );
};

export default Tabs;
