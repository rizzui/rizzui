import {
  createContext,
  useContext,
  type ReactNode,
  type HTMLAttributes,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from 'react';

type CheckboxGroupContextType = {
  values: string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked: (value: string) => boolean;
};

const CheckboxGroupContext = createContext<CheckboxGroupContextType | null>(
  null
);

export function useCheckboxGroup() {
  const context = useContext(CheckboxGroupContext);
  if (!context) {
    throw new Error(
      'useCheckboxGroup must be used within a CheckboxGroup component'
    );
  }
  return context;
}

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  values: string[];
  setValues: Dispatch<SetStateAction<string[]>>;
  children: ReactNode;
}

export function CheckboxGroup({
  values,
  setValues,
  children,
  ...props
}: CheckboxGroupProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValues = values.includes(value)
      ? values.filter((v) => v !== value)
      : [...values, value];
    setValues(newValues);
  };

  const isChecked = (value: string) => values.includes(value);

  return (
    <CheckboxGroupContext.Provider
      value={{ values, onChange: handleChange, isChecked }}
    >
      <div {...props}>{children}</div>
    </CheckboxGroupContext.Provider>
  );
}
