'use client';

import { Popover } from 'rizzui/popover';
import { Button } from 'rizzui/button';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function PopoverPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/popover" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Popover Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Popover overlay for contextual information</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~16KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Popover</h2>
          <div className="flex justify-center p-12">
            <Popover>
              <Popover.Trigger>
                <Button>Click for popover</Button>
              </Popover.Trigger>
              <Popover.Content>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">Popover Title</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    This is the popover content.
                  </p>
                </div>
              </Popover.Content>
            </Popover>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Placements</h2>
          <div className="flex gap-4 flex-wrap justify-center p-12">
            <Popover placement="top">
              <Popover.Trigger>
                <Button variant="outline">Top</Button>
              </Popover.Trigger>
              <Popover.Content>
                <div className="p-3 text-sm">Top popover</div>
              </Popover.Content>
            </Popover>

            <Popover placement="bottom">
              <Popover.Trigger>
                <Button variant="outline">Bottom</Button>
              </Popover.Trigger>
              <Popover.Content>
                <div className="p-3 text-sm">Bottom popover</div>
              </Popover.Content>
            </Popover>

            <Popover placement="left">
              <Popover.Trigger>
                <Button variant="outline">Left</Button>
              </Popover.Trigger>
              <Popover.Content>
                <div className="p-3 text-sm">Left popover</div>
              </Popover.Content>
            </Popover>

            <Popover placement="right">
              <Popover.Trigger>
                <Button variant="outline">Right</Button>
              </Popover.Trigger>
              <Popover.Content>
                <div className="p-3 text-sm">Right popover</div>
              </Popover.Content>
            </Popover>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Popover } from 'rizzui/popover';

<Popover>
  <Popover.Trigger>
    <Button>Open</Button>
  </Popover.Trigger>
  <Popover.Content>
    <div className="p-4">Content</div>
  </Popover.Content>
</Popover>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

