'use client';

import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { FieldErrorText } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { labelStyles } from '../../lib/label-size';

// Constants extracted outside component to prevent recreation
const DEFAULT_PLACEHOLDER = 'Drag & drop files here or click to browse';

const DefaultUploadIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

const FileIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const RemoveIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Separate component for image preview to manage object URL lifecycle
function UploadZoneImagePreview({
  file,
  className,
}: {
  file: File;
  className?: string;
}) {
  const [objectUrl, setObjectUrl] = useState<string>('');

  useEffect(() => {
    // Create URL only in effect to avoid double creation
    const url = URL.createObjectURL(file);
    setObjectUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  if (!objectUrl) return null;

  return <img src={objectUrl} alt={file.name} className={className} />;
}

const uploadZone = tv({
  slots: {
    root: 'flex flex-col',
    uploadZoneArea:
      'relative flex flex-col items-center justify-center border-2 border-dashed rounded-[var(--border-radius)] transition-all duration-200 cursor-pointer',
    input: 'absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10',
    content:
      'flex flex-col items-center justify-center text-center pointer-events-none relative z-0',
    icon: 'mb-2',
    text: 'text-sm',
    previewContainer: 'mt-4 space-y-2',
    previewGrid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
    previewItem:
      'relative group rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700',
    previewImage: 'w-full h-full object-cover',
    previewRemoveButton:
      'absolute top-2 right-2 bg-red text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-dark cursor-pointer',
  },
  variants: {
    variant: {
      outline: {
        uploadZoneArea:
          'bg-transparent border-border hover:border-primary hover:bg-muted/30 focus-visible:border-primary focus-visible:bg-muted/30 focus-visible:outline-none',
      },
      flat: {
        uploadZoneArea:
          'bg-muted/30 backdrop-blur border-border hover:border-primary hover:bg-muted/50 focus-visible:border-primary focus-visible:bg-muted/50 focus-visible:outline-none',
      },
    },
    size: {
      sm: {
        uploadZoneArea: 'p-6 min-h-[120px]',
        text: 'text-xs',
        icon: 'mb-1.5',
      },
      md: {
        uploadZoneArea: 'p-8 min-h-[160px]',
        text: 'text-sm',
        icon: 'mb-2',
      },
      lg: {
        uploadZoneArea: 'p-12 min-h-[200px]',
        text: 'text-base',
        icon: 'mb-3',
      },
    },
    isDragging: {
      true: {
        uploadZoneArea:
          'border-primary bg-primary/5 dark:bg-primary/10 scale-[1.02]',
      },
    },
    disabled: {
      true: {
        uploadZoneArea:
          '!bg-muted/70 backdrop-blur cursor-not-allowed !border-muted opacity-60',
        input: 'cursor-not-allowed',
      },
    },
    error: {
      true: {
        uploadZoneArea:
          '!border-red hover:!border-red focus-visible:!border-red focus-visible:outline-none',
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});

export interface UploadZoneProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'onChange' | 'value' | 'placeholder' | 'onDrop'
  > {
  variant?: VariantProps<typeof uploadZone>['variant'];
  size?: VariantProps<typeof uploadZone>['size'];
  disabled?: boolean;
  label?: React.ReactNode;
  labelWeight?: keyof typeof labelStyles.weight;
  helperText?: React.ReactNode;
  error?: string;
  labelClassName?: string;
  uploadZoneClassName?: string;
  contentClassName?: string;
  helperClassName?: string;
  errorClassName?: string;
  previewClassName?: string;
  className?: string;
  multiple?: boolean;
  accept?: string;
  placeholder?: React.ReactNode;
  icon?: React.ReactNode;
  value?: FileList | File[] | null;
  onChange?: (files: FileList | null) => void;
  onDrop?: (files: FileList) => void;
  ref?: React.Ref<HTMLInputElement>;
  // React Hook Form support
  name?: string;
}

export function UploadZone({
  className,
  variant = 'outline',
  size = 'md',
  disabled,
  label,
  labelWeight = 'medium',
  error,
  helperText,
  labelClassName,
  uploadZoneClassName,
  contentClassName,
  helperClassName,
  errorClassName,
  previewClassName,
  multiple,
  accept,
  placeholder,
  icon,
  value,
  onChange,
  onDrop,
  name,
  ref,
  ...inputProps
}: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);
  const [files, setFiles] = useState<File[]>([]);

  // Combine refs using useImperativeHandle
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

  // Sync with controlled value prop (for react-hook-form)
  useEffect(() => {
    if (value !== undefined) {
      if (value === null) {
        setFiles([]);
      } else if (value instanceof FileList) {
        setFiles(Array.from(value));
      } else if (Array.isArray(value)) {
        setFiles(value);
      }
    }
  }, [value]);

  const updateFiles = useCallback(
    (newFiles: FileList | File[]) => {
      const fileArray =
        newFiles instanceof FileList ? Array.from(newFiles) : newFiles;

      if (multiple) {
        setFiles((prev) => {
          const combined = [...prev, ...fileArray];
          // Create a new FileList from combined files
          const dataTransfer = new DataTransfer();
          combined.forEach((file) => dataTransfer.items.add(file));
          onChange?.(dataTransfer.files);
          return combined;
        });
      } else {
        setFiles(fileArray);
        const dataTransfer = new DataTransfer();
        fileArray.forEach((file) => dataTransfer.items.add(file));
        onChange?.(dataTransfer.files);
      }
    },
    [multiple, onChange]
  );

  const handleFileChange = useCallback(
    (newFiles: FileList | null) => {
      if (newFiles && newFiles.length > 0) {
        updateFiles(newFiles);
        onDrop?.(newFiles);
      }
    },
    [updateFiles, onDrop]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFileChange(e.target.files);
      }
      // Reset input value to allow selecting the same file again
      e.target.value = '';
    },
    [handleFileChange]
  );

  const handleRemoveFile = useCallback(
    (indexToRemove: number) => {
      setFiles((prev) => {
        const updated = prev.filter((_, index) => index !== indexToRemove);
        if (updated.length === 0) {
          onChange?.(null);
          return [];
        }
        const dataTransfer = new DataTransfer();
        updated.forEach((file) => dataTransfer.items.add(file));
        onChange?.(dataTransfer.files);
        return updated;
      });
    },
    [onChange]
  );

  const handleDragEnter = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (disabled) return;

      setDragCounter((prev) => prev + 1);

      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        setIsDragging(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (disabled) return;

      setDragCounter((prev) => {
        const newCounter = prev - 1;
        if (newCounter === 0) {
          setIsDragging(false);
        }
        return newCounter;
      });
    },
    [disabled]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  // Memoize accepted types for validation to avoid recalculation
  const acceptedTypes = useMemo(() => {
    if (!accept) return null;
    return accept.split(',').map((type) => type.trim());
  }, [accept]);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (disabled) return;

      setIsDragging(false);
      setDragCounter(0);

      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        // Validate accept types if provided (using memoized acceptedTypes)
        if (acceptedTypes && acceptedTypes.length > 0) {
          const validFiles = Array.from(files).filter((file) => {
            return acceptedTypes.some((type) => {
              if (type.startsWith('.')) {
                // Extension match
                return file.name.toLowerCase().endsWith(type.toLowerCase());
              }
              // MIME type match
              return file.type.match(type.replace('*', '.*'));
            });
          });

          if (validFiles.length === 0) {
            return;
          }

          // Create a new FileList-like object
          const dataTransfer = new DataTransfer();
          validFiles.forEach((file) => dataTransfer.items.add(file));
          const validFileList = dataTransfer.files;

          handleFileChange(validFileList);
          onDrop?.(validFileList);
        } else {
          handleFileChange(files);
          onDrop?.(files);
        }
      }
    },
    [disabled, acceptedTypes, handleFileChange, onDrop]
  );

  const {
    root,
    uploadZoneArea,
    input,
    content,
    icon: iconStyle,
    text,
    previewContainer,
    previewGrid,
    previewItem,
    previewImage,
    previewRemoveButton,
  } = uploadZone({
    variant,
    size,
    isDragging,
    disabled,
    error: Boolean(error),
  });

  return (
    <div className={cn(root(), className)}>
      {label ? (
        <span
          className={cn(
            'rizzui-upload-zone-label',
            'block',
            labelStyles.size[size],
            labelStyles.weight[labelWeight],
            disabled && 'text-muted-foreground',
            labelClassName
          )}
        >
          {label}
        </span>
      ) : null}

      <div
        className={uploadZoneArea({ className: uploadZoneClassName })}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={(e) => {
          // Prevent triggering if clicking on preview items or buttons
          const target = e.target as HTMLElement;
          if (
            disabled ||
            target.closest('.rizzui-upload-zone-preview-item') ||
            target.closest('button')
          ) {
            return;
          }
          // Input overlay handles click naturally via z-index layering
        }}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
      >
        <input
          ref={inputRef}
          type="file"
          name={name}
          className={input()}
          disabled={disabled}
          multiple={multiple}
          accept={accept}
          onChange={handleInputChange}
          aria-invalid={error ? 'true' : undefined}
          aria-required={inputProps.required}
          {...inputProps}
        />

        <div className={cn(content(), contentClassName)}>
          {icon !== null && (
            <div className={iconStyle()}>
              {icon || (
                <DefaultUploadIcon
                  className={cn(
                    'h-8 w-8 text-gray-400 dark:text-gray-500',
                    iconStyle()
                  )}
                />
              )}
            </div>
          )}
          <p
            className={cn(
              text(),
              'text-gray-600 dark:text-gray-400',
              isDragging && 'text-primary'
            )}
          >
            {placeholder || DEFAULT_PLACEHOLDER}
          </p>
        </div>
      </div>

      {!error && helperText ? (
        <FieldHelperText
          size={size}
          className={cn(
            'rizzui-upload-zone-helper-text',
            disabled && 'text-muted-foreground',
            helperClassName
          )}
        >
          {helperText}
        </FieldHelperText>
      ) : null}

      {/* File Preview */}
      {files.length > 0 && (
        <div className={cn(previewContainer(), previewClassName)}>
          <div className={previewGrid()}>
            {files.map((file, index) => {
              // Generate stable key using file reference and index for better React reconciliation
              const fileKey = `${file.name}-${file.size}-${file.lastModified}-${index}`;
              return (
                <div
                  key={fileKey}
                  className={cn(
                    previewItem(),
                    'rizzui-upload-zone-preview-item'
                  )}
                >
                  {file.type.startsWith('image/') ? (
                    <div className="aspect-square">
                      <UploadZoneImagePreview
                        file={file}
                        className={previewImage()}
                      />
                    </div>
                  ) : (
                    <div
                      title={file.name}
                      className="flex aspect-square items-center justify-center"
                    >
                      <div className="p-4 text-center">
                        <FileIcon className="mx-auto mb-2 h-12 w-12 text-gray-400" />
                      </div>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFile(index);
                    }}
                    className={previewRemoveButton()}
                    aria-label={`Remove ${file.name}`}
                  >
                    <RemoveIcon className="h-4 w-4" />
                  </button>
                  <div className="absolute right-0 bottom-0 left-0 truncate bg-black/70 px-2 py-1 text-xs text-white">
                    {file.name}
                  </div>
                  <div className="absolute top-2 left-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                    {(file.size / 1024).toFixed(1)} KB
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {error ? (
        <FieldErrorText
          size={size}
          error={error}
          className={cn('rizzui-upload-zone-error-text', errorClassName)}
        />
      ) : null}
    </div>
  );
}
