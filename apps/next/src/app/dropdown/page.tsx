'use client';

import { Dropdown } from 'rizzui/dropdown';
// import { Dropdown } from '@/components/dropdown';
import { Button } from 'rizzui/button';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function DropdownPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/dropdown" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Dropdown Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Dropdown menu for actions and navigation
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~14KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Basic Dropdown
          </h2>
          <Dropdown>
            <Dropdown.Trigger>
              <Button as="span">Open Menu</Button>
            </Dropdown.Trigger>
            <Dropdown.Menu className="text-sm">
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            With Icons
          </h2>
          <Dropdown>
            <Dropdown.Trigger>
              <Button variant="outline" as="span">
                Actions
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item>Duplicate</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Usage Example
          </h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
            {`import { Dropdown } from 'rizzui/dropdown';

<Dropdown>
  <Dropdown.Trigger>
    <Button as="span">Menu</Button>
  </Dropdown.Trigger>
  <Dropdown.Menu>
    <Dropdown.Item>Action 1</Dropdown.Item>
    <Dropdown.Item>Action 2</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
