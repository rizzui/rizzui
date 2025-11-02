'use client';

import { Textarea } from 'rizzui/textarea';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function TextareaPage() {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/textarea" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Textarea Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Multi-line text input for longer content</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~12KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Variants</h2>
          <div className="space-y-4">
            <Textarea variant="outline" label="Outline" placeholder="Outline variant..." rows={3} />
            <Textarea variant="flat" label="Flat" placeholder="Flat variant..." rows={3} />
            <Textarea variant="text" label="Text" placeholder="Text variant..." rows={3} />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="space-y-4">
            <Textarea size="sm" label="Small" placeholder="Small textarea..." rows={2} />
            <Textarea size="md" label="Medium" placeholder="Medium textarea..." rows={3} />
            <Textarea size="lg" label="Large" placeholder="Large textarea..." rows={4} />
            <Textarea size="xl" label="Extra Large" placeholder="XL textarea..." rows={5} />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">With Character Count</h2>
          <Textarea
            label="Message"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={200}
            rows={4}
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {message.length}/200 characters
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">States</h2>
          <div className="space-y-4">
            <Textarea label="Disabled" placeholder="Cannot edit..." disabled rows={3} />
            <Textarea label="Error" placeholder="Invalid input..." error="This field has an error" rows={3} />
            <Textarea label="With Helper" placeholder="Type here..." helperText="Maximum 500 characters" rows={3} />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Textarea } from 'rizzui/textarea';

<Textarea
  label="Description"
  placeholder="Enter description..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
  rows={5}
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

