import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const fieldClearButton = tv({
  base: 'rizzui-input-clear-btn input-clear-btn inline-flex shrink-0 transform items-center justify-center rounded-full bg-muted/70 backdrop-blur text-foreground/90 transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground',
  variants: {
    size: {
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-4 w-4',
    },
    hasSuffix: {
      true: '',
    },
  },
  compoundVariants: [
    { hasSuffix: true, size: 'sm', class: 'me-1.5' },
    { hasSuffix: true, size: 'md', class: 'me-2' },
    { hasSuffix: true, size: 'lg', class: 'me-2.5' },
  ],
});

export interface FieldClearButtonProps {
  as?: React.ElementType;
  hasSuffix?: boolean;
  size?: VariantProps<typeof fieldClearButton>['size'];
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}

export function FieldClearButton({
  as,
  size,
  onClick,
  hasSuffix,
  className,
}: FieldClearButtonProps) {
  const Component = as || 'button';
  return (
    <Component
      type="button"
      onClick={onClick}
      aria-label="Clear input"
      className={fieldClearButton({
        size,
        hasSuffix,
        className,
      })}
    >
      {/* HeroIcon: x-mark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-auto"
        aria-hidden="true"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </Component>
  );
}

FieldClearButton.displayName = 'FieldClearButton';

