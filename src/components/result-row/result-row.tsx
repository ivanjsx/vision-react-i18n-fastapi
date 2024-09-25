// libraries
import { FC } from "react";

// internationalization
import { useTranslation } from "react-i18next";

// types
import { CheckResult } from "../../utils/types";

// styles
import styles from "./result-row.module.css";

// content

type Props = Readonly<{ result: CheckResult }>;

const ResultRow: FC<Props> = ({ result }) => {
  
  const { t: translate } = useTranslation();
  
  return (
    <tr className={styles.row}>
      <td className={styles.target}>{result.ip_address}</td>
      <td className={styles.status}>{translate(result.result_text)}</td>
      <td className={styles[result.result_color]}></td>
    </tr>    
  );
};

export default ResultRow;
