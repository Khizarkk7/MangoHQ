import React from "react";

// Define the types for variant and size
type ButtonVariant = "default" | "ghost" | "outline";
type ButtonSize = "default" | "sm" | "lg";

// Define the props for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

// Function to get styles based on props
const getButtonStyles = (variant: ButtonVariant, size: ButtonSize) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variants: { [key in ButtonVariant]: string } = {
    default: "bg-orange-600 text-white hover:bg-orange-700",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };

  const sizes: { [key in ButtonSize]: string } = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  };

  return `${baseStyles} ${variants[variant]} ${sizes[size]}`;
};

export function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button className={`${getButtonStyles(variant, size)} ${className}`} {...props}>
      {children}
    </button>
  );
}