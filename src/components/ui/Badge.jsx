import React from 'react';

const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-primary/10 border-primary/20 text-secondary',
    accent: 'bg-accent/10 border-accent/20 text-accent',
    neutral: 'bg-white/5 border-white/10 text-textMuted',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono border ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
