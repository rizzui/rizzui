import React from 'react';
import { tv } from 'tailwind-variants';
import { makeClassName } from '../../../lib/make-class-name';

const code = tv({
  base: 'border ring-[0.5px] ring-muted border-muted py-3 px-4 rounded-lg bg-muted/70 backdrop-blur',
});

export type CodeProps = {
  className?: string;
} & React.HTMLAttributes<HTMLPreElement>;

export function Code({
  children,
  className,
  ...props
}: React.PropsWithChildren<CodeProps>) {
  return (
    <pre className={code({ className })} {...props}>
      <code className="border-none bg-transparent p-0 shadow-none">
        {children}
      </code>
    </pre>
  );
}

Code.displayName = 'Code';
