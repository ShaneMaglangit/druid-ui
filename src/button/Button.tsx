import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@druid-ui/util.ts";
import { clsx } from "clsx";
import { ButtonColor, ButtonSize } from "@druid-ui/button/types.ts";

const baseStyle = clsx(
  "inline-flex items-center justify-center gap-1",
  "truncate text-sm font-medium",
  "focus-visible:ring-ring rounded-md focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
);

const colorStyles = {
  default:
    "text-black hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800",
  primary: "bg-primary-500 text-white hover:bg-primary-800",
  danger: "bg-danger-500 text-white hover:bg-danger-800",
} satisfies Record<ButtonColor, string>;

const sizeStyles = {
  button: {
    default: "h-9 py-1",
  },
  icon: {
    default: "h-[18px] w-[18px]",
  },
} satisfies {
  button: Record<ButtonSize, string>;
  icon: Record<ButtonSize, string>;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPlacement?: "left" | "right";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    asChild = false,
    className,
    color = "default",
    size = "default",
    children,
    icon,
    iconPlacement = "left",
    ...props
  },
  ref,
) {
  const Component = asChild ? Slot : "button";
  const iconSlot = <Slot className={sizeStyles.icon[size]}>{icon}</Slot>;

  return (
    <Component
      ref={ref}
      className={cn(
        baseStyle,
        colorStyles[color],
        sizeStyles.button[size],
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
