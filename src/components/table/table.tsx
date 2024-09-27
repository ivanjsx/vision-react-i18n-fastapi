// libraries
import { FC, memo } from "react";

// components
import TableRow from "../table-row/table-row";
import TableHeader from "../table-header/table-header";

// types
import { CheckResult } from "../../utils/types";

// styles
import styles from "./table.module.css";

// content

type Props = Readonly<{ results: Array<CheckResult> }>;

const Table: FC<Props> = ({ results }) => {
  return (
    <table className={styles.table}>
      <TableHeader />
      
      <tbody>
        {results.map(
          (result) => (
            <TableRow key={result.id} result={result} />
          )
        )}
      </tbody>
    </table>
  );
};

export default memo(Table);
