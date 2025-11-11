import {
  TabPanels as HeadlessTabPanels,
  type TabPanelsProps as HeadlessTabPanelsProps,
} from '@headlessui/react';
import { tv } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import type { ExtractProps } from '../../lib/extract-props';
import { useTab } from './tab-context';

const tabPanels = tv({
  base: 'py-2',
  variants: {
    vertical: {
      true: '',
      false: 'mt-2',
    },
  },
  defaultVariants: {
    vertical: false,
  },
});

export type TabPanelsProps = ExtractProps<HeadlessTabPanelsProps>;

export function TabPanels({ children, className, ...props }: TabPanelsProps) {
  const { vertical } = useTab();

  return (
    <HeadlessTabPanels
      className={cn('rizzui-tab-panels', tabPanels({ vertical }), className)}
      {...props}
    >
      {children}
    </HeadlessTabPanels>
  );
}
