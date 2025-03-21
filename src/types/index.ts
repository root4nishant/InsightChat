import { CSSProperties, ReactNode } from "react";

export interface HeadingProps {
  text: string;
}

export interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

export interface SectionProps {
  children: ReactNode; // Content inside the section
  className?: string; // Additional CSS classes
  style?: CSSProperties; // Inline styles
}
