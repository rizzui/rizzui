import React from 'react';
import { type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { table } from '../../lib/table-style';
import { makeClassName } from '../../lib/make-class-name';

export type TableVariantProps = VariantProps<typeof table>['variant'];
export interface TableProps extends React.ComponentPropsWithRef<'table'> {
  variant?: TableVariantProps;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant = 'modern', ...props }, ref) => (
    <table
      ref={ref}
      className={table({ variant, className })}
      {...props}
    />
  )
);

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithRef<'thead'>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(makeClassName(`table-header`), className)}
    {...props}
  />
));

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithRef<'tbody'>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(makeClassName(`table-body`), className)}
    {...props}
  />
));

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithRef<'tfoot'>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(makeClassName(`table-footer`), className)}
    {...props}
  />
));

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.ComponentPropsWithRef<'tr'>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(makeClassName(`table-row`), className)}
    {...props}
  />
));

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentPropsWithRef<'th'>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(makeClassName(`table-head`), className)}
    {...props}
  />
));

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentPropsWithRef<'td'>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(makeClassName(`table-cell`), className)}
    {...props}
  />
));

TableHeader.displayName = 'TableHeader';
TableBody.displayName = 'TableBody';
TableFooter.displayName = 'TableFooter';
TableRow.displayName = 'TableRow';
TableHead.displayName = 'TableHead';
TableCell.displayName = 'TableCell';

const TableWithComponents = Object.assign(Table, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
});

TableWithComponents.displayName = 'Table';

export { TableWithComponents as Table };
