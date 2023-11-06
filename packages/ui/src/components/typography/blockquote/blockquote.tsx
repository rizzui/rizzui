import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';

const classes = {
  blockquote: 'border-l-4 border-gray-300 text-quote py-3 px-4',
};

export type BlockquoteProps = {
  className?: string;
} & React.HTMLAttributes<HTMLQuoteElement>;

export function Blockquote({
  children,
  className,
  ...props
}: React.PropsWithChildren<BlockquoteProps>) {
  return (
    <blockquote
      className={cn(makeClassName(`blockquote`), classes.blockquote, className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

Blockquote.displayName = 'Blockquote';
