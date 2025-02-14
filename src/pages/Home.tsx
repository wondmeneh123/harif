import Banner from "@/web-component/Banner";
import Betslip from "@/web-component/Betslip";
import HeaderNav from "@/web-component/GameHeader";
import GameHeader from "@/web-component/GameHeader";
import Header from "@/web-component/Header";
import MatchTable from "@/web-component/MatchTable";
import Sidebar from "@/web-component/Sidebar";
import Tabs from "@/web-component/Tabs";
import TopMatches from "@/web-component/TopMatches";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-200">
      <Header />

      <HeaderNav />

      <div className="flex-1">
        <Tabs />
      </div>
    </div>
  );
};

export default HomePage;
