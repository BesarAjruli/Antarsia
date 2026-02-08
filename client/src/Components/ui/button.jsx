import React from "react";

export function button({ children, variant = "default", size = "md", onClick }) {
  const base = "px-4 py-2 rounded font-medium transition-colors cursor-pointer";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };
  const sizes = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    icon: "p-2",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
