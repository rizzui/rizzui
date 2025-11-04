import type { ElementType, Ref, ReactNode, ComponentPropsWithRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const gridCol = tv({
  variants: {
    colStart: {
      '1': 'col-start-1',
      '2': 'col-start-2',
      '3': 'col-start-3',
      '4': 'col-start-4',
      '5': 'col-start-5',
      '6': 'col-start-6',
      '7': 'col-start-7',
      '8': 'col-start-8',
      '9': 'col-start-9',
      '10': 'col-start-10',
      '11': 'col-start-11',
      '12': 'col-start-12',
      '13': 'col-start-13',
      auto: 'col-start-auto',
    },
    colEnd: {
      '1': 'col-end-1',
      '2': 'col-end-2',
      '3': 'col-end-3',
      '4': 'col-end-4',
      '5': 'col-end-5',
      '6': 'col-end-6',
      '7': 'col-end-7',
      '8': 'col-end-8',
      '9': 'col-end-9',
      '10': 'col-end-10',
      '11': 'col-end-11',
      '12': 'col-end-12',
      '13': 'col-end-13',
      auto: 'col-end-auto',
    },
    colSpan: {
      auto: 'col-auto',
      '1': 'col-span-1',
      '2': 'col-span-2',
      '3': 'col-span-3',
      '4': 'col-span-4',
      '5': 'col-span-5',
      '6': 'col-span-6',
      '7': 'col-span-7',
      '8': 'col-span-8',
      '9': 'col-span-9',
      '10': 'col-span-10',
      '11': 'col-span-11',
      '12': 'col-span-12',
      full: 'col-span-full',
    },
    rowSpan: {
      auto: 'row-auto',
      '1': 'row-span-1',
      '2': 'row-span-2',
      '3': 'row-span-3',
      '4': 'row-span-4',
      '5': 'row-span-5',
      '6': 'row-span-6',
      '7': 'row-span-7',
      '8': 'row-span-8',
      '9': 'row-span-9',
      '10': 'row-span-10',
      '11': 'row-span-11',
      '12': 'row-span-12',
      full: 'row-span-full',
    },
    rowStart: {
      '1': 'row-start-1',
      '2': 'row-start-2',
      '3': 'row-start-3',
      '4': 'row-start-4',
      '5': 'row-start-5',
      '6': 'row-start-6',
      '7': 'row-start-7',
      '8': 'row-start-8',
      '9': 'row-start-9',
      '10': 'row-start-10',
      '11': 'row-start-11',
      '12': 'row-start-12',
      '13': 'row-start-13',
      auto: 'row-start-auto',
    },
    rowEnd: {
      '1': 'row-end-1',
      '2': 'row-end-2',
      '3': 'row-end-3',
      '4': 'row-end-4',
      '5': 'row-end-5',
      '6': 'row-end-6',
      '7': 'row-end-7',
      '8': 'row-end-8',
      '9': 'row-end-9',
      '10': 'row-end-10',
      '11': 'row-end-11',
      '12': 'row-end-12',
      '13': 'row-end-13',
      auto: 'row-end-auto',
    },
    order: {
      '1': 'order-1',
      '2': 'order-2',
      '3': 'order-3',
      '4': 'order-4',
      '5': 'order-5',
      '6': 'order-6',
      '7': 'order-7',
      '8': 'order-8',
      '9': 'order-9',
      '10': 'order-10',
      '11': 'order-11',
      '12': 'order-12',
      first: 'order-first',
      last: 'order-last',
      none: 'order-none',
    },
    placeSelf: {
      auto: 'place-self-auto',
      start: 'place-self-start',
      end: 'place-self-end',
      center: 'place-self-center',
      stretch: 'place-self-stretch',
    },
  },
});

export type GridColumnProps<T extends ElementType = 'div'> = {
  /* defines the component tag name to render */
  as?: T;
  ref?: Ref<any>;
  /* defines the gap between grid items */
  colStart?: VariantProps<typeof gridCol>['colStart'];
  /* defines the number of columns in the grid */
  colEnd?: VariantProps<typeof gridCol>['colEnd'];
  /* defines the size of columns */
  colSpan?: VariantProps<typeof gridCol>['colSpan'];
  /* defines the order of the column */
  order?: VariantProps<typeof gridCol>['order'];
  /* defines the size of rows */
  rowSpan?: VariantProps<typeof gridCol>['rowSpan'];
  /* defines the start of rows */
  rowStart?: VariantProps<typeof gridCol>['rowStart'];
  /* defines the end of rows */
  rowEnd?: VariantProps<typeof gridCol>['rowEnd'];
  /* defines the alignment of the column */
  placeSelf?: VariantProps<typeof gridCol>['placeSelf'];
  children?: ReactNode;
  className?: string;
} & Omit<
  ComponentPropsWithRef<T>,
  | 'as'
  | 'ref'
  | 'className'
  | 'colStart'
  | 'colEnd'
  | 'colSpan'
  | 'order'
  | 'rowSpan'
  | 'rowStart'
  | 'rowEnd'
  | 'placeSelf'
>;

export function GridCol<T extends ElementType = 'div'>({
  as,
  ref,
  order,
  rowEnd,
  colEnd,
  rowSpan,
  colSpan,
  colStart,
  rowStart,
  children,
  className,
  placeSelf,
  ...rest
}: GridColumnProps<T>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      ref={ref}
      className={gridCol({
        colEnd,
        colSpan,
        colStart,
        placeSelf,
        rowStart,
        rowSpan,
        rowEnd,
        order,
        className,
      })}
      {...rest}
    >
      {children}
    </Component>
  );
}
