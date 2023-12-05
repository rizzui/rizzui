import React from 'react';
import { cn } from '../lib/cn';

const helperTextStyles = {
  size: {
    sm: 'text-[11px] mt-0.5',
    md: 'text-[13px] mt-0.5',
    lg: 'text-[13px] mt-1',
    xl: 'text-sm mt-1',
  },
};

export interface FieldHelperTextProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  tag?: 'div' | 'span';
  size?: keyof typeof helperTextStyles.size;
  className?: string;
}

export function FieldHelperText({
  size,
  tag = 'div',
  children,
  className,
}: React.PropsWithChildren<FieldHelperTextProps>) {
  const Component = tag;
  return (
    <Component
      role="alert"
      className={cn(size && helperTextStyles.size[size], className)}
    >
      {children}
    </Component>
  );
}

FieldHelperText.displayName = 'FieldHelperText';
