import type { TextProps, TextVariant } from '@/shared/types/textTypes';
import classNameMerge from '@/shared/utils/classNameMerge';

const variantMapping: Record<TextVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
  logo: 'h1',
};

export default function Text({
  children,
  variant = 'body1',
  color = 'inherit',
  align = 'left',
  className,
  id,
  as,
}: TextProps) {
  const Component = as || variantMapping[variant];

  const variantClasses = {
    h1: 'text-4xl font-bold leading-tight',
    h2: 'text-3xl font-bold leading-tight',
    h3: 'text-2xl font-semibold leading-tight',
    h4: 'text-xl font-semibold leading-tight',
    h5: 'text-lg font-medium leading-tight',
    h6: 'text-base font-medium leading-tight',
    body1: 'text-base leading-relaxed',
    body2: 'text-sm leading-relaxed',
    caption: 'text-xs leading-tight',
    overline: 'text-xs font-medium uppercase tracking-wide leading-tight',
    logo: 'text-5xl font-black tracking-tight leading-none',
  }[variant];

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary-foreground',
    muted: 'text-muted-foreground',
    error: 'text-error',
    inherit: 'text-inherit',
  }[color];

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <Component
      id={id}
      className={classNameMerge([
        variantClasses,
        colorClasses,
        alignClasses,
        className,
      ])}
    >
      {children}
    </Component>
  );
}