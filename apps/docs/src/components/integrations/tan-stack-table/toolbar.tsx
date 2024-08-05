import { ActionIcon, Badge, Button, Checkbox, Input, Popover, Select, Text, Title } from "rizzui";
import { type Table as ReactTableType } from "@tanstack/react-table";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

interface TableToolbarProps<T extends Record<string, any>> {
  table: ReactTableType<T>;
}

const statusOptions = [
  { label: "Paid", value: "Paid" },
  { label: "Pending", value: "Pending" },
  { label: "Draft", value: "Draft" },
];

export default function TableToolbar<TData extends Record<string, any>>({
  table,
}: TableToolbarProps<TData>) {
  const isFiltered = table.getState().globalFilter || table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between w-full mb-4">
      <Input
        type="search"
        placeholder="Search by anything..."
        value={table.getState().globalFilter ?? ""}
        onClear={() => table.setGlobalFilter("")}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        inputClassName="h-9"
        clearable={true}
        prefix={<MagnifyingGlassIcon className="size-4" />}
      />
      <div className="flex items-center gap-4">
        <Select
          options={statusOptions}
          value={table.getColumn("status")?.getFilterValue() ?? []}
          onChange={(e) => table.getColumn("status")?.setFilterValue(e)}
          getOptionValue={(option: { value: any }) => option.value}
          getOptionDisplayValue={(option: { value: string }) =>
            renderOptionDisplayValue(option.value)
          }
          placeholder="Status..."
          displayValue={(selected: string) => renderOptionDisplayValue(selected)}
          className={"w-32"}
          dropdownClassName="!z-20 h-auto"
          selectClassName="h-[38px] ring-0"
        />

        {isFiltered && (
          <Button
            onClick={() => {
              table.resetGlobalFilter();
              table.resetColumnFilters();
            }}
            variant="flat"
            className="gap-2"
          >
            <TrashIcon className="size-4" /> Clear
          </Button>
        )}

        {table && (
          <Popover
            shadow="sm"
            placement="bottom-end"
          >
            <Popover.Trigger>
              <ActionIcon title={"Toggle Columns"}>
                <AdjustmentsHorizontalIcon className="size-[18px]" />
              </ActionIcon>
            </Popover.Trigger>
            <Popover.Content className="z-0">
              <>
                <Title
                  as="h6"
                  className="!mb-4 text-sm font-semibold"
                >
                  Toggle Columns
                </Title>
                <div className="grid grid-cols-1 gap-4">
                  {table.getAllLeafColumns().map((column) => {
                    return (
                      typeof column.columnDef.header === "string" &&
                      column.columnDef.header.length > 0 && (
                        <Checkbox
                          size="sm"
                          key={column.id}
                          label={<>{column.columnDef.header}</>}
                          checked={column.getIsVisible()}
                          onChange={column.getToggleVisibilityHandler()}
                          iconClassName="size-4 translate-x-0.5"
                        />
                      )
                    );
                  })}
                </div>
              </>
            </Popover.Content>
          </Popover>
        )}
      </div>
    </div>
  );
}

export function renderOptionDisplayValue(value: string) {
  switch (value.toLowerCase()) {
    case "pending":
      return (
        <div className="flex items-center">
          <Badge
            color="warning"
            renderAsDot
          />
          <Text className="ms-2 font-medium capitalize text-orange-dark">{value}</Text>
        </div>
      );
    case "paid":
      return (
        <div className="flex items-center">
          <Badge
            color="success"
            renderAsDot
          />
          <Text className="ms-2 font-medium capitalize text-green-dark">{value}</Text>
        </div>
      );
    case "overdue":
      return (
        <div className="flex items-center">
          <Badge
            color="danger"
            renderAsDot
          />
          <Text className="ms-2 font-medium capitalize text-red-dark">{value}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge
            renderAsDot
            className="bg-gray-400"
          />
          <Text className="ms-2 font-medium capitalize text-gray-600">{value}</Text>
        </div>
      );
  }
}
