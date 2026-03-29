import React from "react";
import { Table } from "rizzui";
import { Person } from "./data";
import { flexRender, Table as TanStackTableTypes } from "@tanstack/react-table";

type TablePropsTypes = {
  table: TanStackTableTypes<Person>;
};

export default function MainTable({ table }: TablePropsTypes) {
  const footers = table
    .getFooterGroups()
    .map((group) => group.headers.map((header) => header.column.columnDef.footer))
    .flat()
    .filter(Boolean);

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden custom-scrollbar">
      <Table
        className="!shadow-none !border-0"
        style={{
          width: table.getTotalSize(),
        }}
      >
        <Table.Header className="!bg-gray-100 !border-y-0">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Table.Head
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{
                        width: header.getSize(),
                      }}
                      className="!text-start"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </Table.Head>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <Table.Row key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Cell
                  key={cell.id}
                  className="!text-start"
                  style={{
                    width: cell.column.getSize(),
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>

        {footers.length > 0 && (
          <Table.Footer>
            {table.getFooterGroups().map((footerGroup) => (
              <Table.Row key={footerGroup.id}>
                {footerGroup.headers.map((footer) => {
                  return (
                    <Table.Cell key={footer.id}>
                      {footer.isPlaceholder ? null : (
                        <>{flexRender(footer.column.columnDef.footer, footer.getContext())}</>
                      )}
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            ))}
          </Table.Footer>
        )}
      </Table>
    </div>
  );
}
