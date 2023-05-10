import { Tab } from '@headlessui/react';
import cn from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';

export type TabsProps = ExtractProps<typeof Tab.Group>;

/**
 * We used tab component of `headless UI` to build it.
 * See their [documentation](https://headlessui.com/react/tabs) for more info.
 */
export default function Tabs({
  vertical,
  className,
  children,
  ...props
}: TabsProps) {
  return (
    <Tab.Group
      as="div"
      className={cn('w-full', className, {
        'flex gap-4': vertical,
      })}
      {...props}
    >
      {children as any}
    </Tab.Group>
  );
}

Tabs.displayName = 'Tabs';
