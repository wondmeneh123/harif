import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export function SelectLanguage() {
  const { language, switchLanguage } = useLanguage();
  const [selectedLang, setSelectedLang] = useState(language);

  const handleChange = (value: string) => {
    setSelectedLang(value as "en" | "am" | "or");
    setTimeout(() => switchLanguage(value as "en" | "am" | "or"), 100);
  };

  return (
    <Select onValueChange={handleChange} value={selectedLang}>
      <SelectTrigger className="">
        <SelectValue>{selectedLang.toUpperCase()}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">🇬🇧 English</SelectItem>
          <SelectItem value="am">🇪🇹 አማርኛ</SelectItem>
          <SelectItem value="or">🇪🇹 Oromiffa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
