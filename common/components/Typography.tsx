import React from "react";
import styles from "./Typography.module.scss";

interface TypographyHeadingProps extends IComponent.CommonProps {
  level?: 1 | 2 | 3;
}

const Heading: React.FC<TypographyHeadingProps> = ({
  level = 2,
  style,
  className,
  children,
}) => {
  const classes = [styles.heading, className];
  const tag = "h" + level;

  return React.createElement(
    tag,
    { style, className: classes.join(" ") },
    children
  );
};

const Content: React.FC<IComponent.CommonProps> = ({
  style,
  className,
  children,
}) => {
  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
};

const Typography: {
  Heading: React.FC<TypographyHeadingProps>;
  Content: React.FC<IComponent.CommonProps>;
} = {
  Heading,
  Content,
};

export default Typography;
