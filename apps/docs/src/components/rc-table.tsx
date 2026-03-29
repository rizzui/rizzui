import React from "react";
import RcTable from "rc-table";
import { tv, type VariantProps } from "tailwind-variants";
import { Empty, cn } from "rizzui";

export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;

const tableStyles = tv({
  base: "rizzui-rc-table [&_.rc-table-content]:overflow-x-auto [&_table]:w-full [&_.rc-table-row:hover]:bg-muted/60",
  variants: {
    variant: {
      modern:
        "[&_thead]:bg-muted/50 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-border]",
      minimal: "[&_thead]:bg-muted/50]",
      elegant:
        "[&_thead]:border-y [&_thead]:border-border [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-border]",
    },
    striped: {
      true: "[&_.rc-table-row:nth-child(2n)_.rc-table-cell]:bg-muted/40]",
    },
  },
  defaultVariants: {
    variant: "modern",
    striped: false,
  },
});

const theadStyles = tv({
  base: "[&_thead]:text-left [&_thead]:rtl:text-right [&_th.rc-table-cell]:uppercase [&_th.rc-table-cell]:text-xs [&_th.rc-table-cell]:font-medium [&_th.rc-table-cell]:tracking-wide",
});

const tCellStyles = tv({
  base: "[&_.rc-table-cell]:px-3 [&_th.rc-table-cell]:py-3 [&_td.rc-table-cell]:py-4]",
});

type RCTableProps = ExtractProps<typeof RcTable>;

export interface TableProps
  extends Omit<RCTableProps, "className" | "emptyText"> {
  emptyText?: React.ReactElement;
  variant?: VariantProps<typeof tableStyles>["variant"];
  striped?: boolean;
  className?: string;
}

export default function Table({
  striped,
  variant = "modern",
  emptyText,
  className,
  ...props
}: TableProps) {
  return (
    <RcTable
      className={cn(
        tableStyles({ variant, striped }),
        theadStyles(),
        tCellStyles(),
        className,
      )}
      emptyText={emptyText ?? <Empty />}
      {...props}
    />
  );
}

Table.displayName = "Table";
