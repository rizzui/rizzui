import type { InputHTMLAttributes, ReactNode, Ref } from 'react';
import { createVariant, type VariantProps } from '../../lib/variants';
import { cn } from '../../lib/cn';
import { useCheckboxGroup } from '../checkbox-group/checkbox-group';

const advancedCheckbox = createVariant({
  base: 'border-(length:--border-width) border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed peer-disabled:text-muted-foreground rounded-(--border-radius)',
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
  value,
  checked,
  onChange,
  ...props
}: AdvancedCheckboxProps) {
  // Try to get checkbox group context (optional)
  let groupContext;
  try {
    groupContext = useCheckboxGroup();
  } catch {
    // Not in a checkbox group, use standalone mode
    groupContext = null;
  }

  // Use group context if available, otherwise use individual props
  const isChecked = groupContext
    ? groupContext.isChecked(value as string)
    : checked;
  const handleChange = groupContext ? groupContext.onChange : onChange;

  return (
    <label
      className={cn(
        'rizzui-advanced-checkbox-root',
        'relative block',
        className
      )}
    >
      <input
        type="checkbox"
        ref={ref}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        className={cn(
          'rizzui-advanced-checkbox-input',
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
