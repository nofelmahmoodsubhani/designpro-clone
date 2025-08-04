import * as React from "react";
import { FaFigma } from "react-icons/fa";

export interface FigmaButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function FigmaButton({ className, ...props }: FigmaButtonProps) {
  return (
    <div className="rounded-xl bg-secondary p-2 shadow-md">
      <a
        className={[
          "flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition",
          "bg-figma text-figmaForeground hover:bg-figmaHover",
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