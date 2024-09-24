// libraries
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";

// components
import Input from "../input/input";
import Modal from "../modal/modal";
import Loader from "../loader/loader";
import Button from "../button/button";
import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";
import ResultRow from "../result-row/result-row";

// internationalization
import { useTranslation } from 'react-i18next';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [submissionError, setSubmissionError] = useState<string>("");
  
  const [checkResults, setCheckResults] = useState<Array<CheckResult>>([]);
  
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
  
  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    
    if (!validateIPv4(inputValue)) {
      setSubmissionError(translate("invalid_ip_error"));
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
      () => setSubmissionError("Something went wrong")
    ).finally(
      () => setIsLoading(false)
    );
  };
  
  const checkResultsTable = (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.cell}>Target</th>
          <th className={styles.cell}>Status</th>
          <th className={styles.cell}>Color</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {checkResults.map(
          (result, index) => (
            <ResultRow key={index} result={result} />
          )
        )}
      </tbody>
    </table>
  );
  
  return (
    <div className={styles.app}>
      <AppHeader />
      
      <main className={styles.main}>
        <form 
          className={styles.form} 
          onSubmit={formSubmitHandler}
        >
          <Input 
            value={inputValue}
            isValid={isInputValid}
            onChange={inputChangeHandler}
          />
          <Button disabled={inputValue.length > 0 && !isInputValid} />
          <p className={styles.error}>{submissionError}</p>
        </form>      
        
        {checkResults.length > 0 && checkResultsTable}
      </main>
      
      {isLoading && (<Modal children={<Loader />} />)}
      
      <AppFooter />
    </div>
  );
};

export default App;
