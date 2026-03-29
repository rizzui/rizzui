import { type Person } from "./data";
import { ActionIcon, Button, Checkbox, Popover } from "rizzui";
import { createColumnHelper } from "@tanstack/react-table";
import { AvatarCard, DateCell, getStatusBadge } from "./utils";
import {
  EllipsisHorizontalIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const columnHelper = createColumnHelper<Person>();

export const defaultColumns = [
  columnHelper.accessor("id", {
    size: 50,
    header: ({ table }) => (
      <Checkbox
        className="ps-2"
        inputClassName="bg-white"
        aria-label="Select all rows"
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={() => table.toggleAllPageRowsSelected()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="ps-2"
        aria-label="Select row"
        checked={row.getIsSelected()}
        indeterminate={row.getIsSomeSelected()}
        onChange={() => row.toggleSelected()}
      />
    ),
  }),

  columnHelper.accessor("name", {
    size: 280,
    header: "Customer",
    cell: ({ row: { original } }) => (
      <AvatarCard
        src={original.avatar}
        name={original.name}
        description={original.email.toLowerCase()}
      />
    ),
  }),

  columnHelper.accessor("dueDate", {
    size: 180,
    header: "Due Date",
    cell: ({ row }) => <DateCell date={new Date(row.original.dueDate)} />,
  }),

  columnHelper.accessor("amount", {
    size: 120,
    header: "Amount",
    cell: ({ row }) => <span className="font-medium">$ {row.original.amount}</span>,
  }),

  columnHelper.accessor("status", {
    size: 120,
    header: "Status",
    cell: (info) => getStatusBadge(info.renderValue()!),
  }),

  columnHelper.accessor("avatar", {
    size: 120,
    header: "",
    cell: () => (
      <div className="w-full flex justify-center">
        <Popover
          shadow="sm"
          placement="bottom-end"
        >
          <Popover.Trigger>
            <ActionIcon
              as="span"
              variant="text"
              className="h-auto p-0"
            >
              <EllipsisHorizontalIcon
                strokeWidth={2}
                className="size-5"
              />
            </ActionIcon>
          </Popover.Trigger>
          <Popover.Content className="p-1 flex flex-col">
            <Button
              size="sm"
              variant="text"
              className="hover:bg-[var(--muted)] gap-2 justify-start"
            >
              <PencilIcon className="size-3.5" /> Edit
            </Button>
            <Button
              size="sm"
              variant="text"
              className="hover:bg-[var(--muted)] gap-2 justify-start"
            >
              <EyeIcon className="size-3.5" /> View
            </Button>
            <Button
              size="sm"
              variant="text"
              className="hover:bg-[var(--muted)] gap-2 justify-start"
            >
              <TrashIcon className="size-3.5" /> Delete
            </Button>
          </Popover.Content>
        </Popover>
      </div>
    ),
  }),
];
