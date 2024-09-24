// libraries
import { FC, useEffect, useState } from "react";

// components
import Contact from "../contact/contact";

// internationalization
import { useTranslation } from 'react-i18next';

// styles
import styles from "./app-footer.module.css";

// icons
import telegram from "../../icons/telegram-white.svg";

// content

const AppFooter: FC = () => {
  
  const { t: translate, i18n } = useTranslation();
  const [language, setLanguage] = useState<"en" | "ru">("en");
  
  useEffect(
    () => {
      i18n.changeLanguage(language);
    },
    [i18n, language]
  );
  
  return (
    <footer className={styles.footer}>
      <button 
        type="button"
        name="switchLocale"
        className={`${styles.switchLocale} ${styles.tagline}`}
        onClick={() => setLanguage(language === "en" ? "ru" : "en")}
      >
        {translate("locale_to_switch_to")}
      </button>
      <ul className={styles.contacts}>
        <p className={styles.tagline}>{translate("get_in_touch")}</p>
        <Contact 
          icon={telegram}
          name="Telegram"
          link="https://t.me/mason_ivan"
        />
      </ul>
    </footer>      
  );
};

export default AppFooter;
