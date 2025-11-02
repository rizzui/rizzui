import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const fieldError = tv({
  base: 'text-red',
  variants: {
    size: {
      sm: 'text-[11px] mt-0.5',
      md: 'text-[13px] mt-0.5',
      lg: 'text-[13px] mt-1',
      xl: 'text-sm mt-1',
    },
  },
});

interface FieldErrorProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  as?: 'div' | 'span';
  error: string | null | undefined;
  size?: VariantProps<typeof fieldError>['size'];
  className?: string;
}

export function FieldError({
  as = 'div',
  error,
  size,
  className,
}: FieldErrorProps) {
  const Component = as;
  return (
    <Component role="alert" className={fieldError({ size, className })}>
      {error}
    </Component>
  );
}

FieldError.displayName = 'FieldError';
