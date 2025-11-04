import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

const advancedRadio = tv({
  base: 'border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:text-muted-foreground peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed rounded-[var(--border-radius)]',
  variants: {
    size: {
      sm: 'px-2 py-1 min-h-[32px] min-w-[70px]',
      md: 'px-3.5 py-2 min-h-[40px] min-w-[90px]',
      lg: 'px-4 py-2 min-h-[48px] min-w-[120px]',
    },
    alignment: {
      left: '',
      center: 'text-center [&>*]:mx-auto',
    },
  },
  defaultVariants: {
    size: 'md',
    alignment: 'left',
  },
});

type AdvancedRadioVariant = VariantProps<typeof advancedRadio>;

export interface AdvancedRadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  children: React.ReactNode;
  size?: AdvancedRadioVariant['size'];
  alignment?: AdvancedRadioVariant['alignment'];
  inputClassName?: string;
  contentClassName?: string;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}

/**
 * A basic widget for getting the user input of radio with advanced design.
 * Here is the API documentation of the AdvancedRadio component.
 * And the rest of the props of AdvancedRadio are the same as the original html input field.
 * You can use props like `value`, `name`, `disabled` etc.
 */
export function AdvancedRadio({
  size = 'md',
  alignment = 'left',
  children,
  inputClassName,
  contentClassName,
  className,
  ref,
  ...props
}: AdvancedRadioProps) {
  return (
    <label
      className={cn(
        makeClassName(`advanced-radio-root`),
        'relative block',
        className
      )}
    >
      <input
        type="radio"
        ref={ref}
        className={cn(
          makeClassName(`advanced-radio-input`),
          'peer absolute -z-[1] opacity-0',
          inputClassName
        )}
        {...props}
      />
      <span
        className={advancedRadio({
          size,
          alignment,
          className: contentClassName,
        })}
      >
        {children}
      </span>
    </label>
  );
}
