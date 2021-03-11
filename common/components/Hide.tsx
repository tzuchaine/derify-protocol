import React from "react";
import styles from "./Hide.module.scss";

interface HideProps extends IComponent.CommonProps {
  breakpoint?: Derify.Style.Breakpoint;
  up?: boolean;
  target?: string;
}

const Hide: React.FC<HideProps> = (props) => {
  const {
    breakpoint = "md",
    up = false,
    target = "div",
    children,
    style,
  } = props;

  const cls = [styles.root, styles[`${up ? "up" : "down"}-${breakpoint}`]];
  return React.createElement(
    target,
    { style, className: cls.join(" ") },
    children
  );
};
export default Hide;
