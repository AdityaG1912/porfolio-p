import React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "secondary";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-slate-900 text-white",
  outline: "border border-slate-900 text-slate-900 hover:bg-slate-900/10",
  secondary:
    "border border-indigo-400 text-indigo-400 bg-slate-900 hover:bg-slate-800",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium transition-colors",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
