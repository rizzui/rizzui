'use client';

import { CheckboxGroup } from 'rizzui/checkbox-group';
import { Checkbox } from 'rizzui/checkbox';
import { ShowcaseNav } from '@/components/showcase-nav';
import { useState } from 'react';

export default function CheckboxGroupPage() {
  const [values, setValues] = useState<string[]>(['opt1', 'opt2', 'opt3']);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/checkbox-group" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            CheckboxGroup Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Grouped checkbox selections
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~10KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Description
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            CheckboxGroup manages multiple checkbox selections with a single
            state.
          </p>

          <CheckboxGroup
            values={values}
            setValues={setValues}
            className="flex flex-row gap-4"
          >
            <Checkbox label="Option 1" value="opt1" />
            <Checkbox label="Option 2" value="opt2" />
            <Checkbox label="Option 3" value="opt3" />
            <Checkbox label="Option 4" value="opt4" />
          </CheckboxGroup>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Usage Example
          </h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
            {`import { CheckboxGroup, Checkbox } from 'rizzui/checkbox-group';

<CheckboxGroup values={selected} setValues={setSelected}>
  <Checkbox label="Option 1" value="opt1" />
  <Checkbox label="Option 2" value="opt2" />
</CheckboxGroup>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
