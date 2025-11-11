import React from 'react';
import { cn } from '../../../lib/cn';

export type BoldProps = {
  className?: string;
} & React.HTMLAttributes<any>;

export function Bold({
  children,
  className,
  ...props
}: React.PropsWithChildren<BoldProps>) {
  return (
    <b
      className={cn('rizzui-bold', 'text-text-primary', className)}
      {...props}
    >
      {children}
    </b>
  );
}

Bold.displayName = 'Bold';
