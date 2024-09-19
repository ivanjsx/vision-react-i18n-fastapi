// libraries
import { FC } from "react";

// styles
import styles from "./button.module.css";

// content

type Props = Readonly<{ disabled: boolean }>;

const Button: FC<Props> = ({ disabled }) => {
  return (
    <button
      type="submit"
      name="submit"
      disabled={disabled}
      className={disabled ? `${styles.button} ${styles.disabled}` : styles.button}
    >
      Check Risk Level
    </button>  
  );
};

export default Button;
