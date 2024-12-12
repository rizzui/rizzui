import React from 'react';
import { cn } from 'src/lib/cn';
import { GridCol } from './grid-col';

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
    none: 'grid-cols-none',
    subgrid: 'grid-cols-subgrid',
  },
  rows: {
    '1': 'grid-rows-1',
    '2': 'grid-rows-2',
    '3': 'grid-rows-3',
    '4': 'grid-rows-4',
    '5': 'grid-rows-5',
    '6': 'grid-rows-6',
    '7': 'grid-rows-7',
    '8': 'grid-rows-8',
    '9': 'grid-rows-9',
    '10': 'grid-rows-10',
    '11': 'grid-rows-11',
    '12': 'grid-rows-12',
    none: 'grid-rows-none',
    subgrid: 'grid-rows-subgrid',
  },
  gap: {
    '0': 'gap-0',
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
  align: {
    end: 'items-end',
    start: 'items-start',
    center: 'items-center',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  },
  justify: {
    end: 'justify-end',
    start: 'justify-start',
    around: 'justify-around',
    normal: 'justify-normal',
    center: 'justify-center',
    evenly: 'justify-evenly',
    between: 'justify-between',
    stretch: 'justify-stretch',
  },
  placeContent: {
    center: 'place-content-center',
    start: 'place-content-start',
    end: 'place-content-end',
    between: 'place-content-between',
    around: 'place-content-around',
    evenly: 'place-content-evenly',
    baseline: 'place-content-baseline',
    stretch: 'place-content-stretch',
  },
  placeItems: {
    center: 'place-items-center',
    start: 'place-items-start',
    end: 'place-items-end',
    baseline: 'place-items-baseline',
    stretch: 'place-items-stretch',
  },
};

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  /* defines the component tag name to render */
  as?: React.ElementType;
  /* defines the gap between grid items */
  gap?: keyof typeof gridStyles.gap;
  /* defines the number of columns in the grid */
  columns?: keyof typeof gridStyles.columns;
  /* defines the number of rows in the grid */
  rows?: keyof typeof gridStyles.rows;
  /* defines the alignment of grid items */
  align?: keyof typeof gridStyles.align;
  /* defines the justification of grid items */
  justify?: keyof typeof gridStyles.justify;
  /* defines the placement of grid items */
  placeContent?: keyof typeof gridStyles.placeContent;
  /* defines the placement of grid items */
  placeItems?: keyof typeof gridStyles.placeItems;
}

const Grid = React.forwardRef(
  (props: GridProps, forwardRef: React.Ref<HTMLElement>) => {
    const {
      as,
      gap = '4',
      rows,
      align,
      justify,
      columns,
      children,
      className,
      placeItems,
      placeContent,
      ...rest
    } = props;

    const Comp = as || 'div';

    return (
      <Comp
        ref={forwardRef}
        className={cn(
          'grid',
          gap && gridStyles.gap[gap],
          rows && gridStyles.rows[rows],
          align && gridStyles.align[align],
          columns && gridStyles.columns[columns],
          justify && gridStyles.justify[justify],
          placeContent && gridStyles.placeContent[placeContent],
          placeItems && gridStyles.placeItems[placeItems],
          className
        )}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

const GridComponents = Object.assign(Grid, {
  Col: GridCol,
});

GridComponents.displayName = 'Grid';

export { GridComponents as Grid };
