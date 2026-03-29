import React from "react";
import Table from "@site/src/components/rc-table";
import HeaderCell from "@site/src/components/header-cell";
import { Checkbox, Avatar, Text, Badge } from "rizzui";
import { initialData } from "@site/src/data/table-data";

export function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "pending":
      return <Badge variant="solid">{status}</Badge>;
    case "active":
      return (
        <Badge
          variant="solid"
          color="success"
        >
          {status}
        </Badge>
      );
    case "warning":
      return (
        <Badge
          variant="solid"
          color="warning"
        >
          {status}
        </Badge>
      );
    case "danger":
      return (
        <Badge
          variant="solid"
          color="danger"
        >
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
  onHeaderClick: (value: string) => any,
  selectedRows: Set<string>,
  onSelectAll: (checked: boolean) => void,
  onSelectRow: (id: string, checked: boolean) => void,
  dataLength: number
) => {
  const allSelected = selectedRows.size > 0 && selectedRows.size === dataLength;
  const someSelected = selectedRows.size > 0 && selectedRows.size < dataLength;

  return [
    {
      title: (
        <div className="inline-flex cursor-pointer">
          <Checkbox
            variant="flat"
            checked={allSelected}
            indeterminate={someSelected}
            onChange={(e) => onSelectAll(e.target.checked)}
            aria-label="Select all rows"
          />
        </div>
      ),
      dataIndex: "checked",
      key: "checked",
      width: 50,
      render: (_: any, row: any) => (
        <div className="inline-flex cursor-pointer">
          <Checkbox
            variant="flat"
            checked={selectedRows.has(row.id)}
            onChange={(e) => onSelectRow(row.id, e.target.checked)}
            aria-label={`Select row ${row.id}`}
          />
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
        <Avatar
          name="John Doe"
          src={employee.avatar}
        />
        <div className="ml-3 rtl:ml-0 rtl:mr-3">
          <Text className="mb-0.5 !text-sm font-medium">{employee.name}</Text>
          <Text
            as="p"
            className="text-xs text-gray-400"
          >
            {employee.userName}
          </Text>
        </div>
      </div>
    ),
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
        <button
          type="button"
          className="underline"
        >
          View
        </button>
      </div>
    ),
  },
  ];
};

export default function TableModern() {
  const [order, setOrder] = React.useState<string>("desc");
  const [column, setColumn] = React.useState<string>("");
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set());

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

  const handleSelectAll = React.useCallback((checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(data.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  }, [data]);

  const handleSelectRow = React.useCallback((id: string, checked: boolean) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  }, []);

  const columns: any = React.useMemo(
    () => getColumns(order, column, onHeaderClick, selectedRows, handleSelectAll, handleSelectRow, data.length),
    [order, column, onHeaderClick, selectedRows, handleSelectAll, handleSelectRow, data.length]
  );
  return (
    <div className="w-full overflow-x-auto">
      <Table
        columns={columns}
        data={data}
        variant="modern"
        className="text-sm [&_table]:mb-0 [&_table_h6]:!mb-0.5 [&_table_tbody_td]:!font-normal first:[&_table_th]:rounded-tl-none first:[&_table_th]:rounded-bl-none last:[&_table_th]:rounded-br-none last:[&_table_th]:rounded-tr-none"
      />
    </div>
  );
}

export function TableElegant() {
  const [order, setOrder] = React.useState<string>("desc");
  const [column, setColumn] = React.useState<string>("");
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set());

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

  const handleSelectAll = React.useCallback((checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(data.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  }, [data]);

  const handleSelectRow = React.useCallback((id: string, checked: boolean) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  }, []);

  const columns: any = React.useMemo(
    () => getColumns(order, column, onHeaderClick, selectedRows, handleSelectAll, handleSelectRow, data.length),
    [order, column, onHeaderClick, selectedRows, handleSelectAll, handleSelectRow, data.length]
  );
  return (
    <div className="w-full overflow-x-auto">
      <Table
        columns={columns}
        data={data}
        variant="elegant"
        className="text-sm [&_table]:mb-0 [&_table_th]:!bg-transparent [&_table_h6]:!mb-0.5 [&_table_tbody_td]:!font-normal first:[&_table_th]:rounded-tl-none first:[&_table_th]:rounded-bl-none last:[&_table_th]:rounded-br-none last:[&_table_th]:rounded-tr-none"
      />
    </div>
  );
}

export function TableMinimal() {
  const [order, setOrder] = React.useState<string>("desc");
  const [column, setColumn] = React.useState<string>("");
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set());

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

  const handleSelectAll = React.useCallback((checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(data.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  }, [data]);

  const handleSelectRow = React.useCallback((id: string, checked: boolean) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  }, []);

  const columns: any = React.useMemo(
    () => getColumns(order, column, onHeaderClick, selectedRows, handleSelectAll, handleSelectRow, data.length),
    [order, column, onHeaderClick, selectedRows, handleSelectAll, handleSelectRow, data.length]
  );
  return (
    <div className="w-full overflow-x-auto">
      <Table
        columns={columns}
        data={data}
        variant="minimal"
        className="text-sm [&_table]:mb-0 [&_table_h6]:!mb-0.5 [&_table_tbody_td]:!font-normal first:[&_table_th]:rounded-tl-none first:[&_table_th]:rounded-bl-none last:[&_table_th]:rounded-br-none last:[&_table_th]:rounded-tr-none"
      />
    </div>
  );
}
