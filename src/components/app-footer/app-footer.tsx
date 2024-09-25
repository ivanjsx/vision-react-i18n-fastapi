// libraries
import { FC, MouseEventHandler } from "react";

// components
import Contact from "../contact/contact";

// internationalization
import { useTranslation } from "react-i18next";

// styles
import styles from "./app-footer.module.css";

// icons
import telegram from "../../icons/telegram-white.svg";

// content

const AppFooter: FC = () => {
  
  const { t: translate, i18n } = useTranslation();
  
  const switchLocale: MouseEventHandler<HTMLButtonElement> = () => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(currentLanguage === "en" ? "ru" : "en");
  };
  
  return (
    <footer className={styles.footer}>
      <button 
        type="button"
        name="switchLocale"
        onClick={switchLocale}
        className={`${styles.switchLocale} ${styles.tagline}`}
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
