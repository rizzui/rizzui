'use client';

import { Box } from 'rizzui/box';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function BoxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/box" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Box Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Layout container component</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~4KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
          <Box className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p>This is a Box component - a simple layout container.</p>
          </Box>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Box } from 'rizzui/box';

<Box className="p-6">
  Content goes here
</Box>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
