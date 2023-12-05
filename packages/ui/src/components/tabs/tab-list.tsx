import React from 'react';
import { Tab as HeadlessTab } from '@headlessui/react';
import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';
import { TabListItem } from './tab-list-item';
import { Highlight } from '../highlight';
import { useTab } from './tab-context';
import { useRePositioningActiveTab } from './tab-lib';
import { makeClassName } from '../../lib/make-class-name';

const tabListStyles = {
  base: 'relative flex border-muted',
  vertical: 'flex-col border-e pe-3',
  horizontal:
    'justify-start border-b gap-4 pb-[1px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
};

export type TabListProps = ExtractProps<typeof HeadlessTab.List> & {};

export function TabList({ children, className, ...props }: TabListProps) {
  const {
    ref,
    rect,
    vertical,
    activeTab,
    displayHighlight,
    setDisplayHighlight,
    hideHoverAnimation,
  } = useTab();

  useRePositioningActiveTab({ ref, activeTab });

  return (
    <HeadlessTab.List
      ref={ref}
      onMouseLeave={() => setDisplayHighlight && setDisplayHighlight(false)}
      className={cn(
        makeClassName(`tab-list`),
        tabListStyles.base,
        vertical ? tabListStyles.vertical : tabListStyles.horizontal,
        className
      )}
      {...props}
    >
      {React.Children.map(children as any, (child) => {
        if (React.isValidElement(child) && child.type === TabListItem) {
          return child;
        }
        return null;
      })}

      {!hideHoverAnimation ? (
        <Highlight
          rect={rect}
          visible={displayHighlight}
          hoverHeightRatio={0.7}
          hoverWidthRatio={1}
        />
      ) : null}
    </HeadlessTab.List>
  );
}

TabList.displayName = 'TabList';
