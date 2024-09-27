// libraries
import {
  FC,
  Dispatch,
  useState,
  useCallback,
  SetStateAction,
  FormEventHandler,
  ChangeEventHandler,
} from "react";

// components
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";

// internationalization
import { useTranslation } from "react-i18next";

// styles
import styles from "./form.module.css";

// utils
import { checkAddress } from "../../utils/api";
import { CheckResult } from "../../utils/types";
import { validateIPv4 } from "../../utils/validators";


// content

type Props = Readonly<{
  isLoadingSetter: Dispatch<SetStateAction<boolean>>;
  resultsSetter: Dispatch<SetStateAction<Array<CheckResult>>>;
}>;

const Form: FC<Props> = ({ isLoadingSetter, resultsSetter }) => {
  
  const { t: translate } = useTranslation();
  
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [submissionError, setSubmissionError] = useState<string>("");
  
  const clearForm = (): void => {
    setInputValue("");
    setIsInputValid(true);
    setSubmissionError("");
  };
  
  const inputChangeHandler = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setInputValue(event.target.value.replaceAll(",", "."));
      setIsInputValid(event.target.validity.valid);
      setSubmissionError("");
    },
    []
  );
  
  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    
    event.preventDefault();
    
    if (!validateIPv4(inputValue)) {
      setSubmissionError(translate("errors.invalid_ip"));
      setIsInputValid(false);
      return;
    };
    
    isLoadingSetter(true);
    
    checkAddress(
      inputValue
    ).then(
      (data) => resultsSetter((prevState) => [data, ...prevState])
    ).then(
      () => clearForm()
    ).catch(
      () => setSubmissionError(translate("errors.general"))
    ).finally(
      () => isLoadingSetter(false)
    );
  };
  
  return (
    <form 
      className={styles.form} 
      onSubmit={formSubmitHandler}
    >
      <FormInput 
        value={inputValue}
        isValid={isInputValid}
        onChange={inputChangeHandler}
      />
      <FormButton disabled={inputValue.length > 0 && !isInputValid} />
      <p className={styles.error}>{submissionError}</p>
    </form>  
  );
};

export default Form;
