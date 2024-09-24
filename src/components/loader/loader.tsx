// libraries
import { FC } from "react";

// internationalization
import { useTranslation } from 'react-i18next';

// styles
import styles from "./loader.module.css";

// icons
import spinner from "../../icons/circle-notch-black.svg";

// content

const Loader: FC = () => {
  
  const { t: translate } = useTranslation();
  
  return (
    <div className={styles.container}>
      <img 
        src={spinner} 
        alt="spinner" 
        className={styles.spinner} 
      />
      <p className={styles.text}>
        {translate("loading")}
      </p>
    </div>  
  );
};

export default Loader;
