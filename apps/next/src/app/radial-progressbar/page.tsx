'use client';

import { RadialProgressBar } from 'rizzui/radial-progressbar';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function RadialProgressbarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/radial-progressbar" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">RadialProgressBar Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Circular progress indicators</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~8KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Progress Values</h2>
          <div className="flex gap-8 flex-wrap justify-center">
            <RadialProgressBar value={25} />
            <RadialProgressBar value={50} />
            <RadialProgressBar value={75} />
            <RadialProgressBar value={100} />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="flex gap-8 flex-wrap justify-center items-end">
            <RadialProgressBar value={70} size={80} />
            <RadialProgressBar value={70} size={120} />
            <RadialProgressBar value={70} size={160} />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { RadialProgressBar } from 'rizzui/radial-progressbar';

<RadialProgressBar value={75} size={120} />`}
          </pre>
        </section>
      </div>
    </div>
  );
}
