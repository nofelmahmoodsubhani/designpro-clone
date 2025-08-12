"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full" style={{ background: 'hsl(var(--background))' }}>
      <div 
        className="max-w-7xl mx-auto flex items-center justify-between"
        style={{
          paddingTop: 'var(--space-8)',
          paddingBottom: 'var(--space-8)',
          paddingLeft: 'var(--space-8)',
          paddingRight: 'var(--space-8)',
        }}
      >
        {/* Left Section - Logo and Legal Links */}
        <div className="flex items-center" style={{ gap: 'var(--space-4)', marginLeft: 'var(--space-8)' }}>
          {/* Logo */}
          <div className="flex items-center" style={{ gap: 'var(--space-2)' }}>
            <Image
              src="/logo.png"
              alt="DesignPro Logo"
              width={24}
              height={24}
              style={{ filter: 'var(--logo-filter)' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-xl-rem)',
                color: 'var(--color-foreground)',
                letterSpacing: 'var(--letter-spacing-tight)',
              }}
            >
              DesignPro
            </span>
          </div>

          {/* Separator */}
          <div 
            className="w-1 h-1 rounded-full bg-muted-foreground/60"
            style={{ marginLeft: 'var(--space-4)' }}
          />

          {/* Legal Links */}
          <div className="flex items-center" style={{ gap: 'var(--space-4)' }}>
            <Link
              href="/privacy"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === '/privacy' ? 'text-muted-foreground/80' : 'text-foreground'
              }`}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 'var(--font-weight-normal)',
                fontSize: 'var(--font-size-lg-rem)',
              }}
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === '/terms' ? 'text-muted-foreground/80' : 'text-foreground'
              }`}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 'var(--font-weight-normal)',
                fontSize: 'var(--font-size-lg-rem)',
              }}
            >
              Terms and Conditions
            </Link>
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex items-center" style={{ gap: 'var(--space-2)', marginRight: 'calc(var(--space-8) * 2)' }}>
          <FaLinkedin 
            className="text-muted-foreground/70"
            style={{ fontSize: 'var(--font-size-xl-rem)' }}
          />
          <Link
            href="https://www.linkedin.com/company/onbeaconai"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/80 text-foreground"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--font-weight-normal)',
              fontSize: 'var(--font-size-lg-rem)',
            }}
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
} 