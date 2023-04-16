'use client';

import React, { forwardRef } from 'react';
import cn from '../../lib/cn';

export interface AdvancedRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Add className to style the container */
  className?: string;
  /** Add inputClassName to style the input */
  inputClassName?: string;
  /** Pass content as children */
  children: React.ReactNode;
}

/**
 * A basic widget for getting the user input of radio with advanced design.
 * Here is the API documentation of the AdvancedRadio component.
 * And the rest of the props of AdvancedRadio are the same as the original html input field.
 * You can use props like `value`, `name`, `disabled` etc.
 */

const AdvancedRadio = forwardRef<HTMLInputElement, AdvancedRadioProps>(
  ({ children, className, inputClassName, ...props }, ref) => (
    <label>
      <input
        type="radio"
        ref={ref}
        className={cn('peer hidden', inputClassName)}
        {...props}
      />
      <span className={cn('block', className)}>{children}</span>
    </label>
  )
);

AdvancedRadio.displayName = 'AdvancedRadio';
export default AdvancedRadio;
