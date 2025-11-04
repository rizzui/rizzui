import type { InputHTMLAttributes, ReactNode, Ref } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

const advancedCheckbox = tv({
  base: 'border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed peer-disabled:text-muted-foreground rounded-[var(--border-radius)]',
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

type AdvancedCheckboxVariant = VariantProps<typeof advancedCheckbox>;

export interface AdvancedCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  children: ReactNode;
  size?: AdvancedCheckboxVariant['size'];
  alignment?: AdvancedCheckboxVariant['alignment'];
  inputClassName?: string;
  contentClassName?: string;
  className?: string;
  ref?: Ref<HTMLInputElement>;
}

export function AdvancedCheckbox({
  size = 'md',
  alignment = 'left',
  children,
  inputClassName,
  contentClassName,
  className,
  ref,
  ...props
}: AdvancedCheckboxProps) {
  return (
    <label
      className={cn(
        makeClassName(`advanced-checkbox-root`),
        'relative block',
        className
      )}
    >
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          makeClassName(`advanced-checkbox-input`),
          'peer sr-only',
          inputClassName
        )}
        {...props}
      />
      <span
        className={advancedCheckbox({
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
