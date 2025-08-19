import type { ReactNode } from 'react';

export type TextVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body1' | 'body2' | 'caption' | 'overline'
  | 'logo';

export type TextProps = {
  children?: ReactNode;
  variant?: TextVariant;
  color?: 'primary' | 'secondary' | 'muted' | 'error' | 'inherit';
  align?: 'left' | 'center' | 'right';
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
};