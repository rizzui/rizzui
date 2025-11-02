import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const fieldHelperText = tv({
  variants: {
    size: {
      sm: 'text-[11px] mt-0.5',
      md: 'text-[13px] mt-0.5',
      lg: 'text-[13px] mt-1',
      xl: 'text-sm mt-1',
    },
  },
});

export interface FieldHelperTextProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  as?: 'div' | 'span';
  size?: VariantProps<typeof fieldHelperText>['size'];
  className?: string;
}

export function FieldHelperText({
  size,
  as = 'div',
  children,
  className,
}: React.PropsWithChildren<FieldHelperTextProps>) {
  const Component = as;
  return (
    <Component role="alert" className={fieldHelperText({ size, className })}>
      {children}
    </Component>
  );
}

FieldHelperText.displayName = 'FieldHelperText';
