import "./mylabel.css";

export interface Props {
  /**
   * Este es el mensajito bien melo?
   */
  label: string;
  size: "normal" | "h1" | "h2" | "h3";
  allCaps: boolean;
  color?: "primary" | "secondary" | "tertiary";
  fontColor?: string;
}
/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  label = "NoLabel",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <div
      className={`label ${size} text-${color}`}
      style={{
        textTransform: allCaps ? "uppercase" : "inherit",
        color: fontColor && fontColor,
      }}
    >
      {label}
    </div>
  );
};
