import React from "react";
import { Table, HeaderCell, Checkbox, Avatar, Text, Badge } from "rizzui";
import { initialData } from "@site/src/data/table-data";

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "pending":
      return <Badge variant="flat">{status}</Badge>;
    case "active":
      return (
        <Badge variant="flat" color="success">
          {status}
        </Badge>
      );
    case "warning":
      return (
        <Badge variant="flat" color="warning">
          {status}
        </Badge>
      );
    case "danger":
      return (
        <Badge variant="flat" color="danger">
          {status}
        </Badge>
      );
    default:
      return null;
  }
}

const getColumns = (
  order: string,
  column: string,
  onHeaderClick: (value: string) => any
) => [
  {
    title: <></>,
    dataIndex: "checked",
    key: "checked",
    width: 50,
    render: () => (
      <div className="inline-flex cursor-pointer">
        <Checkbox variant="flat" />
      </div>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Id"
        sortable
        ascending={order === "asc" && column === "id"}
      />
    ),
    onHeaderCell: () => onHeaderClick("id"),
    dataIndex: "id",
    key: "id",
    width: 50,
  },
  {
    title: <HeaderCell title="Employee" />,
    dataIndex: "employee",
    key: "employee",
    width: 250,
    render: (employee: any) => (
      <div className="flex items-center">
        <Avatar name="John Doe" src={employee.avatar} />
        <div className="ml-3 rtl:ml-0 rtl:mr-3">
          <Text tag="h6" className="mb-0.5 !text-sm font-medium">
            {employee.name}
          </Text>
          <Text tag="p" className="text-xs text-gray-400">
            {employee.userName}
          </Text>
        </div>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Designation" />,
    dataIndex: "designation",
    key: "designation",
    width: 320,
    render: (designation: any) => (
      <div>
        <Text tag="h6" className="mb-0.5 !text-sm font-medium">
          {designation.role}
        </Text>
        <Text tag="p" className="text-xs text-gray-400">
          {designation.company}
        </Text>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Phone Number" />,
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    width: 200,
  },
  {
    title: <HeaderCell title="Email" />,
    dataIndex: "email",
    key: "email",
    width: 200,
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: "status",
    key: "status",
    width: 120,
    render: (value: string) => getStatusBadge(value),
  },
  {
    title: <></>,
    dataIndex: "action",
    key: "action",
    width: 120,
    render: (_: string, row: any) => (
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="underline text-primary"
          onClick={() => alert(`Edit item #${row.id}`)} // eslint-disable-line no-alert
        >
          Edit
        </button>
        <button type="button" className="underline">
          View
        </button>
      </div>
    ),
  },
];

export default function TableDefault() {
  const [order, setOrder] = React.useState<string>("desc");
  const [column, setColumn] = React.useState<string>("");
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const onHeaderClick = (value: string) => ({
    onClick: () => {
      setColumn(value);
      setOrder(order === "desc" ? "asc" : "desc");
      if (order === "desc") {
        // @ts-ignore
        setData([...data.sort((a, b) => (a[value] > b[value] ? -1 : 1))]);
      } else {
        // @ts-ignore
        setData([...data.sort((a, b) => (a[value] > b[value] ? 1 : -1))]);
      }
    },
  });
  const columns: any = React.useMemo(
    () => getColumns(order, column, onHeaderClick),
    [order, column, onHeaderClick]
  );

  return (
    <Table
      data={data}
      columns={columns}
      className="text-sm [&_table]:mb-0 [&_table_h6]:!mb-0.5 [&_table_tbody_td]:!font-normal first:[&_table_th]:rounded-tl-none first:[&_table_th]:rounded-bl-none last:[&_table_th]:rounded-br-none last:[&_table_th]:rounded-tr-none"
    />
  );
}

export function TableModern() {
  const [order, setOrder] = React.useState<string>("desc");
  const [column, setColumn] = React.useState<string>("");
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const onHeaderClick = (value: string) => ({
    onClick: () => {
      setColumn(value);
      setOrder(order === "desc" ? "asc" : "desc");
      if (order === "desc") {
        // @ts-ignore
        setData([...data.sort((a, b) => (a[value] > b[value] ? -1 : 1))]);
      } else {
        // @ts-ignore
        setData([...data.sort((a, b) => (a[value] > b[value] ? 1 : -1))]);
      }
    },
  });
  const columns: any = React.useMemo(
    () => getColumns(order, column, onHeaderClick),
    [order, column, onHeaderClick]
  );
  return (
    <Table
      columns={columns}
      data={data}
      variant="modern"
      className="text-sm [&_table]:mb-0 [&_table_h6]:!mb-0.5 [&_table_tbody_td]:!font-normal first:[&_table_th]:rounded-tl-none first:[&_table_th]:rounded-bl-none last:[&_table_th]:rounded-br-none last:[&_table_th]:rounded-tr-none"
    />
  );
}

export function TableElegant() {
  const [order, setOrder] = React.useState<string>("desc");
  const [column, setColumn] = React.useState<string>("");
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const onHeaderClick = (value: string) => ({
    onClick: () => {
      setColumn(value);
      setOrder(order === "desc" ? "asc" : "desc");
      if (order === "desc") {
        // @ts-ignore
        setData([...data.sort((a, b) => (a[value] > b[value] ? -1 : 1))]);
      } else {
        // @ts-ignore
        setData([...data.sort((a, b) => (a[value] > b[value] ? 1 : -1))]);
      }
    },
  });
  const columns: any = React.useMemo(
    () => getColumns(order, column, onHeaderClick),
    [order, column, onHeaderClick]
  );
  return (
    <Table
      columns={columns}
      data={data}
      variant="elegant"
      className="text-sm [&_table]:mb-0 [&_table_th]:!bg-transparent [&_table_h6]:!mb-0.5 [&_table_tbody_td]:!font-normal first:[&_table_th]:rounded-tl-none first:[&_table_th]:rounded-bl-none last:[&_table_th]:rounded-br-none last:[&_table_th]:rounded-tr-none"
    />
  );
}

export function TableMinimal() {
  const [order, setOrder] = React.useState<string>("desc");
  const [column, setColumn] = React.useState<string>("");
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const onHeaderClick = (value: string) => ({
    onClick: () => {
      setColumn(value);
      setOrder(order === "desc" ? "asc" : "desc");
      if (order === "desc") {
        // @ts-ignore
        setData([...data.sort((a, b) => (a[value] > b[value] ? -1 : 1))]);
      } else {
        // @ts-ignore
        setData([...data.sort((a, b) => (a[value] > b[value] ? 1 : -1))]);
      }
    },
  });
  const columns: any = React.useMemo(
    () => getColumns(order, column, onHeaderClick),
    [order, column, onHeaderClick]
  );
  return (
    <Table
      columns={columns}
      data={data}
      variant="minimal"
      className="text-sm [&_table]:mb-0 [&_table_h6]:!mb-0.5 [&_table_tbody_td]:!font-normal first:[&_table_th]:rounded-tl-none first:[&_table_th]:rounded-bl-none last:[&_table_th]:rounded-br-none last:[&_table_th]:rounded-tr-none"
    />
  );
}
