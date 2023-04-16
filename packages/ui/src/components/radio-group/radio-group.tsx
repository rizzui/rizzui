'use client';

import React, { useCallback } from 'react';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Selected value */
  value: string;
  /** Pass function to select value */
  setValue: React.Dispatch<React.SetStateAction<string>>;
  /** Radio buttons as children */
  children: React.ReactNode;
}

interface RadioChildrenProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  checked: boolean;
  value: string;
  children?: React.ReactNode;
}

/** RadioGroup is a wrapper component for multiple radio buttons which allows
 * user to select any radio button easily either from a form or from a filter.
 * Here is the API documentation for RadioGroup component.
 */

export default function RadioGroup({
  value,
  setValue,
  children,
  ...props
}: RadioGroupProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [value, setValue]
  );

  return (
    <div {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<RadioChildrenProps>(child)) {
          return child;
        }
        return React.cloneElement(child, {
          onChange: handleChange,
          checked: value === child.props.value,
        });
      })}
    </div>
  );
}

RadioGroup.displayName = 'RadioGroup';
