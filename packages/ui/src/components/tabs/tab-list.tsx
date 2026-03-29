import type { ReactNode } from 'react';
import {
  TabList as HeadlessTabList,
  type TabListProps as HeadlessTabListProps,
} from '@headlessui/react';
import { createVariant } from '../../lib/variants';
import { cn } from '../../lib/cn';
import type { ExtractProps } from '../../lib/extract-props';
import { Highlight } from '../highlight';
import { useTab } from './tab-context';
import { useRePositioningActiveTab } from './tab-lib';

const tabList = createVariant({
  base: 'relative flex border-border',
  variants: {
    orientation: {
      vertical: 'flex-col border-e pe-3',
      horizontal:
        'justify-start border-b gap-4 pb-[1px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export type TabListProps = Omit<ExtractProps<HeadlessTabListProps>, 'children'> & {
  children: ReactNode;
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
        'rizzui-tab-list',
        tabList({ orientation: vertical ? 'vertical' : 'horizontal' }),
        className
      )}
      {...props}
    >
      {children}

      {!hideHoverAnimation && (
        <Highlight
          rect={rect}
          visible={displayHighlight}
          hoverHeightRatio={0.7}
          hoverWidthRatio={1}
          className={cn('z-0', highlightClassName)}
        />
      )}
    </HeadlessTabList>
  );
}
