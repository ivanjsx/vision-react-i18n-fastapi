// libraries
import { FC, MouseEventHandler, memo, useEffect } from "react";

// components
import ContactIcon from "../contact-icon/contact-icon";

// internationalization
import { useTranslation } from "react-i18next";

// styles
import styles from "./app-footer.module.css";

// icons
import github from "../../icons/github-white.svg";
import telegram from "../../icons/telegram-white.svg";

// content

const AppFooter: FC = () => {
  
  const { t: translate, i18n } = useTranslation();
  
  const switchLocale: MouseEventHandler<HTMLButtonElement> = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };
  
  useEffect(
    () => {
      document.documentElement.lang = i18n.language;
    },
    [i18n.language]
  );
  
  return (
    <footer className={styles.footer}>
      <button 
        type="button"
        name="switchLocale"
        onClick={switchLocale}
        className={`${styles.switchLocale} ${styles.tagline}`}
      >
        {translate("locale.switch")}
      </button>
      <ul className={styles.contacts}>
        <p className={styles.tagline}>{translate("catchphrases.contact")}</p>
        <ContactIcon 
          icon={telegram}
          name="telegram"
          link="https://t.me/mason_ivan"
        />
        <ContactIcon 
          icon={github}
          name="github"
          link="https://github.com/ivanjsx"
        />        
      </ul>
    </footer>      
  );
};

export default memo(AppFooter);
