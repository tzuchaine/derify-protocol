import React from "react";
import styles from "./Hide.module.scss";

interface HideProps {
  breakpoint?: Derify.Style.Breakpoint;
  up?: boolean;
}

const Hide: React.FC<HideProps> = (props) => {
  const { breakpoint = "md", up = false, children } = props;

  const cls = [styles.root, styles[`${up ? "up" : "down"}-${breakpoint}`]];

  return <div className={cls.join(" ")}>{children}</div>;
};
export default Hide;
