import type { ReactNode } from 'react';
import classNameMerge from '@/shared/utils/classNameMerge';

type IconButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
};

export default function IconButton({
  children,
  onClick,
  className,
  disabled = false,
  title,
  type = 'button',
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={classNameMerge([
        'inline-flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring rounded disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      ])}
    >
      {children}
    </button>
  );
}