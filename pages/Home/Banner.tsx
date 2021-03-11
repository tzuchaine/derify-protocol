import React from "react";
import AnimateBG from "../../common/components/AnimateBG";
import Button from "../../common/components/Button";
import Container from "../../common/components/Container";
import Typography from "../../common/components/Typography";
import styles from "./Banner.module.scss";

const Banner: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.title}>
          <Typography.Heading level={1}>The Decentralized</Typography.Heading>
          <Typography.Heading level={1}>
            Derivatives Trading Protocol For Everything
          </Typography.Heading>
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
      <div className={styles.background}>
        <AnimateBG />
      </div>
    </div>
  );
};
export default Banner;
