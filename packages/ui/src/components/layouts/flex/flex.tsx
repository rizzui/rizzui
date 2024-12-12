import React from 'react';
import { cn } from 'src/lib/cn';

const flexStyles = {
  directions: {
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
};

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  /* defines the component tag name to render */
  as?: React.ElementType;
  /* defines the flex align items */
  align?: keyof typeof flexStyles.align;
  /* defines the flex justify content */
  justify?: keyof typeof flexStyles.justify;
  /* define the flex direction */
  direction?: keyof typeof flexStyles.directions;
  /* defines the gap between flex items */
  gap?: keyof typeof flexStyles.gap;
}

export const Flex = React.forwardRef(
  (props: FlexProps, ref: React.Ref<HTMLElement>) => {
    const {
      as,
      children,
      direction = 'row',
      justify = 'start',
      align = 'start',
      gap = '4',
      className,
      ...rest
    } = props;

    const Comp = as ?? 'div';

    return (
      <Comp
        ref={ref}
        className={cn(
          'flex w-full gap-4',
          flexStyles.directions[direction],
          flexStyles.justify[justify],
          flexStyles.align[align],
          flexStyles.gap[gap],
          className
        )}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

Flex.displayName = 'Flex';
