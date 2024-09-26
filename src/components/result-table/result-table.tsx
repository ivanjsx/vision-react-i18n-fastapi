// libraries
import { FC } from "react";

// components
import ResultRow from "../result-row/result-row";

// internationalization
import { useTranslation } from "react-i18next";

// types
import { CheckResult } from "../../utils/types";

// styles
import styles from "./result-table.module.css";

// content

type Props = Readonly<{ results: Array<CheckResult> }>;

const ResultTable: FC<Props> = ({ results }) => {
  
  const { t: translate } = useTranslation();
  
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header}>{translate("table.header.target")}</th>
          <th className={styles.header}>{translate("table.header.status")}</th>
          <th className={styles.header}>{translate("table.header.color")}</th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {results.map(
          (result, index) => (
            <ResultRow key={index} result={result} />
          )
        )}
      </tbody>
    </table>
  );
};

export default ResultTable;
