import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
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

type ButtonProps = {
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPlacement?: "left" | "right";
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { as: "link" })
);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
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
    const classes = cn(
      baseStyle,
      colorStyles[color],
      sizeStyles.button[size],
      // Reducing horizontal padding keeps the visual weight of the button balanced.
      clsx("px-3", {
        ["pl-2"]: icon && iconPlacement === "left",
        ["pr-2"]: icon && iconPlacement === "right",
      }),
      className,
    );

    const content = (
      <>
        {iconPlacement === "left" && icon}
        {children}
        {iconPlacement === "right" && icon}
      </>
    );

    return props.as === "link" ? (
      <a
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        className={classes}
        {...props}
      >
        {content}
      </a>
    ) : (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={classes}
        {...props}
      >
        {content}
      </button>
    );
  },
);

export default Button;
