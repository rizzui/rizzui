import React from 'react';
import { cn } from '../../../lib/cn';

const classes = {
  p: '',
  i: '',
  b: '',
  q: '',
  em: '',
  strong: '',
  small: '',
  span: '',
  del: '',
  mark: '',
  abbr: 'cursor-help',
  pre: 'border-2 border-gray-300 py-3 px-4 rounded-xl bg-gray-100',
  code: 'border border-gray-300 py-2 px-3 rounded-md shadow',
  kbd: 'bg-gray-100 border border-gray-300 text-gray-900 rounded-lg leading-none inline-flex items-center justify-center text-sm py-1.5 px-2',
  blockquote: 'border-l-4 border-gray-300 text-quote py-3 px-4',
  sub: '',
  sup: '',
};

export type TextProps = {
  as?: keyof typeof classes;
  title?: string;
  className?: string;
};

export function Text({
  as = 'p',
  title,
  children,
  className,
}: React.PropsWithChildren<TextProps>) {
  const Component = as;
  if (as === 'abbr' && title === undefined) {
    console.warn('title attribute is missing for abbr tag.');
  }
  return (
    <Component {...(title && { title })} className={cn(classes[as], className)}>
      {children}
    </Component>
  );
}

Text.displayName = 'Text';
