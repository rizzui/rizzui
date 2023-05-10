// table.stories.ts|tsx
import * as React from 'react';

import { ComponentMeta } from '@storybook/react';
import Table, { HeaderCell } from '../table';
import Checkbox from '../checkbox';
import Avatar from '../avatar';
import Text from '../text';
import Badge from '../badge';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Table>;

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'pending':
      return <Badge variant="flat">{status}</Badge>;
    case 'active':
      return (
        <Badge variant="flat" color="success">
          {status}
        </Badge>
      );
    case 'warning':
      return (
        <Badge variant="flat" color="warning">
          {status}
        </Badge>
      );
    case 'danger':
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
    title: '',
    dataIndex: 'checked',
    key: 'checked',
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
        ascending={order === 'asc' && column === 'id'}
      />
    ),
    onHeaderCell: () => onHeaderClick('id'),
    dataIndex: 'id',
    key: 'id',
    width: 50,
  },
  {
    title: <HeaderCell title="Employee" />,
    dataIndex: 'employee',
    key: 'employee',
    width: 250,
    render: (employee: any) => (
      <div className="flex items-center">
        <Avatar src={employee.avatar} name="John Doe" />
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
    dataIndex: 'designation',
    key: 'designation',
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
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    width: 200,
  },
  {
    title: <HeaderCell title="Email" />,
    dataIndex: 'email',
    key: 'email',
    width: 200,
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (value: string) => getStatusBadge(value),
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
    width: 120,
    render: (_: string, row: any) => (
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="text-primary underline"
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

const initialData = [
  {
    id: '1',
    employee: {
      name: 'Jon Brown',
      userName: '@fredchaparro',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    designation: {
      role: 'Front-End Developer',
      company: 'REDQ',
    },
    phoneNumber: '+880136987584',
    email: 'jhondoe@aegonui.com',
    status: 'Active',
  },
  {
    id: '2',
    employee: {
      name: 'Jon Brown',
      userName: '@fredchaparro',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    designation: {
      role: 'Front-End Developer',
      company: 'REDQ',
    },
    phoneNumber: '+880136987584',
    email: 'jhondoe@aegonui.com',
    status: 'Active',
  },
  {
    id: '3',
    employee: {
      name: 'Jon Brown',
      userName: '@fredchaparro',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    designation: {
      role: 'Front-End Developer',
      company: 'REDQ',
    },
    phoneNumber: '+880136987584',
    email: 'jhondoe@aegonui.com',
    status: 'Active',
  },
  {
    id: '4',
    employee: {
      name: 'Jon Brown',
      userName: '@fredchaparro',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    designation: {
      role: 'Front-End Developer',
      company: 'REDQ',
    },
    phoneNumber: '+880136987584',
    email: 'jhondoe@aegonui.com',
    status: 'Active',
  },
  {
    id: '5',
    employee: {
      name: 'Jon Brown',
      userName: '@fredchaparro',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    designation: {
      role: 'Front-End Developer',
      company: 'REDQ',
    },
    phoneNumber: '+880136987584',
    email: 'jhondoe@aegonui.com',
    status: 'Active',
  },
  {
    id: '6',
    employee: {
      name: 'Jon Brown',
      userName: '@fredchaparro',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    designation: {
      role: 'Front-End Developer',
      company: 'REDQ',
    },
    phoneNumber: '+880136987584',
    email: 'jhondoe@aegonui.com',
    status: 'Active',
  },
];

export const Default = () => {
  const [order, setOrder] = React.useState<string>('desc');
  const [column, setColumn] = React.useState<string>('');
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const onHeaderClick = (value: string) => ({
    onClick: () => {
      setColumn(value);
      setOrder(order === 'desc' ? 'asc' : 'desc');
      if (order === 'desc') {
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
  return <Table columns={columns} data={data} className="text-sm" />;
};

export const Modern = () => {
  const [order, setOrder] = React.useState<string>('desc');
  const [column, setColumn] = React.useState<string>('');
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const onHeaderClick = (value: string) => ({
    onClick: () => {
      setColumn(value);
      setOrder(order === 'desc' ? 'asc' : 'desc');
      if (order === 'desc') {
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
    <Table columns={columns} data={data} variant="modern" className="text-sm" />
  );
};

export const Elegant = () => {
  const [order, setOrder] = React.useState<string>('desc');
  const [column, setColumn] = React.useState<string>('');
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const onHeaderClick = (value: string) => ({
    onClick: () => {
      setColumn(value);
      setOrder(order === 'desc' ? 'asc' : 'desc');
      if (order === 'desc') {
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
      className="text-sm"
    />
  );
};

export const Minimal = () => {
  const [order, setOrder] = React.useState<string>('desc');
  const [column, setColumn] = React.useState<string>('');
  const [data, setData] = React.useState<typeof initialData>(initialData);
  const onHeaderClick = (value: string) => ({
    onClick: () => {
      setColumn(value);
      setOrder(order === 'desc' ? 'asc' : 'desc');
      if (order === 'desc') {
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
      className="text-sm"
    />
  );
};
