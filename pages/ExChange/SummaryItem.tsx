import React from "react";
import Typography from "../../common/components/Typography";
import styles from "./Summary.module.scss";

interface SummaryItemProps {
  icon: string;
  title: string;
  description: string[];
}

const SummaryItem: React.FC<SummaryItemProps> = (props) => {
  const { icon, title, description } = props;

  return (
    <div className={styles.item}>
      <div style={{ display: "flex" }}>
        <div className={styles.icon}>
          <img src={icon} alt={icon} />
        </div>
        <div style={{ flex: 1 }}>
          <Typography.Heading level={4} className={styles.title}>
            {title}
          </Typography.Heading>
          <div className={styles.desc}>
            {description.map((item, index) => (
              <Typography.Content key={index}>{item}</Typography.Content>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SummaryItem;
