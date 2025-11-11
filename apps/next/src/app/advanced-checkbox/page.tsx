'use client';

import { AdvancedCheckbox } from 'rizzui/advanced-checkbox';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function AdvancedCheckboxPage() {
  const [selected, setSelected] = useState('basic');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/advanced-checkbox" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">AdvancedCheckbox Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Card-style checkbox for selections</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~10KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AdvancedCheckbox
              name="plan"
              value="basic"
              checked={selected === 'basic'}
              onChange={() => setSelected('basic')}
            >
              <h4 className="font-semibold">Basic Plan</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">$9/month</p>
            </AdvancedCheckbox>
            <AdvancedCheckbox
              name="plan"
              value="pro"
              checked={selected === 'pro'}
              onChange={() => setSelected('pro')}
            >
              <h4 className="font-semibold">Pro Plan</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">$29/month</p>
            </AdvancedCheckbox>
            <AdvancedCheckbox
              name="plan"
              value="enterprise"
              checked={selected === 'enterprise'}
              onChange={() => setSelected('enterprise')}
            >
              <h4 className="font-semibold">Enterprise</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">$99/month</p>
            </AdvancedCheckbox>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { AdvancedCheckbox } from 'rizzui/advanced-checkbox';

<AdvancedCheckbox
  value="option1"
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
>
  <h4>Option 1</h4>
  <p>Description</p>
</AdvancedCheckbox>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
