import { forwardRef, HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { cn } from "@druid-ui/util.ts";

type DialogProps = Omit<HTMLAttributes<HTMLDivElement>, "onClick"> & {
  isOpen: boolean;
  backdropProps?: HTMLAttributes<HTMLDivElement>;
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(function Dialog(
  { isOpen, className, children, backdropProps, ...props },
  ref,
) {
  return isOpen
    ? createPortal(
        <div
          className="z-modal fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm"
          {...backdropProps}
        >
          <div
            ref={ref}
            className={cn(
              "rounded-md bg-white p-4 dark:bg-gray-800",
              className,
            )}
            onClick={(e) => e.stopPropagation()}
            {...props}
          >
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
});
