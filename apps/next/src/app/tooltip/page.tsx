'use client';

import { Tooltip } from 'rizzui/tooltip';
import { Button } from 'rizzui/button';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function TooltipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/tooltip" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Tooltip Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hover tooltip for additional information
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~12KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Placements
          </h2>
          <div className="flex flex-wrap gap-4 justify-center p-5">
            <Tooltip content="Top tooltip" placement="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" placement="bottom">
              <Button>Bottom</Button>
            </Tooltip>
          </div>
          <div className="flex flex-wrap gap-4 justify-center p-5">
            <Tooltip content="Left tooltip" placement="left">
              <Button>Left</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" placement="right">
              <Button>Right</Button>
            </Tooltip>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Colors
          </h2>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Default tooltip">
              <Button variant="outline">Primary</Button>
            </Tooltip>
            <Tooltip content="Secondary info" color="secondary">
              <Button variant="outline">Secondary</Button>
            </Tooltip>
            <Tooltip content="Invert info" color="invert">
              <Button variant="outline">Invert</Button>
            </Tooltip>
            <Tooltip content="Info info" color="info">
              <Button variant="outline">Info</Button>
            </Tooltip>
            <Tooltip content="Success info" color="success">
              <Button variant="outline">Success</Button>
            </Tooltip>
            <Tooltip content="Warning info" color="warning">
              <Button variant="outline">Warning</Button>
            </Tooltip>
            <Tooltip content="Danger info" color="danger">
              <Button variant="outline">Danger</Button>
            </Tooltip>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Usage Example
          </h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
            {`import { Tooltip } from 'rizzui/tooltip';

<Tooltip content="Helpful information">
  <Button>Hover me</Button>
</Tooltip>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
