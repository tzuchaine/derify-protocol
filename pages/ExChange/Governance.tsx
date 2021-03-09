import React from "react";
import Button from "../../common/components/Button";
import Container from "../../common/components/Container";
import styles from "./Governance.module.scss";

const Governance: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Governance of Derify protocol</h2>
          </div>
          <div className={styles.subtitle}>
            <p>
              Derify Protocol is a fully decentralized autonomous
              organization(DAO).
            </p>
            <p>
              Completely governed by community, vote by burning eDRF(generate by
              staking DRF).
            </p>
            <p>
              Community participator can make proposals of improvement,proposals
              got enough votes would have
            </p>
            <p>guaranteed implementation.</p>
          </div>

          <div className={styles.action}>
            <Button variant="outlined" color="primary">
              Learn more
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Governance;
