import clsx from "clsx";
import * as styles from "./Stack.css";

type StackProps = {
  /** HTML Element type */
  as?: "div" | "ul" | "ol" | "fieldset";
  /** Horizontal alignment of children */
  align?: "start" | "end" | "center";
  /** The spacing between children */
  gap?: "s" | "m" | "l";
  /** Reverse the render order of child items */
  reverse?: boolean;
  // hidden core props
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Use to display children vertically with full width by default. Based on CSS Flexbox.
 */
export default function Stack({
  as = "div",
  align,
  gap = "s",
  reverse = false,
  children,
  className,
  style,
}: StackProps) {
  const Component = as;
  const classNames = clsx(
    styles.base,
    align && styles.align[align],
    gap && styles.gap[gap],
    reverse && styles.reverse,
    className
  );
  return (
    <Component className={classNames} style={style}>
      {children}
    </Component>
  );
}