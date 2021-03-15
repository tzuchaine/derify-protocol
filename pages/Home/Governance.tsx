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
            Derify Protocol is a decentralized autonomous organization (DAO).
          </Typography.Content>
          <Typography.Content>
            Community members make proposals and decisions to improve the
            protocol.
          </Typography.Content>
          <Typography.Content>
            Public voting is conducted by burning eDRF (generate by staking
            DRF).
          </Typography.Content>
          <Typography.Content>
            Passed proposals will be strictly implemented.
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
