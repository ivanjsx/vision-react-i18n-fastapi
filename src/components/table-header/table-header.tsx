// libraries
import { FC, memo } from "react";

// internationalization
import { useTranslation } from "react-i18next";

// styles
import styles from "./table-header.module.css";

// content

const TableHeader: FC = () => {
  
  const { t: translate } = useTranslation();
  
  return (
    <thead>
      <tr>
        <th className={styles.header}>{translate("table.header.target")}</th>
        <th className={styles.header}>{translate("table.header.status")}</th>
        <th className={styles.header}>{translate("table.header.color")}</th>
      </tr>
    </thead>
  );
};

export default memo(TableHeader);
