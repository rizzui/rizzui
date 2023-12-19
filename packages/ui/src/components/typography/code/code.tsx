import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';

const codeStyles = {
  pre: 'border ring-[0.5px] ring-muted border-muted py-3 px-4 rounded-lg bg-muted/70 backdrop-blur',
};

export type CodeProps = {
  className?: string;
} & React.HTMLAttributes<HTMLPreElement>;

export function Code({
  children,
  className,
  ...props
}: React.PropsWithChildren<CodeProps>) {
  return (
    <pre
      className={cn(makeClassName(`code`), codeStyles.pre, className)}
      {...props}
    >
      <code className="border-none bg-transparent p-0 shadow-none">
        {children}
      </code>
    </pre>
  );
}

Code.displayName = 'Code';
