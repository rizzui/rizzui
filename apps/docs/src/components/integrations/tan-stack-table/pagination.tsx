import { ActionIcon, Select, SelectOption, Text } from "rizzui";
import { type Table as ReactTableType } from "@tanstack/react-table";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const options = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 15, label: "15" },
  { value: 20, label: "20" },
];

export default function TablePagination<TData extends Record<string, any>>({
  table,
}: {
  table: ReactTableType<TData>;
}) {
  return (
    <div className="flex w-full items-center justify-between @container">
      <div className="hidden @2xl:block">
        <Text>
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </Text>
      </div>
      <div className="flex w-full items-center justify-between gap-6 @2xl:w-auto @2xl:gap-12">
        <div className="flex items-center gap-4">
          <Text className="hidden whitespace-nowrap text-sm font-medium text-[var(--text-secondary)] @md:block">Rows per page</Text>
          <Select
            size="sm"
            options={options}
            className="w-[52px]"
            value={table.getState().pagination.pageSize}
            onChange={(v: SelectOption) => {
              table.setPageSize(Number(v.value));
            }}
            selectClassName="font-semibold text-sm ring-0 shadow-sm"
            optionClassName="justify-center font-medium"
            suffixClassName="[&_svg]:!size-3"
          />
        </div>
        <Text className="hidden text-sm font-medium text-[var(--text-secondary)] @3xl:block">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount().toLocaleString()}
        </Text>
        <div className="grid grid-cols-4 gap-2">
          <ActionIcon
            size="sm"
            rounded="lg"
            variant="outline"
            aria-label="Go to first page"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-[var(--text-primary)] shadow-sm disabled:text-[var(--muted-foreground)] disabled:shadow-none"
          >
            <ChevronDoubleLeftIcon className="size-5" />
          </ActionIcon>
          <ActionIcon
            size="sm"
            rounded="lg"
            variant="outline"
            aria-label="Go to previous page"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-[var(--text-primary)] shadow-sm disabled:text-[var(--muted-foreground)] disabled:shadow-none"
          >
            <ChevronLeftIcon className="size-5" />
          </ActionIcon>
          <ActionIcon
            size="sm"
            rounded="lg"
            variant="outline"
            aria-label="Go to next page"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-[var(--text-primary)] shadow-sm disabled:text-[var(--muted-foreground)] disabled:shadow-none"
          >
            <ChevronRightIcon className="size-5" />
          </ActionIcon>
          <ActionIcon
            size="sm"
            rounded="lg"
            variant="outline"
            aria-label="Go to last page"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
            className="text-[var(--text-primary)] shadow-sm disabled:text-[var(--muted-foreground)] disabled:shadow-none"
          >
            <ChevronDoubleRightIcon className="size-5" />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
}
