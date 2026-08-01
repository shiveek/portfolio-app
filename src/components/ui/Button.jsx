import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  target = '_self',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus:outline-none';

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25 border border-secondary/30',
    secondary: 'bg-surface hover:bg-surface/80 text-textMain border border-borderGlass hover:border-secondary/40',
    outline: 'bg-transparent text-secondary border border-secondary/40 hover:bg-secondary/10',
    ghost: 'bg-transparent text-textMuted hover:text-textMain hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      target={href ? target : undefined}
      rel={href && target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </Component>
  );
};

export default Button;
