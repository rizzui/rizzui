import React, { useRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { makeClassName } from '../../lib/make-class-name';

const pinCodeContainer = tv({
  base: 'flex flex-row',
  variants: {
    center: {
      true: 'justify-center align-center',
      false: '',
    },
  },
  defaultVariants: {
    center: false,
  },
});

const pinCode = tv({
  base: 'block peer text-center bg-transparent mr-2 focus:placeholder:opacity-0 focus:outline-none transition duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]',
  variants: {
    variant: {
      flat: 'focus:ring-[1.8px] border-0 placeholder:opacity-90 bg-muted/70 backdrop-blur focus:ring-primary focus:enabled:bg-transparent',
      outline:
        'bg-transparent focus:ring-[0.8px] ring-border border-border placeholder:text-gray-500 hover:enabled:border-primary focus:enabled:border-primary focus:ring-primary',
    },
    size: {
      sm: 'px-1 py-1 text-sm h-8 w-8',
      md: 'px-2 py-2 text-sm h-10 w-10',
      lg: 'px-2 py-2 text-base h-12 w-12',
    },
    disabled: {
      true: 'disabled:bg-muted/70 disabled:backdrop-blur disabled:placeholder:text-muted-foreground disabled:text-muted-foreground disabled:cursor-not-allowed disabled:border-muted',
    },
    error: {
      true: 'border-red hover:enabled:!border-red focus:enabled:!border-red !ring-red',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});

type PinCodeVariant = VariantProps<typeof pinCode>;

export interface PinCodeProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'value'
  > {
  setValue?: React.Dispatch<React.SetStateAction<string | number | undefined>>;
  type?: 'text' | 'number';
  mask?: boolean;
  length?: number;
  center?: boolean;
  placeholder?: string;
  size?: PinCodeVariant['size'];
  variant?: PinCodeVariant['variant'];
  error?: string;
  inputClassName?: string;
  errorClassName?: string;
}

export function PinCode({
  type = 'text',
  defaultValue,
  mask = false,
  length = 4,
  setValue,
  center = true,
  size = 'md',
  variant = 'outline',
  placeholder = '○',
  error,
  className,
  inputClassName,
  errorClassName,
  disabled,
  onChange,
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
      <div className={pinCodeContainer({ center })}>
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
            className={pinCode({
              variant,
              size,
              disabled: disabled,
              error: !!error,
              className: cn(
                mask &&
                  '[-moz-text-security:circle] [-webkit-text-security:disc] [text-security:circle]',
                inputClassName
              ),
            })}
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
