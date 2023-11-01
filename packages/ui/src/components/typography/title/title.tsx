import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';

const titleStyles = {
  as: {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
  },
  fontWeight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semiBold: 'font-semibold',
    bold: 'font-bold',
    extraBold: 'font-extrabold',
  },
};

export type TitleProps = {
  as?: keyof typeof titleStyles.as;
  fontWeight?: keyof typeof titleStyles.fontWeight;
  className?: string;
};

export function Title({
  as = 'h2',
  fontWeight = 'bold',
  children,
  className,
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
    >
      {children}
    </Component>
  );
}

Title.displayName = 'Title';
