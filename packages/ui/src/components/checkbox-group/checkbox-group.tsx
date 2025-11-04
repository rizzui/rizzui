import React, { useCallback } from 'react';

export interface CheckboxGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  values: string[];
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
  children: React.ReactNode;
}

export function CheckboxGroup({
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

  const childrenWithProps = React.Children.toArray(children).map((child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    
    return React.cloneElement(child as React.ReactElement<any>, {
      onChange: handleChange,
      checked: values.includes((child as any).props.value),
    });
  });

  return <div {...props}>{childrenWithProps}</div>;
}
