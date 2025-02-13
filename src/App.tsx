import { SelectLanguage } from "./components/select-languages";
import { useLanguage } from "./contexts/LanguageContext";

const App = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-screen-xl mx-auto h-screen  ">
      <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
        <SelectLanguage />
        <h1 className="text-4xl font-bold  text-center">{t("welcome")}</h1>
      </div>
    </div>
  );
};

export default App;
