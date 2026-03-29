import type { MouseEvent } from 'react';
import { Tab as HeadlessTab, type TabProps } from '@headlessui/react';
import { createVariant } from '../../lib/variants';
import { cn } from '../../lib/cn';
import type { ExtractProps } from '../../lib/extract-props';
import { useTab } from './tab-context';

const tabListItem = createVariant({
  base: 'relative z-10 py-2.5 px-3 flex items-center hover:text-primary gap-1 [&>*]:pointer-events-none outline-none cursor-pointer before:absolute before:bg-primary before:transition-opacity before:duration-200 before:opacity-0',
  variants: {
    selected: {
      true: 'text-primary hover:text-primary-dark',
      false: '',
    },
    orientation: {
      // Vertical: indicator on the right edge, aligned with border-e
      // TabList has border-e pe-3 (12px padding), border is at the right edge
      // Indicator needs to extend to the border position, so use -end-[13px] to align with border edge
      vertical: 'before:h-full before:w-0.5 before:-end-[13px] before:top-0',
      // Non-vertical: indicator at the bottom, aligned with border-b
      // TabList has border-b pb-[1px], border is 1px from bottom, so indicator at -bottom-[1px] aligns with border
      horizontal:
        'whitespace-nowrap before:w-full before:h-0.5 before:start-0 before:-bottom-[1px]',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
  compoundVariants: [
    {
      selected: true,
      orientation: 'vertical',
      class: 'before:opacity-100',
    },
    {
      selected: true,
      orientation: 'horizontal',
      class: 'before:opacity-100',
    },
  ],
});

export type TabListItemProps = ExtractProps<TabProps> & {
  activeClassName?: string;
};

export function TabListItem({
  children,
  className,
  activeClassName,
  onMouseOver,
  ...props
}: TabListItemProps) {
  const { ref, setRect, vertical, setDisplayHighlight } = useTab();

  const handleMouseOver = (event: MouseEvent<HTMLButtonElement>) => {
    setRect(event, () => ref.current);
    setDisplayHighlight?.(true);
    onMouseOver?.(event);
  };

  return (
    <HeadlessTab
      onMouseOver={handleMouseOver}
      className={({ selected }) =>
        cn(
          'rizzui-tab-list-item',
          tabListItem({
            selected,
            orientation: vertical ? 'vertical' : 'horizontal', // Convert boolean to string to avoid boolean confusion
          }),
          selected && activeClassName,
          className
        )
      }
      {...props}
    >
      {children}
    </HeadlessTab>
  );
}

TabListItem.displayName = 'TabListItem';
