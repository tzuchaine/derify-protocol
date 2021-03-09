import React from "react";
import Container from "../../common/components/Container";
import styles from "./Mechanism.module.scss";

const Mechanism: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.title}>
              <h2>Mechanism of</h2>
              <h2>Derify protocol</h2>
            </div>
            <div className={styles.decoration}></div>
          </div>
          <div className={styles.right}>
            <div className={styles.item}>
              <h3 className={styles.title}>Computable Contract</h3>
              <p className={styles.content}>
                In Derify protocol, trading action is considered as deposit a
                margin at one moment and withdraw the equity at another moment
                in future. The excution of the trading is to calculate the
                actual number of the equity. This moduleis the fundamental of
                Derify protocol.
              </p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>hAMM</h3>
              <p className={styles.content}>
                the market making theory in Derify protocol is called "hedged
                Automated Market Making"(hAMM). the market making theory in
                Derify protocol is called "hedged Automated Market
                Making"(hAMM). the market making theory in Derify protocol is
                called "hedged Automated Market Making"(hAMM).
                <a href="https://www.google.com/search?q=hAMM">lear more</a>
              </p>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>Position Mining</h3>
              <p className={styles.content}>
                In Derify protocol, position is liquidity. All positions provide
                liquidity to opposite positions. Yield Farmer can get sizeable
                returns by open and holding their positions(both long or short).
                We offer "2-way position opening" function for risk-free
                liquidity providing.
                <a href="https://www.google.com/search?q=Position Mining">
                  lear more
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Mechanism;
