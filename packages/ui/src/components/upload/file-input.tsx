'use client';

import React, { useRef, useState } from 'react';

import { cn } from '../../lib/cn';
import Button, { ButtonProps } from '../button';
import Input, { InputProps } from '../input';

const labelClasses = {
  size: {
    sm: 'text-xs mb-1',
    DEFAULT: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
    xl: 'text-base mb-2',
  },
};

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The variants of the component are: */
  variant?: 'active' | 'flat' | 'outline';
  /** Change color */
  color?: InputProps['color'];
  /** The rounded variants are: */
  rounded?: InputProps['rounded'];
  /** Size of the component */
  size?: keyof typeof labelClasses.size;
  /** Set input placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Choose multiple files */
  multiple?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Add clearable options */
  clearable?: boolean;
  /** Pass input props */
  inputProps?: Omit<
    InputProps,
    | 'label'
    | 'labelClassName'
    | 'type'
    | 'disabled'
    | 'placeholder'
    | 'variant'
    | 'size'
    | 'rounded'
    | 'color'
    | 'clearable'
    | 'onClear'
  >;
  /** Pass button props */
  buttonProps?: Omit<ButtonProps, 'size' | 'rounded' | 'color' | 'disabled'>;
  /** Pass classname to style input container */
  className?: string;
  /** Pass label classname to sytle label */
  labelClassName?: string;
}

/** FileInput component allows user to choose single or multiple files from the file explorer to upload them.
 * Here is the API documentation of FileInput component. Rest of the props are same as html input field.
 * You can use props like `accept`, `multiple`, `capture` etc.
 */

const FileInput = ({
  label,
  size = 'DEFAULT',
  rounded = 'DEFAULT',
  variant = 'outline',
  color = 'DEFAULT',
  placeholder = 'No file choosen',
  disabled = false,
  clearable = false,
  inputProps,
  buttonProps,
  className,
  labelClassName,
  ...props
}: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<string[]>([]);

  const handleButtonClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = (event.target as HTMLInputElement).files;
    const newFiles = Object.entries(uploadedFiles as object).map(
      (file) => file[1].name
    );
    setFiles(newFiles);
  };

  const handleClearClick = () => {
    setFiles([]);
    (inputRef.current as HTMLInputElement).value = '';
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label>
          <button
            type="button"
            onClick={handleButtonClick}
            className={cn(labelClasses.size[size], labelClassName)}
          >
            {label}
          </button>
        </label>
      )}
      <div className="flex w-full gap-3">
        <span className={cn('relative flex-1', className)}>
          <Input
            readOnly
            value={files.join()}
            variant={variant}
            color={color}
            size={size}
            rounded={rounded}
            placeholder={placeholder}
            disabled={disabled}
            onClear={handleClearClick}
            clearable={clearable}
            {...inputProps}
          />
          <input
            ref={inputRef}
            type="file"
            disabled={disabled}
            className="absolute top-0 w-full opacity-0"
            onChange={handleFileChange}
            {...props}
          />
        </span>
        <Button
          onClick={handleButtonClick}
          variant="solid"
          color={color}
          size={size}
          rounded={rounded}
          disabled={disabled}
          {...buttonProps}
        >
          Choose File
        </Button>
      </div>
    </div>
  );
};

FileInput.displayName = 'FileInput';
export default FileInput;
