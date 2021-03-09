import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Layout.module.scss";

const MenuIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuIconClick = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  const classes = useMemo(() => {
    const _cls = [styles["menu-icon"]];
    if (isOpen) {
      _cls.push(styles.open);
    }
    return _cls;
  }, [isOpen]);

  return (
    <div
      aria-label="Toggle Navigation"
      className={classes.join(" ")}
      onClick={handleMenuIconClick}
    >
      <svg viewBox="-50 -40 100 80" width="50" height="40">
        <defs>
          <path
            id="line"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            d="M -40 0 h 80"
          />
        </defs>
        <g>
          <g className={styles.translate} transform="translate(0 -30)">
            <g className={styles.rotate} transform="rotate(-45)">
              <use transform="rotate(45)" href="#line" />
            </g>
          </g>

          <g className={styles.rotate} transform="rotate(45)">
            <use transform="rotate(-45)" href="#line" />
          </g>

          <g className={styles.translate} transform="translate(0 30)">
            <g className={styles.rotate} transform="rotate(-45)">
              <use transform="rotate(45)" href="#line" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
export default MenuIcon;
