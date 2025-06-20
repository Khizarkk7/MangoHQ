import React from "react";

// Define the types for the badge variants
type BadgeVariant = "default" | "secondary";

// Define the props for the Badge component, including variants
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

// Map variants to their corresponding CSS classes
const variantStyles: { [key in BadgeVariant]: string } = {
  default: "bg-gray-100 text-gray-800 border-transparent",
  secondary: "bg-gray-200 text-gray-900 border-transparent",
};

// The Badge component now accepts a 'variant' prop
export function Badge({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold ${variantStyles[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}
