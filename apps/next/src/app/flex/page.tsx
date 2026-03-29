'use client';

import { Flex } from 'rizzui/flex';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function FlexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/flex" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Flex Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Flexbox layout component</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~6KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Horizontal</h2>
          <Flex gap={4}>
            <div className="p-4 bg-primary text-primary-foreground rounded">Item 1</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">Item 2</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">Item 3</div>
          </Flex>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Vertical</h2>
          <Flex direction="column" gap={4}>
            <div className="p-4 bg-secondary text-secondary-foreground rounded">Item 1</div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded">Item 2</div>
          </Flex>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Flex } from 'rizzui/flex';

<Flex gap={4} justify="between">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
