// libraries
import { FC, memo } from "react";

// internationalization
import { useTranslation } from "react-i18next";

// styles
import styles from "./app-header.module.css";

// content

const AppHeader: FC = () => {
  
  const { t: translate } = useTranslation();
  
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>{translate("catchphrases.name")}</h1>
      <p className={styles.tagline}>{translate("catchphrases.tagline")}</p>
    </header>
  );
};

export default memo(AppHeader);
