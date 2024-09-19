// libraries
import { FC } from "react";

// styles
import styles from "./app-header.module.css";

// content

const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <h1>React App</h1>
    </header>  
  );
};

export default AppHeader;
