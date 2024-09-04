import React from 'react';
import { cn } from 'src/lib/cn';
import { tableStyles } from 'src/lib/table-style';

export type TableVariantProps = keyof typeof tableStyles.variants;
export interface TableProps extends React.ComponentPropsWithRef<'table'> {
  variant?: TableVariantProps;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant = 'modern', ...props }, ref) => (
    <table
      ref={ref}
      className={cn(tableStyles.variants[variant], className)}
      {...props}
    />
  )
);

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithRef<'thead'>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={className} {...props} />
));

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithRef<'tbody'>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={className} {...props} />
));

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithRef<'tfoot'>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={className} {...props} />
));

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.ComponentPropsWithRef<'tr'>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={className} {...props} />
));

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentPropsWithRef<'th'>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={className} {...props} />
));

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentPropsWithRef<'td'>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={className} {...props} />
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
