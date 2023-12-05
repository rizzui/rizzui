import React, { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { roundedStyles } from '../../lib/rounded';

const advancedRadioStyles = {
  base: 'border border-muted hover:border-primary ring-[0.6px] ring-muted cursor-pointer transition duration-200 ease-in-out',
  active:
    'peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px]',
  disabled:
    'peer-disabled:bg-muted/70 peer-disabled:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed',
  alignment: {
    left: '',
    center: 'text-center [&>*]:mx-auto',
  },
  size: {
    sm: 'px-2 py-1 min-h-[32px] min-w-[70px]',
    md: 'px-3.5 py-2 min-h-[40px] min-w-[90px]',
    lg: 'px-4 py-2 min-h-[48px] min-w-[120px]',
    xl: 'px-5 py-2.5 min-h-[56px] min-w-[150px]',
  },
  rounded: roundedStyles,
};

export interface AdvancedRadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Pass content as children */
  children: React.ReactNode;
  /** The size of the component. `"sm"` is equivalent to the dense styling. */
  size?: keyof typeof advancedRadioStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof advancedRadioStyles.rounded;
  /** The rounded variants are: */
  alignment?: keyof typeof advancedRadioStyles.alignment;
  /** Add inputClassName to style the input */
  inputClassName?: string;
  /** Add contentClassName to style the input */
  contentClassName?: string;
  /** Add className to style the container */
  className?: string;
}

/**
 * A basic widget for getting the user input of radio with advanced design.
 * Here is the API documentation of the AdvancedRadio component.
 * And the rest of the props of AdvancedRadio are the same as the original html input field.
 * You can use props like `value`, `name`, `disabled` etc.
 */
export const AdvancedRadio = forwardRef<HTMLInputElement, AdvancedRadioProps>(
  (
    {
      rounded = 'md',
      size = 'md',
      alignment = 'left',
      children,
      inputClassName,
      contentClassName,
      className,
      ...props
    },
    ref
  ) => (
    <label
      className={cn(
        makeClassName(`advanced-checkbox-root`),
        'relative block',
        className
      )}
    >
      <input
        type="radio"
        ref={ref}
        className={cn('peer absolute -z-[1] opacity-0', inputClassName)}
        {...props}
      />
      <span
        className={cn(
          'block',
          makeClassName(`advanced-checkbox`),
          advancedRadioStyles.base,
          advancedRadioStyles.active,
          advancedRadioStyles.disabled,
          advancedRadioStyles.size[size],
          advancedRadioStyles.rounded[rounded],
          advancedRadioStyles.alignment[alignment],
          contentClassName
        )}
      >
        {children}
      </span>
    </label>
  )
);

AdvancedRadio.displayName = 'AdvancedRadio';
