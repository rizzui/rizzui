'use client';

import { ShowcaseNav } from '@/components/showcase-nav';
import { useState } from 'react';
import { MultiSelect } from 'rizzui/multi-select';

const skills = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];
export default function MultiSelectPage() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/multi-select" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            MultiSelect Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Multiple selection dropdown
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~18KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Basic Usage
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            MultiSelect allows selecting multiple options from a dropdown.
          </p>

          <MultiSelect
            label="Skills"
            options={skills}
            value={selected}
            onChange={(value) => setSelected(value as string[])}
            getOptionValueKey="value"
          />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Selected:{' '}
            <strong>
              {selected
                .map((skill) => skills.find((s) => s.value === skill)?.label)
                .join(', ')}
            </strong>
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Usage Example
          </h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
            {`import { MultiSelect } from 'rizzui/multi-select';

<MultiSelect
  label="Skills"
  options={skills}
  value={selected}
  onChange={setSelected}
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
