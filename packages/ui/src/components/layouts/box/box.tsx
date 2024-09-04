import React from 'react';
import { cn } from 'src/lib/cn';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /* defines the component tag name to render */
  as?: React.ElementType;
}

export const Box = React.forwardRef(
  (props: BoxProps, ref: React.Ref<HTMLElement>) => {
    const { as, children, className, ...rest } = props;

    const Comp = as || 'div';

    return (
      <Comp ref={ref} className={cn('block', className)} {...rest}>
        {children}
      </Comp>
    );
  }
);

Box.displayName = 'Box';
