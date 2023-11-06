import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';

const classes = {
  pre: 'border ring-[0.5px] ring-gray-200 border-gray-200 py-3 px-4 rounded-lg bg-gray-100/50',
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
      className={cn(makeClassName(`code`), classes.pre, className)}
      {...props}
    >
      <code className="p-0 bg-transparent border-none shadow-none">
        {children}
      </code>
    </pre>
  );
}

Code.displayName = 'Code';
