import React from "react";
import styles from "./Layout.module.scss";
const LayoutMain: React.FC = (props) => {
  return <main className={styles.main}>{props.children}</main>;
};
export default LayoutMain;
