import type { BasicButtonProps } from '@/shared/types/buttonTypes';
import classNameMerge from '@/shared/utils/classNameMerge';

export default function BasicButton({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className,
  onClick,
  type = 'button',
  id,
  title,
}: BasicButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50';
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm rounded-sm',
    md: 'h-12 px-6 text-base rounded',
    lg: 'h-14 px-8 text-lg rounded-lg',
  }[size];

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover shadow-sm',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border',
    ghost: 'text-foreground hover:bg-muted/50 active:bg-muted',
    outline: 'border border-input-border text-foreground hover:bg-muted/30 active:bg-muted/50',
  }[variant];

  return (
    <button
      type={type}
      disabled={disabled}
      title={title}
      id={id}
      onClick={onClick}
      className={classNameMerge([
        baseClasses,
        sizeClasses,
        variantClasses,
        fullWidth && 'w-full',
        className,
      ])}
    >
      {children}
    </button>
  );
}