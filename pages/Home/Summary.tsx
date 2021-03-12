import React from "react";
import Container from "../../common/components/Container";
import Typography from "../../common/components/Typography";
import styles from "./Summary.module.scss";
import SummaryItem from "./SummaryItem";

const SummaryData = [
  {
    icon: "/icons/summary01.svg",
    title: "2-Way Position",
    desc: [
      "go long and short freely",
      "up to 10x leverage open 2-way position in the",
      "same time",
    ],
  },
  {
    icon: "/icons/summary02.svg",
    title: "No Slippage",
    desc: [
      "index not affected by liquidity",
      "trade with actual price synchronized with external",
      "markets",
    ],
  },
  {
    icon: "/icons/summary03.svg",
    title: "RISK-FREE Liquidity Staking",
    desc: [
      "built-in cross margin trading",
      "guaranteed ZERO impermanent loss 2-way positions",
      "will never be liquidated",
    ],
  },
  {
    icon: "/icons/summary04.svg",
    title: "High Performance And Low Gas Fee",
    desc: [
      "based on xDai stable side-chain",
      "gas fee as low as $0.0001 future upgrade to rollup",
      "solution",
    ],
  },
  {
    icon: "/icons/summary05.svg",
    title: "Fully Decentralized",
    desc: [
      "completely anti-cencorship",
      "index powered by ORACLE sverifiable on-chain",
      "transactions",
    ],
  },
  {
    icon: "/icons/summary06.svg",
    title: "Any Index and Collaterals",
    desc: [
      "free to create any index products",
      "off-chain assets supported use any cryptocurrency",
      "as collaterals",
    ],
  },
];

const Summary: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.title}>
          <Typography.Heading level={2}>
            Derify protocol is the NEXT Generation decentralized
          </Typography.Heading>
          <Typography.Heading level={2}>
            derivatives trading protocol
          </Typography.Heading>
        </div>
        <div className={styles.content}>
          <div className={styles.grid}>
            {SummaryData.map((item) => (
              <div className={styles["grid-item"]} key={item.title}>
                <SummaryItem
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
