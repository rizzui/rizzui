import React, { useRef } from 'react';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { makeClassName } from '../../lib/make-class-name';

const containerClasses = {
  base: 'flex flex-row',
  center: 'justify-center align-center',
};

const pinCodeStyles = {
  base: 'block peer text-center bg-transparent mr-2 focus:placeholder:opacity-0 focus:outline-none transition duration-200',
  disabled:
    'disabled:bg-gray-50 disabled:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:border-muted',
  error:
    'border-red hover:enabled:!border-red focus:enabled:!border-red focus:!ring-red',
  size: {
    sm: 'px-1 py-1 text-sm h-8 w-8',
    md: 'px-2 py-2 text-sm h-10 w-10',
    lg: 'px-2 py-2 text-base h-12 w-12',
    xl: 'px-2.5 py-2.5 text-lg h-14 w-14',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  variant: {
    flat: 'focus:ring-[1.8px] border-0 placeholder:opacity-90 bg-muted/70 focus:ring-primary focus:enabled:bg-transparent',
    outline:
      'bg-transparent focus:ring-[0.8px] ring-[0.6px] ring-muted border border-muted placeholder:text-gray-500 hover:enabled:border-primary focus:enabled:border-primary focus:ring-primary',
  },
};

export interface PinCodeProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'value'
  > {
  /** Pass setState to get back the pin code value */
  setValue?: React.Dispatch<React.SetStateAction<string | number | undefined>>;
  /** This Pin Code component only support these two types */
  type?: 'text' | 'number';
  /** Mask and unmask to hide and show pin code */
  mask?: boolean;
  /** Set pin code length */
  length?: number;
  /** Make pin code horizontally center */
  center?: boolean;
  /** Set placeholder text */
  placeholder?: string;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof pinCodeStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof pinCodeStyles.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof pinCodeStyles.variant;
  /** Show error message using this prop */
  error?: string;
  /** Add custom classes for the input filed extra style */
  inputClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
}

/**
 * A basic widget for getting pin code. Here is the API documentation of the Pin Code component.
 * And the rest of the props of PinCode are the same as the original html input field.
 * You can use props like `disabled`, `placeholder`, `defaultValue` etc.
 */
export function PinCode({
  type = 'text',
  defaultValue,
  mask = false,
  length = 4,
  setValue,
  center = true,
  size = 'md',
  rounded = 'md',
  variant = 'outline',
  placeholder = '○',
  error,
  className,
  inputClassName,
  errorClassName,
  ...props
}: PinCodeProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  function addInputRefs(index: number) {
    return (ref: HTMLInputElement) => {
      if (ref) inputRefs.current[index] = ref;
    };
  }

  function setPinValue() {
    setValue && setValue(inputRefs.current.map((node) => node.value).join(''));
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const inputValues = event.target.value.split('');
    inputRefs.current[index].value = inputValues[inputValues.length - 1];
    if (index < length - 1) inputRefs.current[index + 1].focus();
    setPinValue();
  }

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    const currentValue = inputRefs.current[index].value;

    if (event.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    if (event.key === 'Backspace') {
      if (currentValue !== '') {
        inputRefs.current[index].value = '';
      } else {
        if (index === 0) return;
        inputRefs.current[index - 1].value = '';
        inputRefs.current[index - 1].focus();
      }
      setPinValue();
    }
  }

  function handlePaste(
    event: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) {
    const copiedValue = event.clipboardData.getData('text').split('');
    for (let i = 0; i < length - index; i += 1) {
      inputRefs.current[index + i].value = copiedValue[i] ?? '';
      if (index + i === length - 1) {
        inputRefs.current[index + i].focus();
      } else {
        inputRefs.current[index + i + 1].focus();
      }
    }
    event.preventDefault();
    setPinValue();
  }

  return (
    <div
      className={cn(makeClassName(`pin-code-root`), 'flex flex-col', className)}
    >
      <div
        className={cn(
          makeClassName(`pin-code-container`),
          containerClasses.base,
          center && containerClasses.center
        )}
      >
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={addInputRefs(index)}
            type={type}
            inputMode={type === 'text' ? type : 'numeric'}
            defaultValue={
              defaultValue ? defaultValue.toString().split('')[index] : ''
            }
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            placeholder={placeholder}
            onChange={(event) => handleChange(event, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onPaste={(event) => handlePaste(event, index)}
            className={cn(
              makeClassName(`pin-code-field`),
              pinCodeStyles.base,
              pinCodeStyles.disabled,
              pinCodeStyles.size[size],
              pinCodeStyles.rounded[rounded],
              pinCodeStyles.variant[variant],
              error && pinCodeStyles.error,
              mask &&
                '[-moz-text-security:circle] [-webkit-text-security:disc] [text-security:circle]',
              inputClassName
            )}
            {...props}
          />
        ))}
      </div>

      {error ? (
        <FieldError
          size={size}
          error={error}
          className={cn(
            makeClassName(`pin-code-error-text`),
            center && 'flex justify-center',
            errorClassName
          )}
        />
      ) : null}
    </div>
  );
}

PinCode.displayName = 'PinCode';
