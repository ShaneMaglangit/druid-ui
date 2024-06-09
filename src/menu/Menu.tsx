import { forwardRef, HTMLAttributes, LiHTMLAttributes } from "react";
import { cn } from "@druid-ui/util.ts";

export const MenuListItem = forwardRef<
  HTMLLIElement,
  LiHTMLAttributes<HTMLLIElement>
>(function MenuListItem(props, ref) {
  return <li ref={ref} {...props} />;
});

export const MenuList = forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement>
>(function Menu({ className, ...props }, ref) {
  return (
    <ul
      ref={ref}
      className={cn("flex flex-col gap-[0.125rem]", className)}
      {...props}
    />
  );
});

export const MenuHeader = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement> & {
    component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }
>(function MenuHeader({ className, ...props }, ref) {
  const Component = props.component;
  return (
    <Component
      ref={ref}
      className={cn(
        "px-3 py-2 text-xs font-semibold uppercase text-black-muted dark:text-black-trace",
        className,
      )}
      {...props}
    />
  );
});

export const Menu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Menu({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "border-border-light dark:border-border-dark flex flex-col gap-[1px] rounded-md border p-1",
          className,
        )}
        {...props}
      />
    );
  },
);
