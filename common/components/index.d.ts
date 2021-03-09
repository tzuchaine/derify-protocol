import { CSSProperties } from "react";
export as namespace IComponent;

export interface CommonProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}
