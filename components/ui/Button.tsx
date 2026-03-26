import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  icon?: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-[#1a8f40] active:bg-[#166e33]",
  secondary:
    "bg-gray-950 text-white hover:bg-gray-850 active:bg-gray-850",
  ghost:
    "bg-transparent border border-gray-100 text-gray-950 hover:bg-gray-50",
  dark:
    "bg-[#2b2b2b] text-white hover:bg-gray-850",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-8 py-4 text-base rounded-[20px]",
  lg: "px-10 py-4 text-base rounded-[20px]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 cursor-pointer select-none";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon}
    </button>
  );
}
