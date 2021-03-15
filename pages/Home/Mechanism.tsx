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
                  In Derify protocol, trading action is conducted via
                  "computable contract", typical trading is considered as
                  deposit a margin at one moment and withdraw the equity at a
                  future moment, trader's execution of the trading is simplified
                  to calculate the remaining equity to ensure no slippage and
                  100% accuracy.
                </Typography.Content>
              </div>
            </div>
            <div className={styles.item}>
              <Typography.Heading level={4}>hAMM</Typography.Heading>
              <div className={styles.content}>
                <Typography.Content>
                  In Derify protocol, the market making is powered by "Hedged
                  Automated Market Making" (hAMM) algorithm. The key objective
                  of hAMM is similar to AMM: to restore the balance of system,
                  arbitrageurs can contribute to this objective while earning
                  risk-free profits. Apart from the key objective, hAMM theory
                  is also very different from AMM.
                </Typography.Content>
                <a href="">Learn more</a>
              </div>
            </div>
            <div className={styles.item}>
              <Typography.Heading level={4}>Position Mining</Typography.Heading>
              <div className={styles.content}>
                <Typography.Content>
                  In Derify protocol, position is liquidity. All positions
                  provide liquidity to opposite positions. Yield Farmer can get
                  considerable returns by holding positions(both long or short).
                  We offer "2-way position opening" function for risk-free
                  liquidity provision.
                </Typography.Content>
                <a href="">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Mechanism;
