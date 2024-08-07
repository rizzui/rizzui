import React from 'react';
import { cn } from 'src/lib/cn';

const gridStyles = {
  columns: {
    '1': 'grid-cols-1',
    '2': 'grid-cols-2',
    '3': 'grid-cols-3',
    '4': 'grid-cols-4',
    '5': 'grid-cols-5',
    '6': 'grid-cols-6',
    '7': 'grid-cols-7',
    '8': 'grid-cols-8',
    '9': 'grid-cols-9',
    '10': 'grid-cols-10',
    '11': 'grid-cols-11',
    '12': 'grid-cols-12',
  },
  gap: {
    '1': 'gap-1',
    '2': 'gap-2',
    '3': 'gap-3',
    '4': 'gap-4',
    '5': 'gap-5',
    '6': 'gap-6',
    '7': 'gap-7',
    '8': 'gap-8',
    '9': 'gap-9',
    '10': 'gap-10',
    '11': 'gap-11',
    '12': 'gap-12',
  },
};

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  /* defines the component tag name to render */
  as?: React.ElementType;
  /* defines the gap between grid items */
  gap?: keyof typeof gridStyles.gap;
  /* defines the number of columns in the grid */
  columns?: keyof typeof gridStyles.columns;
}

export const Grid = React.forwardRef(
  (props: GridProps, forwardRef: React.Ref<HTMLElement>) => {
    const {
      as,
      children,
      columns = '1',
      gap = '4',
      className,
      ...rest
    } = props;

    const Comp = as || 'div';

    return (
      <Comp
        ref={forwardRef}
        className={cn(
          'grid',
          gridStyles.columns[columns],
          gridStyles.gap[gap],
          className
        )}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

Grid.displayName = 'Grid';
