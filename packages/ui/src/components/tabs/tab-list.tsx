import React from 'react';
import {
  TabList as HeadlessTabList,
  type TabListProps as HeadlessTabListProps,
} from '@headlessui/react';
import { tv } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';
import { TabListItem } from './tab-list-item';
import { Highlight } from '../highlight';
import { useTab } from './tab-context';
import { useRePositioningActiveTab } from './tab-lib';
import { makeClassName } from '../../lib/make-class-name';

const tabList = tv({
  base: 'relative flex border-border',
  variants: {
    vertical: {
      true: 'flex-col border-e pe-3',
      false:
        'justify-start border-b gap-4 pb-[1px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
    },
  },
  defaultVariants: {
    vertical: false,
  },
});

export type TabListProps = Omit<ExtractProps<HeadlessTabListProps>, 'children'> & {
  children: React.ReactNode;
};

export function TabList({ children, className, ...props }: TabListProps) {
  const {
    ref,
    rect,
    vertical,
    activeTab,
    displayHighlight,
    setDisplayHighlight,
    hideHoverAnimation,
    highlightClassName,
  } = useTab();

  useRePositioningActiveTab({ ref, activeTab });

  return (
    <HeadlessTabList
      ref={ref}
      onMouseLeave={() => setDisplayHighlight && setDisplayHighlight(false)}
      className={cn(
        makeClassName(`tab-list`),
        tabList({ vertical }),
        className
      )}
      {...props}
    >
      {children as any}

      {!hideHoverAnimation ? (
        <Highlight
          rect={rect}
          visible={displayHighlight}
          hoverHeightRatio={0.7}
          hoverWidthRatio={1}
          className={highlightClassName}
        />
      ) : null}
    </HeadlessTabList>
  );
}
