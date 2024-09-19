// libraries
import { FC } from "react";

// styles
import styles from "./app-header.module.css";

// content

const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>VISION</h1>
      <p className={styles.tagline}>See Beyond Threats</p>
    </header>
  );
};

export default AppHeader;
