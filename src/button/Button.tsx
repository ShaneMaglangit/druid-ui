import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@druid-ui/util.ts";
import { clsx } from "clsx";
import { ButtonColors } from "@druid-ui/button/types.ts";

const buttonVariants = cva(
  clsx(
    "inline-flex items-center justify-center gap-1",
    "truncate text-sm font-medium",
    "focus-visible:ring-ring rounded-md focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
  ),
  {
    variants: {
      color: {
        default:
          "text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800",
        primary: "bg-primary-500 text-white hover:bg-primary-800",
        danger: "bg-danger-500 text-white hover:bg-danger-800",
      } satisfies Record<ButtonColors, string>,
      size: {
        default: "h-9 py-1",
      },
    },
    defaultVariants: {
      color: "default",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    icon?: ReactNode;
    iconPlacement?: "left" | "right";
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    asChild = false,
    className,
    color,
    size,
    children,
    icon,
    iconPlacement = "left",
    ...props
  },
  ref,
) {
  const Component = asChild ? Slot : "button";
  const variantClasses = buttonVariants({ color, size });

  const iconSlot = <Slot className="h-[18px] w-[18px]">{icon}</Slot>;

  return (
    <Component
      ref={ref}
      className={cn(
        variantClasses,
        // Reducing horizontal padding keeps the visual weight of the button balanced.
        clsx("px-3", {
          ["pl-2"]: icon && iconPlacement === "left",
          ["pr-2"]: icon && iconPlacement === "right",
        }),
        className,
      )}
      {...props}
    >
      {iconPlacement === "left" && iconSlot}
      {children}
      {iconPlacement === "right" && iconSlot}
    </Component>
  );
});

export default Button;
