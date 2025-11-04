import React from 'react';
import { type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { table } from '../../lib/table-style';
import { makeClassName } from '../../lib/make-class-name';

export type TableVariantProps = VariantProps<typeof table>['variant'];
export interface TableProps extends React.ComponentPropsWithRef<'table'> {
  variant?: TableVariantProps;
}

function TableRoot({ 
  className, 
  variant = 'modern',
  ref,
  ...props 
}: TableProps) {
  return (
    <table
      ref={ref}
      className={table({ variant, className })}
      {...props}
    />
  );
}

function TableHeader({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<'thead'>) {
  return (
    <thead
      ref={ref}
      className={cn(makeClassName(`table-header`), className)}
      {...props}
    />
  );
}

function TableBody({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<'tbody'>) {
  return (
    <tbody
      ref={ref}
      className={cn(makeClassName(`table-body`), className)}
      {...props}
    />
  );
}

function TableFooter({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<'tfoot'>) {
  return (
    <tfoot
      ref={ref}
      className={cn(makeClassName(`table-footer`), className)}
      {...props}
    />
  );
}

function TableRow({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<'tr'>) {
  return (
    <tr
      ref={ref}
      className={cn(makeClassName(`table-row`), className)}
      {...props}
    />
  );
}

function TableHead({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<'th'>) {
  return (
    <th
      ref={ref}
      className={cn(makeClassName(`table-head`), className)}
      {...props}
    />
  );
}

function TableCell({
  className,
  ref,
  ...props
}: React.ComponentPropsWithRef<'td'>) {
  return (
    <td
      ref={ref}
      className={cn(makeClassName(`table-cell`), className)}
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
