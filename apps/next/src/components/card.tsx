import React from 'react';

import { cn } from 'rizzui/cn';

const borderDirection = {
  top: 'border-t-4',
  right: 'border-r-4',
  bottom: 'border-b-4',
  left: 'border-l-4',
};

const borderDirectionColors = {
  purple: 'border-purple-500',
  indigo: 'border-indigo-500',
  cyan: 'border-cyan-500',
  fuchsia: 'border-fuchsia-500',
  rose: 'border-rose-500',
  emerald: 'border-emerald-500',
};

type CardElementType = 'span' | 'div' | 'section';

interface CardPropsType extends React.HTMLAttributes<HTMLDivElement> {
  direction?: keyof typeof borderDirection;
  directionColor?: keyof typeof borderDirectionColors;
  as?: CardElementType;
  children?: React.ReactNode;
}

const components: Record<CardElementType, React.ElementType> = {
  span: 'span',
  div: 'div',
  section: 'section',
};

export const Card = React.forwardRef<HTMLDivElement, CardPropsType>(
  (props, ref) => {
    const {
      as = 'div',
      direction,
      directionColor,
      className,
      children,
      ...rest
    } = props;

    const Component = components[as] || 'div';

    return (
      <Component
        ref={ref}
        className={cn(
          'border p-7 rounded-lg dark:bg-steel-700 bg-steel-50/30 border-steel-100 dark:border-steel-600/50 relative',
          direction && borderDirection[direction],
          directionColor && borderDirectionColors[directionColor],
          className,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Card.displayName = 'Card';