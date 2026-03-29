import { Badge } from 'rizzui/badge';
import { Table } from 'rizzui/table';
import { cn } from 'rizzui/cn';
import type { TableVariantProps } from 'rizzui/table';

export function TableDemo({
  variant = 'modern',
}: {
  variant: TableVariantProps;
}) {
  return (
    <div className="overflow-x-auto overflow-y-hidden w-full">
      <Table
        variant={variant}
        className={cn(
          '!shadow-none',
          variant === 'modern' && '!border-0',
          variant === 'minimal' && '!border-0',
          variant === 'elegant' && '!border-0',
          variant === 'retro' && '!border-0'
        )}
      >
        <Table.Header
          className={cn(
            '!bg-gray-100',
            variant === 'modern' && '!border-y-0',
            variant === 'minimal' && '!border-y-0',
            variant === 'elegant' &&
              '!bg-transparent dark:[&>tr>th]:!bg-transparent',
            variant === 'retro' &&
              '!bg-transparent dark:[&>tr>th]:!bg-transparent'
          )}
        >
          <Table.Row>
            <Table.Head>ID</Table.Head>
            <Table.Head>Employee</Table.Head>
            <Table.Head>Designation</Table.Head>
            <Table.Head>Status</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell className="!font-normal">#12345</Table.Cell>
            <Table.Cell className="font-semibold">John Doe</Table.Cell>
            <Table.Cell>FrontEnd Developer</Table.Cell>
            <Table.Cell>
              <Badge>Active</Badge>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="!font-normal">#12346</Table.Cell>
            <Table.Cell className="font-semibold">Jane Smith</Table.Cell>
            <Table.Cell>UI/UX Designer</Table.Cell>
            <Table.Cell>
              <Badge>Active</Badge>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell className="!font-normal">#12347</Table.Cell>
            <Table.Cell className="font-semibold">James Burns</Table.Cell>
            <Table.Cell>Project Manager</Table.Cell>
            <Table.Cell>
              <Badge>Active</Badge>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
