import React, { useEffect, useRef, useState } from "react";
import styles from "./Summary.module.scss";

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = (props) => {
  const { icon, title, description } = props;

  return (
    <div className={styles.card} data-rule="animation">
      <div style={{ display: "flex" }}>
        <div className={styles.icon}>{icon}</div>
        <div style={{ flex: 1 }}>
          <div className={styles.title}>{title}</div>
          <div className={styles.desc}> {description}</div>
        </div>
      </div>
    </div>
  );
};
export default SummaryCard;
