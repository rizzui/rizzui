import React from 'react';
import { Tab as HeadlessTab, type TabProps } from '@headlessui/react';
import { tv } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';
import { useTab } from './tab-context';
import { makeClassName } from '../../lib/make-class-name';

const tabListItem = tv({
  base: 'relative py-2.5 px-3 flex items-center hover:text-primary gap-1 [&>*]:pointer-events-none outline-none before:absolute before:bg-primary before:opacity-0 before:transition-all before:duration-200',
  variants: {
    selected: {
      true: 'before:opacity-100 text-primary hover:text-primary-dark',
    },
    vertical: {
      true: 'before:h-full before:w-0.5 before:-end-[13px] before:bottom-0',
      false: 'whitespace-nowrap before:w-full before:h-0.5 before:start-0 before:-bottom-[1px]',
    },
  },
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
  const tabItemMouseOverHandler = (event: any) => {
    setRect(event, () => ref.current);
    setDisplayHighlight && setDisplayHighlight(true);
    onMouseOver && onMouseOver(event);
  };

  return (
    <HeadlessTab
      onMouseOver={tabItemMouseOverHandler}
      className={({ selected }: any) => {
        return cn(
          tabListItem({
            selected,
            vertical,
          }),
          selected && activeClassName,
          className
        );
      }}
      {...props}
    >
      {children}
    </HeadlessTab>
  );
}

TabListItem.displayName = 'TabListItem';
