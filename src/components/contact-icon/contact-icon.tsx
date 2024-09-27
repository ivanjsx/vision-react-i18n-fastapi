// libraries
import { FC, memo } from "react";

// styles
import styles from "./contact-icon.module.css";

// content

type Props = Readonly<{
  name: string;
  link: string;
  icon: string;
}>;

const ContactIcon: FC<Props> = ({ name, link, icon }) => {
  return (
    <li className={styles.contact}>
      <a href={link} className={styles.link} target="_blank" rel="noreferrer">
        <img src={icon} alt={name} className={styles.icon} />
      </a>
    </li>    
  );
};  

export default memo(ContactIcon);
