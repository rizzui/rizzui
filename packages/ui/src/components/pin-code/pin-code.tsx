import React, { useRef } from 'react';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { makeClassName } from '../../lib/make-class-name';

const containerClasses = {
  base: 'flex flex-row',
  center: 'justify-center align-center',
};

const inputClasses = {
  base: 'block peer text-center bg-transparent mr-2 focus:placeholder:opacity-0 focus:outline-none transition duration-200 disabled:bg-gray-50 disabled:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200',
  error:
    'border-red hover:enabled:!border-red focus:enabled:!border-red focus:!ring-red',
  size: {
    sm: 'px-1 py-1 text-sm h-8 w-8',
    DEFAULT: 'px-2 py-2 text-sm h-10 w-10',
    lg: 'px-2 py-2 text-base h-12 w-12',
    xl: 'px-2.5 py-2.5 text-lg h-14 w-14',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  variant: {
    active: {
      base: 'border focus:ring-[0.6px] bg-gray-50 placeholder:opacity-80',
      color: {
        DEFAULT:
          'border-gray-900 not-read-only:focus:enabled:border-gray-950 focus:ring-gray-950 text-gray-950',
        primary:
          'border-primary not-read-only:focus:enabled:border-primary focus:ring-primary text-primary-dark',
        secondary:
          'border-secondary not-read-only:focus:enabled:border-secondary focus:ring-secondary text-secondary-dark',
        danger:
          'border-red not-read-only:focus:enabled:border-red focus:ring-red text-red-dark',
        info: 'border-blue not-read-only:focus:enabled:border-blue focus:ring-blue text-info-dark',
        success:
          'border-green not-read-only:focus:enabled:border-green focus:ring-green text-green-dark',
        warning:
          'border-orange not-read-only:focus:enabled:border-orange-dark focus:ring-orange-dark text-orange-dark',
      },
    },
    flat: {
      base: 'border focus:ring-2 border-0 placeholder:opacity-90',
      color: {
        DEFAULT:
          'bg-gray-200/70 not-read-only:hover:enabled:bg-gray-200/90 focus:ring-gray-900/30 text-gray-950 placeholder:text-gray-600',
        primary:
          'bg-primary-lighter/70 not-read-only:hover:enabled:bg-primary-lighter/90 focus:ring-primary/30 text-primary-dark',
        secondary:
          'bg-secondary-lighter/70 not-read-only:hover:enabled:bg-secondary-lighter/90 focus:ring-secondary/30 text-secondary-dark',
        danger:
          'bg-red-lighter/70 not-read-only:hover:enabled:bg-red-lighter/90 focus:ring-red/30 text-red-dark',
        info: 'bg-blue-lighter/70 not-read-only:hover:enabled:bg-blue-lighter/90 focus:ring-blue/30 text-blue-dark',
        success:
          'bg-green-lighter/70 not-read-only:hover:enabled:bg-green-lighter/90 focus:ring-green/30 text-green-dark',
        warning:
          'bg-orange-lighter/90 not-read-only:hover:enabled:bg-orange-lighter focus:ring-orange/30 text-orange-dark',
      },
    },
    outline: {
      base: 'bg-transparent focus:ring-[0.6px] border border-gray-300 placeholder:text-gray-500',
      color: {
        DEFAULT:
          'not-read-only:hover:enabled:border-gray-950 not-read-only:focus:enabled:border-gray-950 focus:ring-gray-950',
        primary:
          'not-read-only:hover:enabled:border-primary not-read-only:focus:enabled:border-primary focus:ring-primary',
        secondary:
          'not-read-only:hover:enabled:border-secondary not-read-only:focus:enabled:border-secondary focus:ring-secondary',
        danger:
          'not-read-only:hover:enabled:border-red not-read-only:focus:enabled:border-red focus:ring-red',
        info: 'not-read-only:hover:enabled:border-blue not-read-only:focus:enabled:border-blue focus:ring-blue',
        success:
          'not-read-only:hover:enabled:border-green not-read-only:focus:enabled:border-green focus:ring-green',
        warning:
          'not-read-only:hover:enabled:border-orange not-read-only:focus:enabled:border-orange focus:ring-orange',
      },
    },
  },
};

export interface PinCodeProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'value'
  > {
  /** Pass setState to get back the pin code value */
  setValue: React.Dispatch<React.SetStateAction<string | number | undefined>>;
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
  size?: keyof typeof inputClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof inputClasses.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof inputClasses.variant;
  /** Change input color */
  color?: keyof (typeof inputClasses.variant)['active']['color'];
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
  size = 'DEFAULT',
  rounded = 'DEFAULT',
  variant = 'outline',
  color = 'DEFAULT',
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
    setValue(inputRefs.current.map((node) => node.value).join(''));
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
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
    index: number,
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
    <div className={cn(makeClassName(`pin-code-root`), 'flex flex-col')}>
      <div
        className={cn(
          makeClassName(`pin-code-container`),
          containerClasses.base,
          center && containerClasses.center,
          className,
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
              inputClasses.base,
              inputClasses.size[size],
              inputClasses.rounded[rounded],
              inputClasses.variant[variant].base,
              inputClasses.variant[variant].color[color],
              error && inputClasses.error,
              mask &&
                '[-webkit-text-security:disc] [-moz-text-security:circle] [text-security:circle]',
              inputClassName,
            )}
            {...props}
          />
        ))}
      </div>

      {error && (
        <FieldError
          size={size}
          error={error}
          className={cn(
            makeClassName(`pin-code-error-text`),
            center && 'flex justify-center',
            errorClassName,
          )}
        />
      )}
    </div>
  );
}

PinCode.displayName = 'PinCode';
