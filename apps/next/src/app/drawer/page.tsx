'use client';

import { Drawer } from 'rizzui/drawer';
import { Button } from 'rizzui/button';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function DrawerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right');

  const openDrawer = (pos: 'left' | 'right' | 'top' | 'bottom') => {
    setPlacement(pos);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/drawer" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Drawer Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Side panel overlay</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~14KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Placements</h2>
          <div className="flex gap-4 flex-wrap">
            <Button onClick={() => openDrawer('left')}>Left</Button>
            <Button onClick={() => openDrawer('right')}>Right</Button>
            <Button onClick={() => openDrawer('top')}>Top</Button>
            <Button onClick={() => openDrawer('bottom')}>Bottom</Button>
          </div>

          <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} placement={placement}>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This drawer opens from the {placement} side.
              </p>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          </Drawer>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Drawer } from 'rizzui/drawer';

<Drawer 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  placement="right"
>
  <div className="p-6">Content</div>
</Drawer>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

