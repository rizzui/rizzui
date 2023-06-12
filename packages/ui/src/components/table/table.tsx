import RcTable from 'rc-table';

import Empty from '../empty';
import { cn } from '../../lib/cn';
import type { ExtractProps } from '../../lib/extract-props';

const classes = {
  table:
    '[&_.rc-table-content]:overflow-x-auto [&_table]:w-full [&_.rc-table-row:hover]:bg-gray-50',
  thead:
    '[&_thead]:text-left [&_thead]:rtl:text-right [&_th.rc-table-cell]:uppercase [&_th.rc-table-cell]:text-xs [&_th.rc-table-cell]:font-medium [&_th.rc-table-cell]:tracking-wide',
  tCell:
    '[&_.rc-table-cell]:px-3 [&_th.rc-table-cell]:py-3 [&_td.rc-table-cell]:py-4',
  variants: {
    classic:
      '[&_thead]:bg-gray-100 [&_.rc-table-container]:border-x [&_.rc-table-container]:border-gray-300 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-gray-300 [&_thead]:border-y [&_thead]:border-gray-300',
    modern:
      '[&_thead]:bg-gray-100 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-gray-300',
    minimal: '[&_thead]:bg-gray-100',
    elegant:
      '[&_thead]:border-y [&_thead]:border-gray-300 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-gray-300',
  },
  striped: '[&_.rc-table-row:nth-child(2n)_.rc-table-cell]:bg-gray-100/50',
};

type RCTableProps = ExtractProps<typeof RcTable>;

export interface TableProps
  extends Omit<RCTableProps, 'className' | 'emptyText'> {
  /** Set empty text, it will only appear when table has no data */
  emptyText?: React.ReactElement;
  /** The variants of the component are: */
  variant?: keyof typeof classes.variants;
  /** Add striping style */
  striped?: boolean;
  /** Add custom classes for extra style */
  className?: string;
}

/**
 *  React table component with useful functions. Under the hood we are using `rc-table` package,
 * you can check their official documentation for more details -> https://www.npmjs.com/package/rc-table
 */
export default function Table({
  striped,
  variant = 'classic',
  emptyText,
  className,
  ...props
}: TableProps) {
  return (
    <RcTable
      className={cn(
        classes.table,
        classes.thead,
        classes.tCell,
        classes.variants[variant],
        striped && classes.striped,
        className
      )}
      emptyText={emptyText || <Empty />}
      {...props}
    />
  );
}

Table.displayName = 'Table';
