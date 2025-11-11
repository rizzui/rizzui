'use client';

import { Empty } from 'rizzui/empty';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function EmptyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/empty" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Empty Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Empty state placeholder</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~6KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-12">
            <Empty text="No data found" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Alignments</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
              <Empty text="Start aligned" alignment="start" />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
              <Empty text="Center aligned" alignment="center" />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
              <Empty text="End aligned" alignment="end" />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">With Custom Content</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-12">
            <Empty text="No products available">
              <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                Add Product
              </button>
            </Empty>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Empty } from 'rizzui/empty';

<Empty text="No items found" />`}
          </pre>
        </section>
      </div>
    </div>
  );
}

