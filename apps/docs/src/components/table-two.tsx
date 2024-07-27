import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  Avatar,
  Text,
  TableVariantProps,
  cn,
} from "rizzui";
import { initialData } from "@site/src/data/table-data";
import { getStatusBadge } from "./table";

export function TableDemo({ variant = "classic" }: { variant: TableVariantProps }) {
  return (
    <div className="overflow-x-auto overflow-y-hidden w-full">
      <Table
        variant={variant}
        className={cn(
          "!shadow-none",
          variant === "modern" && "!border-0",
          variant === "minimal" && "!border-0",
          variant === "elegant" && "!border-0",
          variant === "retro" && "!border-x-0 !border-t-0"
        )}
      >
        <TableHeader
          className={cn(
            "!bg-gray-100",
            variant === "modern" && "!border-y-0",
            variant === "minimal" && "!border-y-0",
            variant === "elegant" && "!bg-transparent",
            variant === "retro" && "!bg-transparent"
          )}
        >
          <TableRow>
            <TableHead className="!px-3">ID</TableHead>
            <TableHead>Employee</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="!font-normal !px-3">{item.id}.</TableCell>
              <TableCell className="!px-3">
                <div className="flex min-w-36 items-center">
                  <Avatar
                    name="John Doe"
                    src={item.employee.avatar}
                  />
                  <div className="ml-3 rtl:ml-0 rtl:mr-3">
                    <Text className="mb-0.5 !text-sm font-medium">{item.employee.name}</Text>
                    <Text className="text-xs text-gray-400">{item.employee.userName}</Text>
                  </div>
                </div>
              </TableCell>
              <TableCell className="!px-3">
                <Text className="mb-0.5 !text-sm font-medium">{item.designation.role}</Text>
                <Text className="text-xs text-gray-400">{item.designation.company}</Text>
              </TableCell>
              <TableCell className="!px-3">{item.phoneNumber}</TableCell>
              <TableCell className="!px-3">{item.email}</TableCell>
              <TableCell className="!px-3">{getStatusBadge(item.status)}</TableCell>
              <TableCell className="!px-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="underline"
                    onClick={() => alert(`Edit item #${item.id}`)} // eslint-disable-line no-alert
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="underline"
                  >
                    View
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
