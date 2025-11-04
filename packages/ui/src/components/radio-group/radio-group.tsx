import React, { useCallback } from 'react';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

export function RadioGroup({
  value,
  setValue,
  children,
  ...props
}: RadioGroupProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [setValue]
  );

  const childrenWithProps = React.Children.toArray(children).map((child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    
    return React.cloneElement(child as React.ReactElement<any>, {
      onChange: handleChange,
      checked: value === (child as any).props.value,
    });
  });

  return <div {...props}>{childrenWithProps}</div>;
}
