// libraries
import { FC } from "react";

// styles
import styles from "./result-row.module.css";

// types
import { CheckResult } from "../../utils/types";

// content

type Props = Readonly<{ result: CheckResult }>;

const ResultRow: FC<Props> = ({ result }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.target}>{result.ip_address}</td>
      <td className={styles.status}>{result.result_text}</td>
      <td className={styles[result.result_color]}></td>
    </tr>    
  );
};

export default ResultRow;
