// libraries
import { FC } from "react";

// components
import Contact from "../contact/contact";

// styles
import styles from "./app-footer.module.css";

// icons
import telegram from "../../icons/telegram-white.svg";

// content

const AppFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>Contact Us</p>
      <ul className={styles.contacts}>
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
