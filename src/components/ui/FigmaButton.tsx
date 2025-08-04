import * as React from "react";
import { FaFigma } from "react-icons/fa";

export interface FigmaButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function FigmaButton({ className, ...props }: FigmaButtonProps) {
  return (
<div className="bg-secondary border border-gray-200 rounded-xl px-1 py-1">
      <a
        className={[
          "flex items-center justify-center px-5 py-2.5 rounded-2xl font-medium text-lg border-0 transition-all duration-150",
          "bg-[#4285F4] text-white focus:outline-none focus:ring-2 focus:ring-[#4285F4]/40 hover:bg-[#1a73e8]",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <FaFigma className="mr-2 text-lg" />
        Try Figma Plugin
      </a>
    </div>
  );
}