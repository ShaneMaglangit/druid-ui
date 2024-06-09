import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@druid-ui/util.ts";

const Divider = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Divider({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("h-[1px] w-full bg-gray-200", className)}
        {...props}
      ></div>
    );
  },
);

export default Divider;
