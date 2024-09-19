// libraries
import { FC } from "react";

// components
import AppHeader from "../app-header/app-header";
import AppFooter from "../app-footer/app-footer";

// styles
import styles from "./app.module.css";

// content

const App: FC = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <p>React App is running.</p>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
