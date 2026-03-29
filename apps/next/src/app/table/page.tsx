'use client';

import { ShowcaseNav } from '@/components/showcase-nav';

export default function TablePage() {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/table" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Table Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Data table for structured content</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~8KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="p-3 text-left text-gray-900 dark:text-white">Name</th>
                  <th className="p-3 text-left text-gray-900 dark:text-white">Email</th>
                  <th className="p-3 text-left text-gray-900 dark:text-white">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((row) => (
                  <tr key={row.id}>
                    <td className="p-3 text-gray-700 dark:text-gray-300">{row.name}</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">{row.email}</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Table } from 'rizzui/table';

<Table>
  <Table.Head>
    <Table.Row>
      <Table.HeadCell>Name</Table.HeadCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    {data.map(row => (
      <Table.Row key={row.id}>
        <Table.Cell>{row.name}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
