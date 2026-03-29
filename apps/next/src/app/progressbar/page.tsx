'use client';

import { Progressbar } from 'rizzui/progressbar';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function ProgressbarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/progressbar" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Progressbar Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Progress indicators for loading states</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~8KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Progress Values</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm mb-2">25% Complete</p>
              <Progressbar value={25} />
            </div>
            <div>
              <p className="text-sm mb-2">50% Complete</p>
              <Progressbar value={50} />
            </div>
            <div>
              <p className="text-sm mb-2">75% Complete</p>
              <Progressbar value={75} />
            </div>
            <div>
              <p className="text-sm mb-2">100% Complete</p>
              <Progressbar value={100} />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Colors</h2>
          <div className="space-y-4">
            <Progressbar value={60} color="primary" label="Primary" />
            <Progressbar value={60} color="secondary" label="Secondary" />
            <Progressbar value={60} color="success" label="Success" />
            <Progressbar value={60} color="warning" label="Warning" />
            <Progressbar value={60} color="danger" label="Danger" />
            <Progressbar value={60} color="info" label="Info" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="space-y-4">
            <Progressbar value={70} size="sm" label="Small" />
            <Progressbar value={70} size="md" label="Medium" />
            <Progressbar value={70} size="lg" label="Large" />
            <Progressbar value={70} size="xl" label="Extra Large" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Progressbar } from 'rizzui/progressbar';

<Progressbar 
  value={75} 
  color="primary"
  size="md"
  label="Uploading..."
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

