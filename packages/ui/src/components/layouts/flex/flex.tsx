import React, { type ElementType } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const flex = tv({
  base: 'flex w-full',
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'col-reverse': 'flex-col-reverse',
    },
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      normal: 'justify-normal',
    },
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
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
  },
  defaultVariants: {
    direction: 'row',
    justify: 'start',
    align: 'start',
    gap: '4',
  },
});

export type FlexProps<T extends ElementType = 'div'> = VariantProps<typeof flex> & {
  /* defines the component tag name to render */
  as?: T;
  ref?: React.Ref<any>;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, 'as' | 'ref' | 'className'> & {
    className?: string;
  };

export function Flex<T extends ElementType = 'div'>({
  as,
  ref,
  children,
  direction = 'row',
  justify = 'start',
  align = 'start',
  gap = '4',
  className,
  ...rest
}: FlexProps<T>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      ref={ref}
      className={flex({
        direction,
        justify,
        align,
        gap,
        className,
      })}
      {...rest}
    >
      {children}
    </Component>
  );
}
