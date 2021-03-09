import React from "react";
import styles from "./Layout.module.scss";

const LayoutFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>©️2021 DERIFY LAB</div>
    </footer>
  );
};
export default LayoutFooter;
