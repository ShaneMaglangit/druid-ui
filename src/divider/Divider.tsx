import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@druid-ui/util.ts";

const Divider = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Divider({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-border-light dark:bg-border-dark my-1 h-[1px] w-full",
          className,
        )}
        {...props}
      ></div>
    );
  },
);

export default Divider;
