// libraries
import { FC } from "react";

// internationalization
import { useTranslation } from "react-i18next";

// styles
import styles from "./button.module.css";

// content

type Props = Readonly<{ disabled: boolean }>;

const Button: FC<Props> = ({ disabled }) => {
  
  const { t: translate } = useTranslation();
  
  return (
    <button
      type="submit"
      name="submit"
      disabled={disabled}
      className={disabled ? `${styles.button} ${styles.disabled}` : styles.button}
    >
      {translate("button_action_text")}
    </button>  
  );
};

export default Button;
