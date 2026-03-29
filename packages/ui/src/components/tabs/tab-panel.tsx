import {
  TabPanel as HeadlessTabPanel,
  type TabPanelProps as HeadlessTabPanelProps,
} from '@headlessui/react';
import { cn } from '../../lib/cn';
import type { ExtractProps } from '../../lib/extract-props';

export type TabPanelProps = ExtractProps<HeadlessTabPanelProps>;

export function TabPanel({ children, className, ...props }: TabPanelProps) {
  return (
    <HeadlessTabPanel
      className={cn('rizzui-tab-panel', className)}
      {...props}
    >
      {children}
    </HeadlessTabPanel>
  );
}

TabPanel.displayName = 'TabPanel';
