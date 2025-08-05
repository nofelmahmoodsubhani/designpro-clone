import * as React from "react";
import { AiOutlineChrome } from "react-icons/ai";

export interface ChromeButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function ChromeButton({ className, ...props }: ChromeButtonProps) {
  return (
    <div className="bg-secondary border border-border/30 p-1.5" style={{ borderRadius: '16px' }}>
      <a
        href="https://onbeacon.ai/premium-audit"
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "flex items-center justify-center px-5 py-2.5 font-medium text-lg border transition-all duration-150",
          "bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-border/40 hover:bg-muted focus-visible:ring-2 focus-visible:ring-border/60",
          className
        ].filter(Boolean).join(" ")}
        style={{ borderRadius: '16px' }}
        {...props}
      >
        <AiOutlineChrome className="mr-2 text-lg" />
        Try Premium Audit
      </a>
    </div>
  );
}