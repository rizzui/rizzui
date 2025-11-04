import type { ElementType, Ref, ReactNode, ComponentPropsWithRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { GridCol } from './grid-col';

const gridVariants = tv({
  base: 'grid',
  variants: {
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
  },
  defaultVariants: {
    gap: '4',
  },
});

type ColumnsType = VariantProps<typeof gridVariants>['columns'];

export type GridProps<T extends ElementType = 'div'> = {
  /* defines the component tag name to render */
  as?: T;
  ref?: Ref<any>;
  children?: ReactNode;
  gap?: VariantProps<typeof gridVariants>['gap'];
  rows?: VariantProps<typeof gridVariants>['rows'];
  align?: VariantProps<typeof gridVariants>['align'];
  justify?: VariantProps<typeof gridVariants>['justify'];
  columns?: ColumnsType;
  /* responsive columns */
  cols?: ColumnsType;
  colsSm?: ColumnsType;
  colsMd?: ColumnsType;
  colsLg?: ColumnsType;
  colsXl?: ColumnsType;
  cols2xl?: ColumnsType;
  placeItems?: VariantProps<typeof gridVariants>['placeItems'];
  placeContent?: VariantProps<typeof gridVariants>['placeContent'];
  className?: string;
} & Omit<
  ComponentPropsWithRef<T>,
  | 'as'
  | 'ref'
  | 'className'
  | 'gap'
  | 'rows'
  | 'align'
  | 'justify'
  | 'columns'
  | 'cols'
  | 'colsSm'
  | 'colsMd'
  | 'colsLg'
  | 'colsXl'
  | 'cols2xl'
  | 'placeItems'
  | 'placeContent'
>;

function GridBase<T extends ElementType = 'div'>({
  as,
  ref,
  gap = '4',
  rows,
  align,
  justify,
  columns,
  cols,
  colsSm,
  colsMd,
  colsLg,
  colsXl,
  cols2xl,
  children,
  className,
  placeItems,
  placeContent,
  ...rest
}: GridProps<T>) {
  const Component = (as || 'div') as ElementType;

  // Build responsive column classes
  const responsiveColsClasses = [
    cols && `grid-cols-${cols}`,
    colsSm && `sm:grid-cols-${colsSm}`,
    colsMd && `md:grid-cols-${colsMd}`,
    colsLg && `lg:grid-cols-${colsLg}`,
    colsXl && `xl:grid-cols-${colsXl}`,
    cols2xl && `2xl:grid-cols-${cols2xl}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      ref={ref}
      className={gridVariants({
        gap,
        rows,
        align,
        columns,
        justify,
        placeContent,
        placeItems,
        className: [responsiveColsClasses, className].filter(Boolean).join(' '),
      })}
      {...rest}
    >
      {children}
    </Component>
  );
}

export const Grid = Object.assign(GridBase, {
  Col: GridCol,
});
