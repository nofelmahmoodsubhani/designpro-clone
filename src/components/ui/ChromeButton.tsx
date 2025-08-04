import * as React from "react";
import { AiOutlineChrome } from "react-icons/ai";

export interface ChromeButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function ChromeButton({ className, ...props }: ChromeButtonProps) {
  return (
<div className="bg-secondary border border-gray-200 rounded-xl px-1 py-1">
      <a
        className={[
          "flex items-center justify-center px-5 py-2.5 rounded-2xl font-medium text-lg border transition-all duration-150",
          "bg-white text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200/40 hover:bg-gray-50",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <AiOutlineChrome className="mr-2 text-lg" />
        Try Chrome Extension
      </a>
    </div>
  );
}