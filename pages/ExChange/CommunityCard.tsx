import React from "react";
import Typography from "../../common/components/Typography";
import styles from "./Community.module.scss";

interface CommunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const CommunityCard: React.FC<CommunityCardProps> = (props) => {
  const { icon, title, description } = props;
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <Typography.Heading level={4} className={styles.title}>
        {title}
      </Typography.Heading>
      <Typography.Content className={styles.desc}>
        {description}
      </Typography.Content>
    </div>
  );
};
export default CommunityCard;
