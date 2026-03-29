import React from 'react';
import { createVariant } from '../../../lib/variants';

const code = createVariant({
  base: 'border ring-[0.5px] ring-border border-border py-3 px-4 rounded-lg bg-muted/70 backdrop-blur',
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
