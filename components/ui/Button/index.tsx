import { variantClasses, sizeClasses, baseClasses } from "./data";
import type { ButtonProps } from "./types";

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconStart,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {iconStart}
      {children}
      {icon}
    </>
  );

  if (href) {
    return <a href={href} className={classes}>{content}</a>;
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
