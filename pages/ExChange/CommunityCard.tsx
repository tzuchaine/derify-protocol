import React from "react";
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
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}> {description}</div>
    </div>
  );
};
export default CommunityCard;
