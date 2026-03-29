'use client';

import { AdvancedRadio } from 'rizzui/advanced-radio';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function AdvancedRadioPage() {
  const [selected, setSelected] = useState('monthly');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/advanced-radio" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">AdvancedRadio Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Card-style radio buttons</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~10KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Billing Period</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AdvancedRadio
              name="billing"
              value="monthly"
              checked={selected === 'monthly'}
              onChange={() => setSelected('monthly')}
            >
              <h4 className="font-semibold">Monthly Billing</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pay monthly, cancel anytime</p>
            </AdvancedRadio>
            <AdvancedRadio
              name="billing"
              value="yearly"
              checked={selected === 'yearly'}
              onChange={() => setSelected('yearly')}
            >
              <h4 className="font-semibold">Yearly Billing</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Save 20% with annual plan</p>
            </AdvancedRadio>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { AdvancedRadio } from 'rizzui/advanced-radio';

<AdvancedRadio
  value="option"
  checked={selected === 'option'}
  onChange={() => setSelected('option')}
>
  <h4>Option Title</h4>
</AdvancedRadio>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
