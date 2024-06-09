import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@druid-ui/util.ts";

const Divider = forwardRef<
  HTMLDivElement,
  Omit<HTMLAttributes<HTMLDivElement>, "children">
>(function Divider({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "my-1 h-[1px] w-full bg-border-light dark:bg-border-dark",
        className,
      )}
      {...props}
    />
  );
});

export default Divider;
