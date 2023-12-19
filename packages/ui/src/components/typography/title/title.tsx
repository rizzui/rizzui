import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';
import { fontWeightStyles } from '../../../lib/font-weight';

const fontWeight = {
  ...fontWeightStyles,
  extraBold: 'font-extrabold',
} as const;

const titleStyles = {
  as: {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
  },
  fontWeight,
};

export type TitleProps = {
  as?: keyof typeof titleStyles.as;
  fontWeight?: keyof typeof titleStyles.fontWeight;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Title({
  as = 'h2',
  fontWeight = 'bold',
  children,
  className,
  ...props
}: React.PropsWithChildren<TitleProps>) {
  const Component = as;

  return (
    <Component
      className={cn(
        makeClassName(`title-${as}`),
        titleStyles.as[as],
        titleStyles.fontWeight[fontWeight],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

Title.displayName = 'Title';
