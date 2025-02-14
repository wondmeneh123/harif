import HeaderNav from "@/web-component/GameHeader";
import Header from "@/web-component/Header";
import Tabs from "@/web-component/Tabs";

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
