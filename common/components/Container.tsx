import React from "react";
import styles from "./Container.module.scss";

export interface ContainerProps extends IComponent.CommonProps {
  breakpoint?: Derify.Style.Breakpoint;
}

const Container: React.FC<ContainerProps> = (props) => {
  const { breakpoint = "xxl", style, children, className } = props;

  const cls = [styles.root];

  if (className) cls.push(className);

  return (
    <div className={cls.join(" ")} style={style}>
      <div className={styles[`breakpoint-${breakpoint}`]}>{children}</div>
    </div>
  );
};
export default Container;
