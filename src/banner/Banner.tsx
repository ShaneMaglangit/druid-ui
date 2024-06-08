import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@druid-ui/util.ts";
import { BannerVariant } from "@druid-ui/banner/types.ts";
import { Slot } from "@radix-ui/react-slot";

const bannerVariants = cva(
  "flex items-start gap-2 rounded-md border border-gray-200 p-3 font-medium dark:border-gray-700",
  {
    variants: {
      variant: {
        info: "bg-gray-100 dark:bg-gray-800 dark:text-white",
        danger: "bg-danger-500 bg-opacity-20 text-danger-500",
        warning: "bg-warning-200 bg-opacity-20 text-warning-500",
      } satisfies Record<BannerVariant, string>,
      defaultVariants: {
        variant: "info",
      },
    },
  },
);

type BannerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof bannerVariants> & { icon?: ReactNode };

const Banner = forwardRef<HTMLDivElement, BannerProps>(function Banner(
  { variant, className, icon, children, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(bannerVariants({ variant, className }))}
      {...props}
    >
      {icon && <Slot className="h-5 w-5 flex-shrink-0">{icon}</Slot>}
      {children}
    </div>
  );
});

export default Banner;
