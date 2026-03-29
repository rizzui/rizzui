'use client';

import { Announcement } from 'rizzui/announcement';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function AnnouncementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/announcement" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Announcement Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Banner announcements and notices</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~8KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
          <Announcement>
            🎉 New feature launched! Check out our latest updates.
          </Announcement>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Announcement } from 'rizzui/announcement';

<Announcement>
  Important announcement message
</Announcement>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
