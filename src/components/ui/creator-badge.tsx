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
        border: 'var(--border-width-normal) solid var(--border)',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--font-weight-medium)',
        fontSize: 'var(--font-size-base)',
        letterSpacing: 'var(--letter-spacing-tight)',
        boxShadow: 'var(--shadow-sm)',
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
