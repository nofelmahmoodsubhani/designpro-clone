import { cn } from "@/lib/utils";

export interface CreatorBadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CreatorBadge({ className, ...props }: CreatorBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1 text-sm font-medium shadow-sm",
        className
      )}
      style={{
        background: 'var(--color-background)',
        color: 'var(--color-foreground)',
        border: '1px solid var(--border)',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: 'var(--font-size-base)',
        letterSpacing: 'var(--letter-spacing-tight)',
        boxShadow: '0 2px 8px 0 rgba(16,30,54,0.04)',
      }}
      {...props}
    >
      From the creators of
      <span
        className="ml-2 px-3 py-0.5 rounded-full"
        style={{
          background: 'var(--color-foreground)',
          color: 'var(--color-background)',
          fontWeight: 'var(--font-weight-semibold)',
        }}
      >
        Siri
      </span>
    </div>
  );
}
