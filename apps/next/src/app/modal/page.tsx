'use client';

import { Modal } from 'rizzui/modal';
import { Button } from 'rizzui/button';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [sizeModal, setSizeModal] = useState({ isOpen: false, size: 'md' as any });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/modal" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Modal Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Dialog overlay for focused content</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~14KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Modal</h2>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Modal Title</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This is a modal dialog. Click outside or press ESC to close.
              </p>
              <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button onClick={() => setIsOpen(false)}>Confirm</Button>
              </div>
            </div>
          </Modal>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="flex gap-3 flex-wrap">
            {['sm', 'md', 'lg', 'xl', 'full'].map((size) => (
              <Button key={size} variant="outline" onClick={() => setSizeModal({ isOpen: true, size })}>
                {size.toUpperCase()}
              </Button>
            ))}
          </div>
          
          <Modal 
            isOpen={sizeModal.isOpen} 
            onClose={() => setSizeModal({ ...sizeModal, isOpen: false })}
            size={sizeModal.size}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{sizeModal.size.toUpperCase()} Modal</h3>
              <p className="text-gray-600 dark:text-gray-300">This is a {sizeModal.size} sized modal.</p>
            </div>
          </Modal>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Modal } from 'rizzui/modal';

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <div className="p-6">
    <h3>Modal Content</h3>
  </div>
</Modal>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

