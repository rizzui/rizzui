'use client';

import { Accordion } from 'rizzui/accordion';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function AccordionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/accordion" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Accordion Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Collapsible content sections</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~10KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Accordion</h2>
          <Accordion>
            <Accordion.Header>What is RizzUI?</Accordion.Header>
            <Accordion.Body>
              RizzUI is a modern and minimal React UI library built with TailwindCSS. 
              It provides beautiful, accessible components for your applications.
            </Accordion.Body>
          </Accordion>

          <Accordion className="mt-4">
            <Accordion.Header>How do I install it?</Accordion.Header>
            <Accordion.Body>
              Run: npm install rizzui @headlessui/react @floating-ui/react
            </Accordion.Body>
          </Accordion>

          <Accordion className="mt-4">
            <Accordion.Header>Is it free?</Accordion.Header>
            <Accordion.Body>
              Yes! RizzUI is open source and free to use under the MIT license.
            </Accordion.Body>
          </Accordion>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Accordion } from 'rizzui/accordion';

<Accordion>
  <Accordion.Header>Question?</Accordion.Header>
  <Accordion.Body>
    Answer here...
  </Accordion.Body>
</Accordion>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

