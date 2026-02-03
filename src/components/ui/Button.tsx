import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md";
  asChild?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  asChild = false,
  children,
  className,
  ...props
}) => {
  const base =
    "inline-flex items-center bg-cursor cursor-pointer justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClass =
    variant === "default"
      ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:bg-gradient-to-r from-indigo-600 to-fuchsia-700 text-black"
      : "border border-border bg-transparent text-foreground hover:bg-slate-900";

  const sizeClass = size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-4 text-base";

  const Comp = asChild ? "span" : "button";

  return (
    <Comp className={cn(base, variantClass, sizeClass, className)} {...props}>
      {children}
    </Comp>
  );
};
