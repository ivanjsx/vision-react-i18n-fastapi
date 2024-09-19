// libraries
import { FC } from "react";
import { createPortal } from "react-dom";

// styles
import styles from "./modal.module.css";

// content

type Props = Readonly<{ children: JSX.Element }>;

const Modal: FC<Props> = ({ children }) => {
  const modalsRoot = document.getElementById("modals") as HTMLDivElement;
  const content = (
    <div className={styles.overlay}>
      {children}
    </div>
  );
  return createPortal(content, modalsRoot);
};

export default Modal;
