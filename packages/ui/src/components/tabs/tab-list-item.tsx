import React from 'react';
import { Tab as HeadlessTab } from '@headlessui/react';
import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';
import { useTab } from './tab-context';
import { makeClassName } from '../../lib/make-class-name';

const tabListItemStyles = {
  base: 'relative py-2.5 px-3 flex items-center text-gray-600 hover:text-gray-900 gap-1 [&>*]:pointer-events-none outline-none before:absolute before:bg-primary before:opacity-0 before:transition-all before:duration-200',
  active: 'before:opacity-100 text-gray-900',
  vertical: 'before:h-full before:w-0.5 before:-end-[13px] before:bottom-0',
  horizontal: 'before:w-full before:h-0.5 before:start-0 before:-bottom-[1px]',
};

export type TabListItemProps = ExtractProps<typeof HeadlessTab> & {
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
      className={({ selected }: any) =>
        cn(
          makeClassName(`tab-list-item`),
          tabListItemStyles.base,
          !vertical && 'whitespace-nowrap',
          selected && [
            vertical
              ? tabListItemStyles.vertical
              : tabListItemStyles.horizontal,
            tabListItemStyles.active,
            activeClassName && activeClassName,
          ],
          className,
        )
      }
      {...props}
    >
      {children}
    </HeadlessTab>
  );
}

TabListItem.displayName = 'TabListItem';
