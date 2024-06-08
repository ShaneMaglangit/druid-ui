import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@druid-ui/util.ts";
import { clsx } from "clsx";

const buttonVariants = cva(
  clsx(
    "inline-flex items-center justify-center gap-1",
    "text-sm font-medium",
    "focus-visible:ring-ring rounded-md focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        default:
          "text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800",
        primary: "bg-primary-500 text-white hover:bg-primary-800",
        danger: "bg-danger-500 text-white hover:bg-danger-800",
      },
      size: {
        default: "h-9 px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { asChild = false, className, variant, size, ...props },
    ref,
  ) {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
