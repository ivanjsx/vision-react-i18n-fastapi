// libraries
import { FC } from "react";

// styles
import styles from "./app.module.css";

// content

const App: FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>React App</h1>
      </header>
      <main className={styles.main}>
        <p>React App is running.</p>
      </main>
      <footer className={styles.footer}>
        <h2>React App</h2>
      </footer>      
    </div>
  );
}

export default App;
