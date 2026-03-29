'use client';

import Link from 'next/link';
import { Badge } from 'rizzui/badge';

const components = [
  {
    category: 'Buttons & Actions',
    icon: '🎯',
    items: [
      { name: 'Button', path: '/', description: 'Primary action button', status: 'ready' },
      { name: 'ActionIcon', path: '/action-icon', description: 'Icon-only button', status: 'ready' },
    ],
  },
  {
    category: 'Form Inputs',
    icon: '📝',
    items: [
      { name: 'Input', path: '/input', description: 'Text input field', status: 'ready' },
      { name: 'Textarea', path: '/textarea', description: 'Multi-line text input', status: 'ready' },
      { name: 'Select', path: '/select', description: 'Dropdown selection', status: 'ready' },
      { name: 'Multi-Select', path: '/multi-select', description: 'Multiple selection dropdown', status: 'ready' },
      { name: 'Password', path: '/password', description: 'Password input with toggle', status: 'ready' },
      { name: 'Pin Code', path: '/pin-code', description: 'PIN/OTP input', status: 'ready' },
      { name: 'Upload', path: '/upload', description: 'File upload', status: 'ready' },
    ],
  },
  {
    category: 'Form Controls',
    icon: '☑️',
    items: [
      { name: 'Checkbox', path: '/checkbox', description: 'Checkbox input', status: 'ready' },
      { name: 'Radio', path: '/radio', description: 'Radio button', status: 'ready' },
      { name: 'Switch', path: '/switch', description: 'Toggle switch', status: 'ready' },
      { name: 'Advanced Checkbox', path: '/advanced-checkbox', description: 'Card checkbox', status: 'ready' },
      { name: 'Advanced Radio', path: '/advanced-radio', description: 'Card radio', status: 'ready' },
      { name: 'Checkbox Group', path: '/checkbox-group', description: 'Grouped checkboxes', status: 'ready' },
      { name: 'Radio Group', path: '/radio-group', description: 'Grouped radios', status: 'ready' },
    ],
  },
  {
    category: 'Data Display',
    icon: '📊',
    items: [
      { name: 'Badge', path: '/badge', description: 'Status indicators', status: 'ready' },
      { name: 'Avatar', path: '/avatar', description: 'User avatar', status: 'ready' },
      { name: 'Typography', path: '/typography', description: 'Text & Title components', status: 'ready' },
      { name: 'Table', path: '/table', description: 'Data table', status: 'ready' },
      { name: 'Accordion', path: '/accordion', description: 'Collapsible content', status: 'ready' },
      { name: 'Collapse', path: '/collapse', description: 'Collapse animation', status: 'ready' },
    ],
  },
  {
    category: 'Feedback',
    icon: '💬',
    items: [
      { name: 'Alert', path: '/alert', description: 'Alert messages', status: 'ready' },
      { name: 'Announcement', path: '/announcement', description: 'Announcement banner', status: 'ready' },
      { name: 'Loader', path: '/loader', description: 'Loading indicators', status: 'ready' },
      { name: 'Progressbar', path: '/progressbar', description: 'Progress indicator', status: 'ready' },
      { name: 'Radial Progressbar', path: '/radial-progressbar', description: 'Circular progress', status: 'ready' },
      { name: 'Empty', path: '/empty', description: 'Empty state', status: 'ready' },
    ],
  },
  {
    category: 'Overlays',
    icon: '🗂️',
    items: [
      { name: 'Modal', path: '/modal', description: 'Dialog overlay', status: 'ready' },
      { name: 'Drawer', path: '/drawer', description: 'Side panel', status: 'ready' },
      { name: 'Tooltip', path: '/tooltip', description: 'Hover tooltip', status: 'ready' },
      { name: 'Popover', path: '/popover', description: 'Popover overlay', status: 'ready' },
      { name: 'Dropdown', path: '/dropdown', description: 'Dropdown menu', status: 'ready' },
    ],
  },
  {
    category: 'Navigation',
    icon: '🧭',
    items: [
      { name: 'Tabs', path: '/tabs', description: 'Tab navigation', status: 'ready' },
      { name: 'Stepper', path: '/stepper', description: 'Step indicator', status: 'ready' },
    ],
  },
  {
    category: 'Layout',
    icon: '📐',
    items: [
      { name: 'Box', path: '/box', description: 'Container component', status: 'ready' },
      { name: 'Flex', path: '/flex', description: 'Flexbox layout', status: 'ready' },
      { name: 'Grid', path: '/grid', description: 'Grid layout', status: 'ready' },
    ],
  },
];

export default function ComponentsIndexPage() {
  const readyCount = components.reduce(
    (sum, cat) => sum + cat.items.filter((i) => i.status === 'ready').length,
    0
  );
  const totalCount = components.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            RizzUI Components
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore {totalCount} components with comprehensive examples
          </p>

          {/* Progress */}
          <div className="flex justify-center gap-4 items-center">
            <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
              ✅ {readyCount} components ready
            </div>
            <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg text-sm">
              🚀 {totalCount - readyCount} coming soon
            </div>
          </div>

          {/* Tree-shaking reminder */}
          <div className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-lg text-sm">
            💡 All components support tree-shakeable imports (~8KB each)
          </div>
        </div>

        {/* Component Grid */}
        <div className="space-y-8">
          {components.map((category) => (
            <section key={category.category} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h2>
                <Badge variant="flat" size="sm" color="primary">
                  {category.items.length}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.status === 'ready' ? item.path : '#'}
                    className={`
                      group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm
                      border border-gray-200 dark:border-gray-700
                      transition-all duration-200
                      ${
                        item.status === 'ready'
                          ? 'hover:shadow-lg hover:border-primary hover:scale-[1.02] cursor-pointer'
                          : 'opacity-60 cursor-not-allowed'
                      }
                    `}
                  >
                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      {item.status === 'ready' ? (
                        <Badge variant="flat" color="success" size="sm">
                          Ready
                        </Badge>
                      ) : (
                        <Badge variant="flat" color="info" size="sm">
                          Soon
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>

                      {item.status === 'ready' && (
                        <div className="pt-2">
                          <span className="text-xs text-primary font-medium group-hover:underline">
                            View Examples →
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Info */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            📦 Tree-Shakeable Imports
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            All RizzUI components support individual imports for optimal bundle size:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-xs text-green-600 dark:text-green-400 font-semibold mb-2">
                ✅ GOOD - Tree-shakeable (~8KB)
              </p>
              <pre className="text-xs bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 p-3 rounded overflow-x-auto">
{`import { Button } from 'rizzui/button';
import { Input } from 'rizzui/input';
import { Badge } from 'rizzui/badge';`}
              </pre>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <p className="text-xs text-red-600 dark:text-red-400 font-semibold mb-2">
                ❌ BAD - Full library (168KB)
              </p>
              <pre className="text-xs bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 p-3 rounded overflow-x-auto">
{`import { Button, Input, Badge } from 'rizzui';`}
              </pre>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Savings:</strong> Using tree-shakeable imports can reduce your bundle size by up to <strong>95%</strong> per component! 🎉
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl p-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ready to explore?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Start with the most popular components
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Button
              </Link>
              <Link
                href="/input"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              >
                Input
              </Link>
              <Link
                href="/select"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              >
                Select
              </Link>
              <Link
                href="/alert"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              >
                Alert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

