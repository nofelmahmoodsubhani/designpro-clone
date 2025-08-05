import * as React from "react";
import { FaFigma } from "react-icons/fa";

export interface FigmaButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function FigmaButton({ className, ...props }: FigmaButtonProps) {
  return (
    <div className="bg-secondary border border-border/30 p-1.5" style={{ borderRadius: '16px' }}>
      <a
        className={[
          "flex items-center justify-center px-5 py-2.5 font-medium text-lg border-0 transition-all duration-150",
          "bg-figma text-figmaForeground focus:outline-none focus:ring-2 focus:ring-figma/40 hover:bg-figmaHover focus-visible:ring-2 focus-visible:ring-figma/60",
          className
        ].filter(Boolean).join(" ")}
        style={{ borderRadius: '16px' }}
        {...props}
      >
        <FaFigma className="mr-2 text-lg" />
        Try Figma Plugin
      </a>
    </div>
  );
}