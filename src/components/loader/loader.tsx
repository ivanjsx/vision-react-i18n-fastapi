// libraries
import { FC } from "react";

// styles
import styles from "./loader.module.css";

// content

const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      Проверяем...
    </div>  
  );
};

export default Loader;
