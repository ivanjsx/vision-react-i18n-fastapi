// libraries
import { FC, memo } from "react";

// internationalization
import { useTranslation } from "react-i18next";

// types
import { CheckResult } from "../../utils/types";

// styles
import styles from "./table-row.module.css";

// content

type Props = Readonly<{ result: CheckResult }>;

const TableRow: FC<Props> = ({ result }) => {
  
  const { t: translate } = useTranslation();
  
  return (
    <tr className={styles.row}>
      <td className={styles.target}>{result.ip_address}</td>
      <td className={styles.status}>{translate(`resolutions.${result.result_text}`)}</td>
      <td className={styles[result.result_color]}></td>
    </tr>    
  );
};

export default memo(TableRow);
