// libraries
import { ChangeEventHandler, FC } from "react";

// internationalization
import { useTranslation } from "react-i18next";

// styles
import styles from "./input.module.css";

// content

type Props = Readonly<{
  value: string;
  isValid: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}>;

const Input: FC<Props> = ({ value, isValid, onChange }) => {
  
  const { t: translate } = useTranslation();
  
  return (
    <input 
      required
      type="text"
      value={value}
      maxLength={15}
      id="ip_address"
      name="ip_address"
      inputMode="decimal"
      onChange={onChange}
      title={translate("errors.invalid_ip")}
      pattern="^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$"
      placeholder={translate("controls.input.placeholder")}
      className={isValid ? styles.input : `${styles.input} ${styles.invalid}`}
    />
  );
};

export default Input;
