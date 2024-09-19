// libraries
import { FC } from "react";

// styles
import styles from "./loader.module.css";

// icons
import spinner from "../../icons/circle-notch-black.svg";

// content

const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <img 
        src={spinner} 
        alt="spinner" 
        className={styles.spinner} 
      />
      <p className={styles.text}>
        Check In Progress
      </p>
    </div>  
  );
};

export default Loader;
