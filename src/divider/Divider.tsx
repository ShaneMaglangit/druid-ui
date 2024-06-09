import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@druid-ui/util.ts";

const Divider = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Divider({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-border-dark dark:bg-border-light h-[1px] w-full",
          className,
        )}
        {...props}
      ></div>
    );
  },
);

export default Divider;
