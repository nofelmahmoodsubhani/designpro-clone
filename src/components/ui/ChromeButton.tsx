import * as React from "react";
import { AiOutlineChrome } from "react-icons/ai";

export interface ChromeButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function ChromeButton({ className, ...props }: ChromeButtonProps) {
  return (
    <div className="rounded-xl bg-secondary p-2 shadow-md">
      <a
        className={[
          "flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition border",
          "bg-background text-foreground border-border hover:bg-accent",
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