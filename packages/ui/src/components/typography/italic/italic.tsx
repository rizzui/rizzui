import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';

export type ItalicProps = {
  className?: string;
};

export function Italic({
  children,
  className,
}: React.PropsWithChildren<ItalicProps>) {
  return <i className={cn(makeClassName(`italic`), className)}>{children}</i>;
}

Italic.displayName = 'Italic';
