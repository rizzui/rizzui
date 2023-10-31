import React from 'react';
import { Tab as HeadlessTab } from '@headlessui/react';
import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';
import { makeClassName } from '../../lib/make-class-name';

export type TabPanelProps = ExtractProps<typeof HeadlessTab.Panel> & {};

export function TabPanel({ children, className, ...props }: TabPanelProps) {
  return (
    <HeadlessTab.Panel
      className={cn(makeClassName(`tab-panel`), className)}
      {...props}
    >
      {children}
    </HeadlessTab.Panel>
  );
}

TabPanel.displayName = 'TabPanel';
