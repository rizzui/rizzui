'use client';

import { Select } from 'rizzui/select';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

const categories = [
  'Technology',
  'Design',
  'Marketing',
  'Sales',
  'Support',
  'Engineering',
];

export default function SelectPage() {
  const [category, setCategory] = useState<string>('Technology');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/select" />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Select Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Dropdown selection with variants and options
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~16KB
          </div>
        </div>

        {/* Basic Usage */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Basic Usage
          </h2>
          <Select
            label="Select Category"
            options={categories.map((category) => ({
              label: category,
              value: category,
            }))}
            value={category}
            onChange={(value) => setCategory(value as string)}
            getOptionValue={(option) => option.value}
            placeholder="Choose category"
          />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Selected: <strong>{category}</strong>
          </p>
        </section>

        {/* Variants */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Outline"
              variant="outline"
              options={categories.map((category) => ({
                label: category,
                value: category,
              }))}
              getOptionValue={(option) => option.value}
              placeholder="Outline"
            />
            <Select
              label="Text"
              variant="text"
              options={categories.map((category) => ({
                label: category,
                value: category,
              }))}
              getOptionValue={(option) => option.value}
              placeholder="Text"
            />
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Sizes
          </h2>
          <div className="space-y-4">
            <Select
              size="sm"
              label="Small"
              options={categories.map((category) => ({
                label: category,
                value: category,
              }))}
              placeholder="Small"
            />
            <Select
              size="md"
              label="Medium"
              options={categories.map((category) => ({
                label: category,
                value: category,
              }))}
              placeholder="Medium"
            />
            <Select
              size="lg"
              label="Large"
              options={categories.map((category) => ({
                label: category,
                value: category,
              }))}
              placeholder="Large"
            />
          </div>
        </section>

        {/* States */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            States
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                Disabled
              </h3>
              <Select
                label="Disabled Select"
                options={categories.map((category) => ({
                  label: category,
                  value: category,
                }))}
                disabled
                placeholder="Cannot select"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                With Helper Text
              </h3>
              <Select
                label="Preferred Category"
                options={categories.map((category) => ({
                  label: category,
                  value: category,
                }))}
                helperText="Choose your primary area of interest"
                placeholder="Select category"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                Error State
              </h3>
              <Select
                label="Required Field"
                options={categories.map((category) => ({
                  label: category,
                  value: category,
                }))}
                error="This field is required"
                placeholder="Select one"
              />
            </div>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Select Props & API
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="p-3 text-left text-gray-900 dark:text-white">
                    Prop
                  </th>
                  <th className="p-3 text-left text-gray-900 dark:text-white">
                    Type
                  </th>
                  <th className="p-3 text-left text-gray-900 dark:text-white">
                    Default
                  </th>
                  <th className="p-3 text-left text-gray-900 dark:text-white">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    options
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    T[] | string[]
                  </td>
                  <td className="p-3 font-mono text-xs">required</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Options array
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    value
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    T | string
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Selected value
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    onChange
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    (value) =&gt; void
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Change handler
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    variant
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    'outline' | 'flat' | 'text'
                  </td>
                  <td className="p-3 font-mono text-xs">'outline'</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Visual style
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    searchable
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    boolean
                  </td>
                  <td className="p-3 font-mono text-xs">false</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Enable search
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    clearable
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    boolean
                  </td>
                  <td className="p-3 font-mono text-xs">false</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Show clear button
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Usage Examples
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Basic with string array:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`import { Select } from 'rizzui/select';

const options = ['Option 1', 'Option 2', 'Option 3'];

<Select 
  label="Choose"
  options={options}
  value={value}
  onChange={setValue}
/>`}
                </pre>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  With searchable:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`<Select 
  options={options}
  value={value}
  onChange={setValue}
  searchable
  clearable
  onClear={() => setValue('')}
/>`}
                </pre>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  ⚠️ Tree-shaking import:
                </p>
                <pre className="bg-green-900 text-green-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`// ✅ Good - ~16KB
import { Select } from 'rizzui/select';

// ❌ Bad - 168KB
import { Select } from 'rizzui';`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
