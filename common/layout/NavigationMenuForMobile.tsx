import React, { useCallback, useEffect, useMemo, useRef } from "react";
import styles from "./NavigationMenu.module.scss";

export type Menu = {
  active?: boolean;
  name: string;
  link?: string;
  children?: Menu[];
};

interface NavigationMenuProps {
  menus: Menu[];
  visible?: boolean;
  onToggle?: (value: boolean) => void;
}

const NavigationMenuForMobile: React.FC<NavigationMenuProps> = ({
  menus,
  visible,
  onToggle,
}) => {
  const renderMenuItem = useCallback((item: Menu, index: number) => {
    const _menuItemClasses = [styles["menu-item"]];

    if (item.active) _menuItemClasses.push(styles["menu-item__active"]);

    return (
      <div className={_menuItemClasses.join(" ")} key={`menu_${index}`}>
        <span className={styles["menu-name"]}>{item.name}</span>
      </div>
    );
  }, []);

  const classes = useMemo(() => {
    const _cls = [styles.mobile];
    if (visible) {
      _cls.push(styles.show);
    }
    return _cls;
  }, [visible]);

  return (
    <div className={classes.join(" ")}>
      <div
        className={styles.mask}
        onClick={() => {
          onToggle(false);
        }}
      ></div>
      <div className={styles.menu}>{menus.map(renderMenuItem)}</div>
    </div>
  );
};
export default NavigationMenuForMobile;
