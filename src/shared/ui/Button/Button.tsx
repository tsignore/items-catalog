import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outlined" | "filled";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor = "primary" | "secondary" | "basic";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
  color?: ButtonColor;
  textColor?: string;
}

export const Button: FC<ButtonProps> = ({
  className = "",
  variant = "clear",
  size = "medium",
  children,
  disabled = false,
  color = "basic",
  textColor,
  ...otherProps
}) => {
  const buttonClasses = [
    cls.button,
    cls[variant],
    cls[size],
    cls[color],
    disabled ? cls.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      style={{ color: textColor }}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
