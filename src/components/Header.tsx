import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: 'hsl(var(--background))',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between"
        style={{
          paddingTop: 'var(--space-5)',
          paddingBottom: 'var(--space-5)',
          paddingLeft: 'var(--space-8)',
          paddingRight: 'var(--space-8)',
        }}>
        <div className="flex items-center" style={{ gap: 'var(--space-2)', marginLeft: 'var(--space-8)' }}>
          <Image
            src="/logo.png"
            alt="DesignPro Logo"
            width={32}
            height={32}
            priority
            style={{ filter: 'var(--logo-filter)' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--font-weight-semibold)',
              fontSize: '1.35rem',
              color: 'var(--color-foreground)',
              letterSpacing: 'var(--letter-spacing-tight)',
            }}
          >
            DesignPro
          </span>
        </div>
        <nav className="flex items-center" style={{ gap: 'var(--space-8)', marginRight: 'calc(var(--space-8) * 2)' }}>
          <Link
            href="#features"
            className="transition-colors"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '1.07rem',
              color: 'var(--color-foreground)',
            }}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="transition-colors"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '1.07rem',
              color: 'var(--color-foreground)',
            }}
          >
            Pricing
          </Link>
        </nav>
      </div>
    </header>
  );
}
