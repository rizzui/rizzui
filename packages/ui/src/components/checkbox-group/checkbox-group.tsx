'use client';

import React, { useCallback } from 'react';

export interface CheckboxGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Selected value */
  values: string[];
  /** Pass function to select value */
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
  /** Radio buttons as children */
  children: React.ReactNode;
}

interface CheckboxChildrenProps {
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  checked: boolean;
  value: string;
  children?: React.ReactNode;
}

/** CheckboxGroup is a wrapper component for a set of checkbox which allows
 * user to select multiple checkbox values easily either from a form or from a filter.
 * Here is the API documentation for CheckboxGroup component.
 */

export default function CheckboxGroup({
  values,
  setValues,
  children,
  ...props
}: CheckboxGroupProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const newValues = values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value];
      setValues(newValues);
    },
    [values, setValues]
  );

  return (
    <div {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<CheckboxChildrenProps>(child)) {
          return child;
        }
        return React.cloneElement(child, {
          onChange: handleChange,
          checked: values.includes(child.props.value),
        });
      })}
    </div>
  );
}

CheckboxGroup.displayName = 'CheckboxGroup';
