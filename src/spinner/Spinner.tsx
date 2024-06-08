import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@druid-ui/util.ts";
import { cva, VariantProps } from "class-variance-authority";
import { SpinnerColors } from "@druid-ui/spinner/types.ts";

const spinnerVariants = cva("inline animate-spin", {
  variants: {
    color: {
      default: "text-black dark:text-white",
      primary: "text-primary-500",
      danger: "text-danger-500",
      light: "text-white",
    } satisfies Record<SpinnerColors, string>,
    size: {
      default: "h-8 w-8",
      small: "h-6 w-6",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
  },
});

type SpinnerProps = HTMLAttributes<SVGSVGElement> &
  VariantProps<typeof spinnerVariants>;

const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(function Button(
  { className, color, size, ...props },
  ref,
) {
  return (
    <svg
      ref={ref}
      role="status"
      className={cn(spinnerVariants({ color, size, className }))}
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Loading</title>
      <circle
        className="opacity-25"
        cx="24"
        cy="24"
        r="16"
        stroke="currentColor"
        strokeWidth="8"
      />
      <circle
        className="animate-writhe opacity-75"
        cx="24"
        cy="24"
        r="16"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="8"
      />
    </svg>
  );
});

export default Spinner;
