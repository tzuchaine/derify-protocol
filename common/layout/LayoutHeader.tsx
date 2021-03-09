import React from "react";
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
                <li>Home</li>
                <li>Learn</li>
                <li>Blog</li>
                <li>Community</li>
                <li className={styles.active}>ExChange</li>
              </ul>
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
