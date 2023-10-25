import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';

export type BoldProps = {
  className?: string;
};

export function Bold({
  children,
  className,
}: React.PropsWithChildren<BoldProps>) {
  return <b className={cn(makeClassName(`bold`), className)}>{children}</b>;
}

Bold.displayName = 'Bold';
