// libraries
import { FC } from "react";

// styles
import styles from "./contact.module.css";

// content

type Props = Readonly<{
  name: string;
  link: string;
  icon: string;
}>;

const Contact: FC<Props> = ({ name, link, icon }) => {
  return (
    <li className={styles.contact}>
      <a href={link} className={styles.link} target="_blank" rel="noreferrer">
        <img src={icon} alt={name} className={styles.icon} />
      </a>
    </li>    
  );
};  

export default Contact;
