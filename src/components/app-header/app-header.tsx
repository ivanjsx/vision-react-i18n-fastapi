// libraries
import { FC } from "react";

// internationalization
import { useTranslation } from "react-i18next";

// styles
import styles from "./app-header.module.css";

// content

const AppHeader: FC = () => {
  
  const { t: translate } = useTranslation();
  
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>VISION</h1>
      <p className={styles.tagline}>{translate("catchphrases.tagline")}</p>
    </header>
  );
};

export default AppHeader;
