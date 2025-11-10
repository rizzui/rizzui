import type { ComponentPropsWithRef } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { table } from '../../lib/table-style';

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
