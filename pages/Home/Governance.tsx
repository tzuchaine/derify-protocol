import React from "react";
import Button from "../../common/components/Button";
import Container from "../../common/components/Container";
import Typography from "../../common/components/Typography";
import styles from "./Governance.module.scss";

const Governance: React.FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.title}>
          <Typography.Heading level={2}>
            Governance of Derify protocol
          </Typography.Heading>
        </div>
        <div>
          <Typography.Content>
            Derify Protocol is a fully decentralized autonomous organization
            (DAO).
          </Typography.Content>
          <Typography.Content>
            Completely governed by community, vote by burning eDRF (generate by
            staking DRF).
          </Typography.Content>
          <Typography.Content>
            Community participator can make proposals of improvement, proposals
            got enough votes would have guaranteed implementation.
          </Typography.Content>
        </div>

        <div className={styles.action}>
          <Button variant="outlined" color="primary" size="large">
            Learn more
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Governance;
