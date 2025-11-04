import {
  createContext,
  useContext,
  type ReactNode,
  type HTMLAttributes,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from 'react';

type RadioGroupContextType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked: (value: string) => boolean;
};

const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

export function useRadioGroup() {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error('useRadioGroup must be used within a RadioGroup component');
  }
  return context;
}

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  children: ReactNode;
}

export function RadioGroup({
  value,
  setValue,
  children,
  ...props
}: RadioGroupProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const isChecked = (radioValue: string) => value === radioValue;

  return (
    <RadioGroupContext.Provider
      value={{ value, onChange: handleChange, isChecked }}
    >
      <div {...props}>{children}</div>
    </RadioGroupContext.Provider>
  );
}
