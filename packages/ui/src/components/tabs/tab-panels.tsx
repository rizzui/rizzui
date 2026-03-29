import {
  TabPanels as HeadlessTabPanels,
  type TabPanelsProps as HeadlessTabPanelsProps,
} from '@headlessui/react';
import { createVariant } from '../../lib/variants';
import { cn } from '../../lib/cn';
import type { ExtractProps } from '../../lib/extract-props';
import { useTab } from './tab-context';

const tabPanels = createVariant({
  base: 'py-2',
  variants: {
    orientation: {
      vertical: '',
      horizontal: 'mt-2',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export type TabPanelsProps = ExtractProps<HeadlessTabPanelsProps>;

export function TabPanels({ children, className, ...props }: TabPanelsProps) {
  const { vertical } = useTab();

  return (
    <HeadlessTabPanels
      className={cn(
        'rizzui-tab-panels',
        tabPanels({ orientation: vertical ? 'vertical' : 'horizontal' }),
        className
      )}
      {...props}
    >
      {children}
    </HeadlessTabPanels>
  );
}
