import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';

const blockquoteStyles = {
  blockquote: 'border-l-4 border-mute text-quote py-3 px-4',
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
      className={cn(
        makeClassName(`blockquote`),
        blockquoteStyles.blockquote,
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}

Blockquote.displayName = 'Blockquote';
