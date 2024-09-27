// libraries
import { FC, useState } from "react";

// components
import Form from "../form/form";
import Table from "../table/table";
import Modal from "../modal/modal";
import Loader from "../loader/loader";
import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";

// styles
import styles from "./app.module.css";

// utils
import { CheckResult } from "../../utils/types";

// content

const App: FC = () => {
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Array<CheckResult>>([]);  
  
  return (
    <div className={styles.app}>
      <AppHeader />
      
      <main className={styles.main}>
        <Form 
          resultsSetter={setResults}
          isLoadingSetter={setIsLoading} 
        />
        
        {results.length > 0 && <Table results={results} />}
      </main>
      
      {isLoading && (<Modal children={<Loader />} />)}
      
      <AppFooter />
    </div>
  );
};

export default App;
