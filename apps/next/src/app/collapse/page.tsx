'use client';

import { Button } from 'rizzui/button';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function CollapsePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/collapse" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Collapse Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Collapsible content sections</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~8KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Collapse' : 'Expand'} Content
          </Button>
          
          <div className={`mt-4 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                This is collapsible content. It smoothly animates in and out when toggled.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Collapse } from 'rizzui/collapse';

<Collapse isOpen={isOpen}>
  <div>Collapsible content</div>
</Collapse>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
