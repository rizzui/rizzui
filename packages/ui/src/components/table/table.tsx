import type { ComponentPropsWithRef } from 'react';
import { createVariant, type VariantProps } from '../../lib/variants';
import { cn } from '../../lib/cn';

const table = createVariant({
  base: 'min-w-full border-collapse',
  variants: {
    variant: {
      modern:
        '[&_thead]:bg-gray-100 [&_th]:text-start [&_th]:text-gray-500 [&_th]:tracking-wider [&_th]:uppercase [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_tbody_tr]:border-b [&_tbody_tr]:last:border-b-0 [&_tbody_tr]:border-border [&_tbody_tr]:hover:bg-gray-50 [&_td]:py-4 [&_td]:px-3',
      minimal:
        '[&_thead]:bg-gray-100 [&_thead_th]:first:rounded-s-lg [&_thead_th]:last:rounded-e-lg [&_th]:text-start [&_th]:text-gray-500 [&_th]:tracking-wider [&_th]:uppercase [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_tbody_tr]:hover:bg-gray-50 [&_td]:py-4 [&_td]:px-3',
      elegant:
        '[&_thead]:border-y [&_thead]:border-border [&_th]:text-start [&_th]:text-gray-500 [&_th]:tracking-wider [&_th]:uppercase [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_tbody_tr]:border-b [&_tbody_tr]:last:border-b-0 [&_tbody_tr]:border-border [&_tbody_tr]:hover:bg-gray-50 [&_td]:py-4 [&_td]:px-3',
      retro:
        '[&_thead]:border-y [&_thead]:border-border [&_th]:text-start [&_th]:text-gray-500 [&_th]:tracking-wider [&_th]:uppercase [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_tbody_tr]:last:border-b-0 [&_tbody_tr]:hover:bg-gray-50 [&_td]:py-4 [&_td]:px-3',
      classic:
        'border-x border-border [&_thead]:border-y [&_thead]:bg-gray-100 [&_thead]:border-border [&_th]:text-gray-500 [&_th]:tracking-wider [&_th]:uppercase [&_th]:text-start [&_th]:font-semibold [&_th]:text-xs [&_th]:p-3 [&_tbody_tr]:border-b [&_tbody_tr]:border-border [&_tbody_tr]:hover:bg-gray-50 [&_td]:text-start [&_td]:py-4 [&_td]:px-3',
    },
  },
  defaultVariants: {
    variant: 'modern',
  },
});

export type TableVariantProps = VariantProps<typeof table>['variant'];
export interface TableProps extends ComponentPropsWithRef<'table'> {
  variant?: TableVariantProps;
}

function TableRoot({
  className,
  variant = 'modern',
  ref,
  ...props
}: TableProps) {
  return (
    <table ref={ref} className={table({ variant, className })} {...props} />
  );
}

function TableHeader({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'thead'>) {
  return (
    <thead
      ref={ref}
      className={cn('rizzui-table-header', className)}
      {...props}
    />
  );
}

function TableBody({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'tbody'>) {
  return (
    <tbody
      ref={ref}
      className={cn('rizzui-table-body', className)}
      {...props}
    />
  );
}

function TableFooter({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'tfoot'>) {
  return (
    <tfoot
      ref={ref}
      className={cn('rizzui-table-footer', className)}
      {...props}
    />
  );
}

function TableRow({ className, ref, ...props }: ComponentPropsWithRef<'tr'>) {
  return (
    <tr
      ref={ref}
      className={cn('rizzui-table-row', className)}
      {...props}
    />
  );
}

function TableHead({ className, ref, ...props }: ComponentPropsWithRef<'th'>) {
  return (
    <th
      ref={ref}
      className={cn('rizzui-table-head', className)}
      {...props}
    />
  );
}

function TableCell({ className, ref, ...props }: ComponentPropsWithRef<'td'>) {
  return (
    <td
      ref={ref}
      className={cn('rizzui-table-cell', className)}
      {...props}
    />
  );
}

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
});
