const translations = {
  en: {
    welcome: "Welcome to our app!",
    login: "Login",
    logout: "Logout",
    home: "Home",
    about: "About Us",
  },
  am: {
    welcome: "እንኳን ደህና መጣቹ!",
    login: "ይግቡ",
    logout: "ለቀው ይውጡ",
    home: "ቤት",
    about: "ስለ",
  },
  or: {
    welcome: "Bagaan nagan dhuftan!",
    login: "Galii",
    logout: "Ba'i",
    home: "Manaa",
    about: "Inform",
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = keyof (typeof translations)["en"];

export default translations;
