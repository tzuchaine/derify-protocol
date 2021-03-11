import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Hide from "../components/Hide";
import styles from "./Layout.module.scss";
import MenuIcon from "./MenuIcon";

const LayoutHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
          <div className={styles.brand}>
            <img src="/brand.svg" alt="brand image" width="274" height="60" />
          </div>
          <div className={`${styles.nav}`}>
            <Hide>
              <ul>
                <li className={styles.active}>Home</li>
                <li>Learn</li>
                <li>Blog</li>
                <li>Community</li>
              </ul>
            </Hide>
            <Hide style={{  width: "unset"  }}>
              <Button variant="outlined" color="secondary" size="large">
                ExChange
              </Button>
            </Hide>
            <Hide up>
              <MenuIcon />
            </Hide>
          </div>
        </nav>
      </Container>
    </header>
  );
};
export default LayoutHeader;
