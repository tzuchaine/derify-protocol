import React, { useCallback, useMemo } from "react";
import styles from "./NavigationMenu.module.scss";

export type Menu = {
  active?: boolean;
  name: string;
  link?: string;
  children?: Menu[];
};

interface NavigationMenuProps {
  menus: Menu[];
}

const ArrowIcon = () => (
  <svg viewBox="0 0 1024 1024" fill="currentColor">
    <path d="M512 739.390625c-11.81250001 0-23.625-5.06249999-32.0625-13.5L133.15625 358.859375c-16.875-17.71875-16.03125-45.5625 1.68750001-62.4375s45.5625-16.03125 62.43749999 1.6875L512 630.546875 826.71875 298.109375c16.875-17.71875 44.71875-18.5625 62.43749999-1.6875 17.71875 16.875 18.5625 44.71875 1.68750001 62.4375l-346.78125 366.18749999c-8.4375 9.28125-20.25 14.34375-32.0625 14.34375001z m0 0"></path>
  </svg>
);

const NavigationMenu: React.FC<NavigationMenuProps> = ({ menus }) => {
  const renderMenuItem = useCallback((item: Menu, index: number) => {
    const _hasChildren = item.children && item.children.length > 0;
    const _menuItemClasses = [styles["menu-item"]];

    if (item.active) _menuItemClasses.push(styles["menu-item__active"]);
    if (_hasChildren) _menuItemClasses.push(styles["menu-item__has-children"]);

    return (
      <div className={_menuItemClasses.join(" ")} key={`menu_${index}`}>
        <span className={styles["menu-name"]}>{item.name}</span>
        {_hasChildren && (
          <>
            <div className={styles["menu-arrow"]}>
              <ArrowIcon />
            </div>
            <div className={styles["menu-children"]}>
              {item.children.map(renderSubmenuItem)}
            </div>
          </>
        )}
      </div>
    );
  }, []);

  const renderSubmenuItem = useCallback((item: Menu, index: number) => {
    return (
      <div className={styles["menu-children-item"]} key={index}>
        {item.name}
      </div>
    );
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.menu}>{menus.map(renderMenuItem)}</div>
    </div>
  );
};
export default NavigationMenu;
