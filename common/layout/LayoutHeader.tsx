import React, { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Hide from "../components/Hide";
import styles from "./Layout.module.scss";
import MenuIcon from "./MenuIcon";
import NavigationMenu, { Menu } from "./NavigationMenu";
import NavigationMenuForMobile from "./NavigationMenuForMobile";

const LayoutHeader: React.FC = () => {

  const [mobileMenuActive, setMobileMenuAcitve] = useState(false);

  const menus: Menu[] = [
    {
      name: "Home",
      link: "",
      active: true,
    },
    {
      name: "Learn",
      link: "",
      children: [
        {
          name: "docs",
          link: "",
        },
        {
          name: "Whitepaper",
          link: "",
        },
        {
          name: "Github",
          link: "",
        },
      ],
    },
    {
      name: "Blog",
      link: "",
    },
    {
      name: "Community",
      link: "",
      children: [
        {
          name: "Twitter",
          link: "",
        },
        {
          name: "Discord",
          link: "",
        },
        {
          name: "Telegram",
          link: "",
        },
        {
          name: "Reddit",
          link: "",
        },
        {
          name: "Forum",
          link: "",
        },
      ],
    },
  ];

  return (
    <header className={styles.header}>
      <Container style={{ overflow: "visible" }}>
        <nav className={styles.navbar}>
          <div className={styles.brand}>
            <img src="/brand.png" alt="brand image" />
          </div>
          <div className={`${styles.nav}`}>
            <Hide>
              <NavigationMenu menus={menus} />
            </Hide>
            <Hide style={{ width: "unset" }}>
              <Button variant="outlined" color="secondary" size="large">
                ExChange
              </Button>
            </Hide>
            <Hide up style={{ width: "unset" }}>
              <div className={styles["mobile-nav"]}>
                <MenuIcon
                  active={mobileMenuActive}
                  onToggle={setMobileMenuAcitve}
                />
                <NavigationMenuForMobile
                  menus={menus}
                  visible={mobileMenuActive}
                  onToggle={setMobileMenuAcitve}
                />
              </div>
            </Hide>
          </div>
        </nav>
      </Container>
    </header>
  );
};
export default LayoutHeader;
