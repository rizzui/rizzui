import React from "react";
import MainTable from "./table";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultData } from "./data";
import { defaultColumns } from "./column";
import TableToolbar from "./toolbar";
import TablePagination from "./pagination";

export default function TanStackTableDemo() {
  const table = useReactTable({
    data: defaultData,
    columns: defaultColumns,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <TableToolbar table={table} />
      <MainTable table={table} />
      <TablePagination table={table} />
    </>
  );
}
