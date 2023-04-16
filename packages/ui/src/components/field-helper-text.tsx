'use client';

import React from 'react';
import { cn } from '../lib/cn';

const helperTextClasses = {
  size: {
    sm: 'text-[11px] mt-0.5',
    DEFAULT: 'text-[13px] mt-0.5',
    lg: 'text-[13px] mt-1',
    xl: 'text-sm mt-1',
  },
};

export interface HelperTextProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  tag?: 'div' | 'span';
  size?: keyof typeof helperTextClasses.size;
  className?: string;
}

export default function HelperText({
  size,
  tag = 'div',
  children,
  className,
}: React.PropsWithChildren<HelperTextProps>) {
  const Component = tag;
  return (
    <Component
      role="alert"
      className={cn(size && helperTextClasses.size[size], className)}
    >
      {children}
    </Component>
  );
}
