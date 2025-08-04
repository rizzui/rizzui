import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';
import { fontWeightStyles } from '../../../lib/font-weight';

const textStyles = {
  as: {
    p: '',
    i: '',
    b: '',
    q: 'text-lg',
    em: '',
    strong: '',
    small: '',
    span: '',
    del: '',
    mark: '',
    abbr: 'cursor-help',
    pre: 'border-2 border-muted py-3 px-4 rounded-xl bg-muted/70 backdrop-blur',
    code: 'border border-muted py-2 px-3 rounded-md shadow',
    kbd: 'bg-muted/70 backdrop-blur border border-muted text-gray-900 rounded-lg leading-none inline-flex items-center justify-center text-sm py-1.5 px-2',
    blockquote: 'border-l-4 border-muted text-lg py-3 px-4',
    sub: '',
    sup: '',
  },
  fontWeight: fontWeightStyles,
};

export type TextProps = {
  as?: keyof typeof textStyles.as;
  title?: string;
  fontWeight?: keyof typeof textStyles.fontWeight;
  className?: string;
} & React.HTMLAttributes<any>;

export function Text({
  as = 'p',
  fontWeight = 'normal',
  title,
  children,
  className,
  ...props
}: React.PropsWithChildren<TextProps>) {
  const Component = as;
  if (as === 'abbr' && title === undefined) {
    console.warn('title attribute is missing for abbr tag.');
  }

  if (as === 'b' && fontWeight === 'normal') {
    fontWeight = 'bold';
  }

  if (as === 'strong' && fontWeight === 'normal') {
    fontWeight = 'bold';
  }

  if (as === 'q' && fontWeight === 'normal') {
    fontWeight = 'semibold';
  }

  return (
    <Component
      {...(title && { title })}
      className={cn(
        makeClassName(`text-${as}`),
        textStyles.as[as],
        textStyles.fontWeight[fontWeight],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

Text.displayName = 'Text';
