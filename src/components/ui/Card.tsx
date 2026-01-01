import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "glass-card rounded-2xl p-6 text-card-foreground shadow-sm",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

export { Card };
