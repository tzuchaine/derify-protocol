import React, { useEffect, useRef, useState } from "react";
import styles from "./Button.module.scss";

type ButtonColor = "default" | "primary" | "secondary";
type ButtonSize = "default" | "small" | "large";
type ButtonVariant = "contained" | "outlined" | "text";

export interface ButtonProps extends IComponent.CommonProps {
  color?: ButtonColor;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, style, onClick } = props;
  const {
    color,
    disabled,
    fullWidth,
    size = "default",
    variant = "contained",
    children,
  } = props;

  const ref = useRef<HTMLButtonElement>();

  const [classes, setClasses] = useState(() => {
    const cls = [
      styles.root,
      styles.base,
      styles[variant],
      styles[`size-${size}`],
      styles[`color-${color}`],
    ];
    if (fullWidth) cls.push(styles.full);
    if (disabled) cls.push(styles.disabled);
    if (className) cls.push(className);
    return cls;
  });

  useEffect(() => {
    const dom = ref.current;

    function mousedownEvent() {
      setClasses((classes) => {
        let _cls = [...classes];
        if (!_cls.includes(styles.click)) {
          _cls.push(styles.click);
        }
        return _cls;
      });
    }
    function mouseupEvent() {
      setClasses((classes) => {
        let _cls = [...classes];
        if (_cls.includes(styles.click)) {
          _cls = _cls.filter((item) => item !== styles.click);
        }
        return _cls;
      });
    }

    dom.addEventListener("touchstart", mousedownEvent);
    dom.addEventListener("touchend", mouseupEvent);
    dom.addEventListener("mousedown", mousedownEvent);
    dom.addEventListener("mouseup", mouseupEvent);
    dom.addEventListener("mouseleave", mouseupEvent);

    return () => {
      dom.removeEventListener("touchstart", mousedownEvent);
      dom.removeEventListener("touchend", mouseupEvent);
      dom.removeEventListener("mousedown", mousedownEvent);
      dom.removeEventListener("mouseup", mouseupEvent);
      dom.removeEventListener("mouseleave", mouseupEvent);
    };
  }, []);

  return (
    <button
      className={classes.join(" ")}
      style={style}
      onClick={onClick}
      ref={ref}
    >
      <span className={styles.label}>{children}</span>
    </button>
  );
};
export default Button;
