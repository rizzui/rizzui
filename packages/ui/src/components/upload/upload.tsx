'use client';

import React, { forwardRef } from 'react';
import { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';

import { cn } from '../../lib/cn';
import { UploadIcon } from '../../icons/upload';

const inputClasses = {
  base: 'p-16 relative border rounded-xl border-dashed cursor-pointer duration-75 ease-in-out focus:ring',
  flex: 'flex flex-col items-center gap-4',
  disabled:
    '!text-gray-400 !bg-gray-100 !border-gray-200 hover:border-gray-200',
  darkTextColor: {
    DEFAULT: 'text-gray-1000',
    primary: 'text-primary-dark',
    secondary: 'text-secondary-dark',
    danger: 'text-red-dark',
    info: 'text-blue-dark',
    success: 'text-green-dark',
    warning: 'text-orange-dark',
  },
  lightTextColor: {
    DEFAULT: 'text-gray-300',
    primary: 'text-primary-light',
    secondary: 'text-secondary-light',
    danger: 'text-red-light',
    info: 'text-blue-light',
    success: 'text-green-light',
    warning: 'text-orange-light',
  },
  variant: {
    active: {
      base: 'border bg-gray-0',
      color: {
        DEFAULT:
          'border-gray-900 text-gray-600 focus:border-gray-1000 focus:ring-gray-900/20',
        primary: 'border-primary text-primary focus:ring-primary/30',
        secondary: 'border-secondary text-secondary focus:ring-secondary/30',
        danger: 'border-red text-red focus:ring-red/30',
        info: 'border-blue text-blue focus:ring-blue/30',
        success: 'border-green text-green focus:ring-green/30',
        warning: 'border-orange text-orange focus:ring-orange/30',
      },
    },
    flat: {
      base: 'border-0',
      color: {
        DEFAULT:
          'bg-gray-100/70 hover:bg-gray-200/50 text-gray-600 focus:border-gray-1000 focus:ring-gray-900/20',
        primary:
          'bg-primary-lighter/70 hover:bg-primary-lighter/90 text-primary focus:ring-primary/30',
        secondary:
          'bg-secondary-lighter/70 hover:bg-secondary-lighter/90 text-secondary focus:ring-secondary/30',
        danger:
          'bg-red-lighter/70 hover:bg-red-lighter/90 text-red focus:ring-red/30',
        info: 'bg-blue-lighter/70 hover:bg-blue-lighter/90 text-blue focus:ring-blue/30',
        success:
          'bg-green-lighter/70 hover:bg-green-lighter/90 text-green focus:ring-green/30',
        warning:
          'bg-orange-lighter/80 hover:bg-orange-lighter/90 text-orange focus:ring-orange/30',
      },
    },
    outline: {
      base: 'bg-transparent border-gray-300 text-gray-600',
      color: {
        DEFAULT:
          'hover:border-gray-1000 focus:border-gray-1000 focus:ring-gray-900/20',
        primary: 'hover:border-primary focus:ring-primary/30',
        secondary: 'hover:border-secondary focus:ring-secondary/30',
        danger: 'hover:border-red focus:ring-red/30',
        info: 'hover:border-blue focus:ring-blue/30',
        success: 'hover:border-green focus:ring-green/30',
        warning: 'hover:border-orange focus:ring-orange/30',
      },
    },
  },
};

const acceptedFileType = {
  img: 'image/*',
  pdf: 'application/pdf',
  imgAndPdf: 'image/*,application/pdf',
};

export interface UploadProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'accept' | 'children'
  > {
  /** Specify type of the files */
  accept: 'img' | 'pdf' | 'imgAndPdf';
  /** Pass multiple files */
  multiple?: boolean;
  /** Wheter disable upload */
  disabled?: boolean;
  /** Pass children to customize file item style */
  children?: React.ReactNode;
  /** Pass field label */
  label?: React.ReactNode;
  /** The variants of the component are: */
  variant?: keyof typeof inputClasses.variant;
  /** Change color */
  color?: keyof typeof inputClasses.variant.flat.color;
  /** Set your custom text to show in upload field */
  placeholderText?: React.ReactNode;
  /** To pass getRootProps of react-dropzone */
  dropzoneRootProps?: DropzoneRootProps;
  /** To pass getInputProps of react-dropzone */
  dropzoneInputProps?: DropzoneInputProps;
  /** Pass className to style the container */
  className?: string;
  /** Pass iconClassName to style the upload icon */
  iconClassName?: string;
  /** Pass label className to style label */
  labelClassName?: string;
}

/** Upload component allows user to upload files either from file expolorer or by dragging and dropping.
 * Here is the API documentation of Upload component. Rest of the props are same as html input field.
 * You can use props like `disabled`, `multiple`, `capture` etc.
 */

const Upload = forwardRef<HTMLInputElement, UploadProps>(
  (
    {
      accept,
      children,
      label,
      color = 'DEFAULT',
      variant = 'outline',
      dropzoneRootProps,
      dropzoneInputProps,
      placeholderText,
      className,
      iconClassName,
      labelClassName,
      ...props
    },
    ref
  ) => (
    <div>
      {label && (
        <label>
          <button
            type="button"
            onClick={() =>
              (ref as React.RefObject<HTMLInputElement>)?.current?.click()
            }
            className={cn('mb-2 block text-base', labelClassName)}
          >
            {label}
          </button>
        </label>
      )}
      <div
        className={cn(
          inputClasses.base,
          inputClasses.flex,
          inputClasses.variant[variant].base,
          inputClasses.variant[variant].color[color],
          props.disabled && inputClasses.disabled,
          className
        )}
        {...dropzoneRootProps}
      >
        <input
          ref={ref}
          title=""
          type="file"
          accept={acceptedFileType[accept]}
          className="absolute top-0 h-full w-full opacity-0 disabled:cursor-not-allowed"
          {...props}
          {...dropzoneInputProps}
        />
        <UploadIcon
          className={cn(
            variant !== 'outline' && !props.disabled
              ? inputClasses.lightTextColor[color]
              : 'text-gray-300',
            iconClassName
          )}
        />
        {placeholderText || (
          <p className="text-center">
            <span
              className={cn(
                'font-medium underline',
                variant !== 'outline' && inputClasses.darkTextColor[color],
                props.disabled && '!text-gray-400'
              )}
            >
              Click to upload
            </span>{' '}
            or drag and drop
          </p>
        )}
      </div>
      {children}
    </div>
  )
);

Upload.displayName = 'Upload';
export default Upload;
