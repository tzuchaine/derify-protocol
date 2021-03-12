import React from "react";
import Container from "../../common/components/Container";
import Hide from "../../common/components/Hide";
import MechanismBG from "../../common/components/MechanismBG";
import Typography from "../../common/components/Typography";
import styles from "./Mechanism.module.scss";

const Mechanism: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.title}>
              <Hide breakpoint="md">
                <Typography.Heading level={2}>Mechanism of</Typography.Heading>
                <Typography.Heading level={2}>
                  Derify protocol
                </Typography.Heading>
              </Hide>
              <Hide breakpoint="md" up>
                <Typography.Heading level={2}>
                  Mechanism of Derify protocol
                </Typography.Heading>
              </Hide>
            </div>
            <Hide breakpoint="md">
              <div className={styles.decoration}>
                <MechanismBG />
              </div>
            </Hide>
          </div>
          <div className={styles.right}>
            <div className={styles.item}>
              <Typography.Heading level={4}>
                Computable Contract
              </Typography.Heading>
              <div className={styles.content}>
                <Typography.Content>
                  In Derify protocol, trading action is considered as deposit a
                  margin at one moment and withdraw the equity at another moment
                  in future. The excution of the trading is to calculate the
                  actual number of the equity. This model is the fundamental of
                  Derify protocol.
                </Typography.Content>
              </div>
            </div>
            <div className={styles.item}>
              <Typography.Heading level={4}>hAMM</Typography.Heading>
              <div className={styles.content}>
                <Typography.Content>
                  The market making theory in Derify protocol is called “hedged
                  Automated Market Making” (hAMM). The key objective of hAMM is
                  similar to AMM: the imbalance of system causes arbitrage
                  oppertunity, arbitrageurs can make risk-free profits by
                  restoring the balance of system. Apart from the key objective,
                  hAMM theory is very different from AMM.
                </Typography.Content>
                <a href="https://www.google.com/search?q=hAMM">learn more</a>
              </div>
            </div>
            <div className={styles.item}>
              <Typography.Heading level={4}>Position Mining</Typography.Heading>
              <div className={styles.content}>
                <Typography.Content>
                  In Derify protocol, position is liquidity. All positions
                  provide liquidity to opposite positions. Yield Farmer can get
                  sizeable returns by open and holding their positions(both long
                  or short). We offer “2-way position opening” function for
                  risk-free liquidity providing.
                </Typography.Content>
                <a href="https://www.google.com/search?q=Position Mining">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Mechanism;
