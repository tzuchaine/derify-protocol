import React from "react";
import Container from "../../common/components/Container";
import styles from "./Community.module.scss";
import CommunityCard from "./CommunityCard";

const CommunityData = [
  {
    imgSrc: "/icons/summary01.png",
    title: "Trader",
    desc:
      "As a trader,you can get profit via 2-way trading.You can also get risk-free yield from providing liquidity by position mining,or making hedged transactions to reduce the risk exposure of the system.",
  },
  {
    imgSrc: "/icons/summary01.png",
    title: "Broker",
    desc:
      "As a broker,you can run you own Decentralized Exchange and earn transaction fee rewards plus bonus DRF tokens.The more user and transactions you have,the more  profit you will get.",
  },
  {
    imgSrc: "/icons/summary01.png",
    title: "Developer",
    desc:
      "As a developer,you can contribute to the open-source community,or join the Bug Bounty program to increase the security of Derify protocol,and earn sizeable rewards.",
  },
  {
    imgSrc: "/icons/summary01.png",
    title: "Investor",
    desc:
      "As an investor,WELCOME to the future of decentralized derivative trading!DRF token is the fundamental asset of Derify Protocol.As a DAO,our ecosystem is completely governed by community.",
  },
];

const Community: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.title}>
          <h2>Get into the community</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.grid}>
            {CommunityData.map((item) => (
              <div className={styles["grid-item"]} key={item.title}>
                <CommunityCard
                  icon={<img src={item.imgSrc} alt={item.title} />}
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

export default Community;
