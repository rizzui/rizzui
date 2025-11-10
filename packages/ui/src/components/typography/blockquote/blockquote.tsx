import React from 'react';
import { tv } from 'tailwind-variants';

const blockquote = tv({
  base: 'border-l-4 border-border text-quote py-3 px-4 text-text-primary',
});

export type BlockquoteProps = {
  className?: string;
} & React.HTMLAttributes<HTMLQuoteElement>;

export function Blockquote({
  children,
  className,
  ...props
}: React.PropsWithChildren<BlockquoteProps>) {
  return (
    <blockquote className={blockquote({ className })} {...props}>
      {children}
    </blockquote>
  );
}

Blockquote.displayName = 'Blockquote';
