'use client';

import { Radio } from 'rizzui/radio';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function RadioPage() {
  const [plan, setPlan] = useState('basic');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/radio" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Radio Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Radio buttons for single selections</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~8KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Variants</h2>
          <div className="space-y-4">
            <Radio variant="outline" label="Outline variant" name="variant" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="space-y-4">
            <Radio size="sm" label="Small" name="size" />
            <Radio size="md" label="Medium" name="size" />
            <Radio size="lg" label="Large" name="size" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Radio Group Example</h2>
          <div className="space-y-3">
            <Radio 
              label="Basic Plan - $9/month" 
              value="basic"
              name="plan"
              checked={plan === 'basic'}
              onChange={() => setPlan('basic')}
            />
            <Radio 
              label="Pro Plan - $29/month" 
              value="pro"
              name="plan"
              checked={plan === 'pro'}
              onChange={() => setPlan('pro')}
            />
            <Radio 
              label="Enterprise - $99/month" 
              value="enterprise"
              name="plan"
              checked={plan === 'enterprise'}
              onChange={() => setPlan('enterprise')}
            />
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Selected: <strong>{plan}</strong>
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Radio } from 'rizzui/radio';

<Radio 
  label="Option 1"
  value="option1"
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

