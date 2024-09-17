import React, { useState, useRef } from 'react';
import { TabGroup, type TabGroupProps } from '@headlessui/react';
import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';
import { TabList } from './tab-list';
import { TabListItem } from './tab-list-item';
import { TabPanels } from './tab-panels';
import { TabPanel } from './tab-panel';
import { TabProvider } from './tab-context';
import { useRect } from '../../lib/use-rect';
import { makeClassName } from '../../lib/make-class-name';

export type TabProps = ExtractProps<TabGroupProps> & {
  hideHoverAnimation?: boolean;
  highlightClassName?: string;
};

export function Tab({
  vertical,
  className,
  selectedIndex,
  onChange,
  hideHoverAnimation,
  children,
  highlightClassName,
  ...props
}: TabProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { rect, setRect } = useRect();
  const [activeTab, setActiveTab] = useState(0);
  const [displayHighlight, setDisplayHighlight] = useState(false);

  return (
    <TabProvider
      value={{
        ref,
        rect,
        setRect,
        vertical,
        displayHighlight,
        setDisplayHighlight,
        activeTab: selectedIndex ?? activeTab,
        hideHoverAnimation,
        highlightClassName,
      }}
    >
      <TabGroup
        as="div"
        selectedIndex={selectedIndex ?? activeTab}
        onChange={onChange ?? setActiveTab}
        className={cn(makeClassName(`tab-root`), 'w-full', className, {
          'flex gap-4': vertical,
        })}
        {...props}
      >
        {React.Children.map(children as any, (child) => {
          if (React.isValidElement(child) && child.type === TabList) {
            return child;
          }
          if (React.isValidElement(child) && child.type === TabPanels) {
            return child;
          }
          return null;
        })}
      </TabGroup>
    </TabProvider>
  );
}

Tab.List = TabList;
Tab.ListItem = TabListItem;
Tab.Panels = TabPanels;
Tab.Panel = TabPanel;

Tab.displayName = 'Tab';
