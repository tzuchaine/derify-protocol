import React from "react";
// import AnimateBG from "../../common/components/AnimateBG";
import Button from "../../common/components/Button";
import Container from "../../common/components/Container";
import styles from "./Banner.module.scss";

const Banner: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.title}>
          <h1>The Decentralized</h1>
          <h1>Derivatives Trading Protocol For Everything</h1>
        </div>
        <div className={styles.subtitle}>
          <p>
            trade with leverage and guaranteed liquidity for all users
            decentralized applications
          </p>
        </div>
        <div className={styles.action}>
          <Button color="secondary" size="large">
            whitepaper
          </Button>
          <Button variant="outlined" color="primary" size="large">
            learn more
          </Button>
        </div>
      </Container>
      {/* <div className={styles.background}>
        <AnimateBG />
      </div> */}
    </div>
  );
};
export default Banner;
