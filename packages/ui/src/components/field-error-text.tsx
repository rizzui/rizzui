import React from 'react';
import { cn } from '../lib/cn';

const errorStyles = {
  base: 'text-red',
  size: {
    sm: 'text-[11px] mt-0.5',
    md: 'text-[13px] mt-0.5',
    lg: 'text-[13px] mt-1',
    xl: 'text-sm mt-1',
  },
};

interface FieldErrorProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  tag?: 'div' | 'span';
  error: string | null | undefined;
  size?: keyof typeof errorStyles.size;
  className?: string;
}

export function FieldError({
  tag = 'div',
  error,
  size,
  className,
}: FieldErrorProps) {
  const Component = tag;
  return (
    <Component
      role="alert"
      className={cn(
        errorStyles.base,
        size && errorStyles.size[size],
        className
      )}
    >
      {error}
    </Component>
  );
}

FieldError.displayName = 'FieldError';
