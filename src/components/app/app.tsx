// libraries
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";

// components
import Modal from "../modal/modal";
import Loader from "../loader/loader";
import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";
import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";
import ResultTable from "../result-table/result-table";

// internationalization
import { useTranslation } from "react-i18next";

// styles
import styles from "./app.module.css";

// utils
import { checkAddress } from "../../utils/api";
import { CheckResult } from "../../utils/types";
import { validateIPv4 } from "../../utils/validators";

// content

const App: FC = () => {
  
  const { t: translate } = useTranslation();
  
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [submissionError, setSubmissionError] = useState<string>("");
  
  const clearPage = (): void => {
    setInputValue("");
    setIsInputValid(true);
    setSubmissionError("");
  };
  
  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSubmissionError("");
    setInputValue(event.target.value.replaceAll(",", "."));
    setIsInputValid(event.target.validity.valid);
  };
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checkResults, setCheckResults] = useState<Array<CheckResult>>([]);  
  
  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    
    if (!validateIPv4(inputValue)) {
      setSubmissionError(translate("errors.invalid_ip"));
      setIsInputValid(false);
      return;
    };
    
    setIsLoading(true);
    checkAddress(inputValue).then(
      (data) => {
        setCheckResults((prevState) => [data, ...prevState]);
        clearPage();
      }
    ).catch(
      () => setSubmissionError(translate("errors.general"))
    ).finally(
      () => setIsLoading(false)
    );
  };
  
  return (
    <div className={styles.app}>
      <AppHeader />
      
      <main className={styles.main}>
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
        
        {checkResults.length > 0 && <ResultTable results={checkResults} />}
      </main>
      
      {isLoading && (<Modal children={<Loader />} />)}
      
      <AppFooter />
    </div>
  );
};

export default App;
