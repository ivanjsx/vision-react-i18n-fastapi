// libraries
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";

// styles
import styles from "./form.module.css";

// utils
import { checkAddress } from "../../utils/api";

// content

const Form: FC = () => {
  
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<string>("");
  
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
    setIsInputValid(event.target.validity.valid);
  };
  
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    checkAddress(inputValue).then(
      (data) => {
        console.log(data);
      }
    ).catch(
      (error) => {
        console.error(error);
        setSubmissionError(error.detail.msg ?? error.detail);
      }
    );
  };


  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input 
        required
        type="text"
        id="ip_address"
        name="ip_address"
        value={inputValue}
        onChange={onChange}
        className={styles.input}
        placeholder="Введите IP-адрес"
        title="Формат не совпадает с IPv4"
        pattern="^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$"
      />
      
      <button
        type="submit"
        name="submit"
        disabled={!isInputValid}
        className={styles.submit}
      >
        Проверить
      </button>
      
      <p>{submissionError}</p>
    </form>
  );
};

export default Form;
