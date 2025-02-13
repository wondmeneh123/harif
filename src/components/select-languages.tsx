import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

export function SelectLanguage() {
  const { language, switchLanguage } = useLanguage();

  return (
    <Select
      onValueChange={(value) => switchLanguage(value as "en" | "am" | "or")}
      value={language}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={"selectLanguage"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en"> English</SelectItem>
          <SelectItem value="am"> አማርኛ</SelectItem>
          <SelectItem value="or"> Oromiffa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
