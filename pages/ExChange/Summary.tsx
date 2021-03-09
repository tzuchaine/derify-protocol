import React from "react";
import Container from "../../common/components/Container";
import styles from "./Summary.module.scss";
import SummaryCard from "./SummaryCard";

import TwoWayIcon from "./animatedIcons/TwoWay";

const SummaryData = [
  {
    icon: <TwoWayIcon />,
    title: "2-Way Position",
    desc:
      "go long and short freely up to 10x leverage open 2-way position in the same time",
  },
  {
    icon: <TwoWayIcon />,
    title: "No Slippage",
    desc:
      "index not affected by liquidity trade winth actual price synchronized with external markets",
  },
  {
    icon: <TwoWayIcon />,
    title: "RISK-FREE Liquidity Staking",
    desc:
      "built-in cross margin trading guaranteed ZERO impermanent loss 2-way positions will never be liquidated  ",
  },
  {
    icon: <TwoWayIcon />,
    title: "High Performance And Low Gas Fee",
    desc:
      "based on xDay stable side-chain gas fee as low as $0.0001 future upgrade to rollup solution",
  },
  {
    icon: <TwoWayIcon />,
    title: "Fully Decentralized",
    desc:
      "completely anti-cencorship index powered by ORACLEs verifiable on-chain transactions",
  },
  {
    icon: <TwoWayIcon />,
    title: "Any Index and Collaterals",
    desc:
      "free to create any index products off-chain assets supported use any cryptocurrency as collaterals",
  },
];

const Summary: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.title}>
          <h2>
            Derify protocol is the NEXT Generation decentralized derivatives
          </h2>
          <h2>trading protocol</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.grid}>
            {SummaryData.map((item) => (
              <div className={styles["grid-item"]} key={item.title}>
                <SummaryCard
                  icon={item.icon}
                  title={item.title}
                  description={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Summary;
