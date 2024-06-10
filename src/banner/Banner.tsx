import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@druid-ui/util.ts";
import { BannerVariant } from "@druid-ui/banner/types.ts";
import { InfoIcon, TriangleAlert } from "lucide-react";

const baseStyle =
  "flex items-start gap-2 rounded-md border border-border-light p-3 font-medium dark:border-border-dark";

const colorStyles = {
  info: "bg-gray-100 dark:bg-gray-800 dark:text-white",
  danger: "bg-danger-500 bg-opacity-20 text-danger-500",
  warning: "bg-warning-200 bg-opacity-20 text-warning-500",
} satisfies Record<BannerVariant, string>;

const variantIcon = {
  info: <InfoIcon className="h-5 w-5" />,
  danger: <TriangleAlert className="h-5 w-5" />,
  warning: <TriangleAlert className="h-5 w-5" />,
};

type BannerProps = HTMLAttributes<HTMLDivElement> & {
  variant?: BannerVariant;
};

export const Banner = forwardRef<HTMLDivElement, BannerProps>(function Banner(
  { variant = "info", className, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(baseStyle, colorStyles[variant], className)}
      {...props}
    >
      <div className="flex-shrink-0">{variantIcon[variant]}</div>
      {children}
    </div>
  );
});
