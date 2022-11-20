/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, }: Props) => JSX.Element;
