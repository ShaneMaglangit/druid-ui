import { forwardRef, HTMLAttributes } from "react";
import { PillColor, PillSize } from "@druid-ui/pill/types.ts";
import { cn } from "@druid-ui/util.ts";

const baseStyles = "rounded-full";

const colorStyles = {
  default: "bg-gray-200",
  primary: "bg-primary-50 text-primary-500",
  danger: "bg-danger-50 text-danger-500",
  warning: "bg-warning-50 text-warning-500",
} satisfies Record<PillColor, string>;

const sizeStyles = {
  default: "px-3 py-2",
  small: "px-2.5 py-1 text-sm",
} satisfies Record<PillSize, string>;

type PillProps = HTMLAttributes<HTMLDivElement> & {
  color?: PillColor;
  size?: PillSize;
};

export const Pill = forwardRef<HTMLDivElement, PillProps>(function Pill(
  { className, color = "default", size = "default", ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        baseStyles,
        colorStyles[color],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  );
});
