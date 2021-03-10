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
                <Typography.Heading level={1} style={{ fontWeight: 500 }}>
                  Mechanism of
                </Typography.Heading>
                <Typography.Heading level={1} style={{ fontWeight: 500 }}>
                  Derify protocol
                </Typography.Heading>
              </Hide>
              <Hide breakpoint="md" up>
                <Typography.Heading level={1} style={{ fontWeight: 500 }}>
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
              <Typography.Heading level={3}>
                Computable Contract
              </Typography.Heading>
              <div className={styles.content}>
                <p>
                  In Derify protocol, trading action is considered as deposit a
                  margin at one moment and withdraw the equity at another moment
                  in future. The excution of the trading is to calculate the
                  actual number of the equity. This moduleis the fundamental of
                  Derify protocol.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <Typography.Heading level={3}>hAMM</Typography.Heading>
              <div className={styles.content}>
                <p>
                  the market making theory in Derify protocol is called "hedged
                  Automated Market Making"(hAMM). the market making theory in
                  Derify protocol is called "hedged Automated Market
                  Making"(hAMM). the market making theory in Derify protocol is
                  called "hedged Automated Market Making"(hAMM).
                </p>
                <a href="https://www.google.com/search?q=hAMM">lear more</a>
              </div>
            </div>
            <div className={styles.item}>
              <Typography.Heading level={3}>Position Mining</Typography.Heading>
              <div className={styles.content}>
                <p>
                  In Derify protocol, position is liquidity. All positions
                  provide liquidity to opposite positions. Yield Farmer can get
                  sizeable returns by open and holding their positions(both long
                  or short). We offer "2-way position opening" function for
                  risk-free liquidity providing.
                </p>
                <a href="https://www.google.com/search?q=Position Mining">
                  lear more
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
