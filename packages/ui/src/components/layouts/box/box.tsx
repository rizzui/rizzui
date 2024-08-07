import React from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /* defines the component tag name to render */
  as?: React.ElementType;
}

export const Box = React.forwardRef(
  (props: BoxProps, ref: React.Ref<HTMLElement>) => {
    const { as, children, className, ...rest } = props;

    const Comp = as || 'div';

    return (
      <Comp ref={ref} className={className} {...rest}>
        {children}
      </Comp>
    );
  }
);

Box.displayName = 'Box';
