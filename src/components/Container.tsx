import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Container({ children, className = '', style }: ContainerProps) {
  return (
    <div 
      className={`max-w-7xl mx-auto ${className}`}
      style={{
        paddingLeft: 'var(--space-8)',
        paddingRight: 'var(--space-8)',
        ...style,
      }}
    >
      {children}
    </div>
  );
} 