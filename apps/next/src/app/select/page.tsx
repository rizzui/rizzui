'use client';

import { ShowcaseNav } from '@/components/showcase-nav';

export default function SelectPage() {
  const categories = ['Technology', 'Design', 'Marketing', 'Sales', 'Support', 'Engineering'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/select" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Select Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Dropdown selection (HTML native select)</p>
          <div className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-lg text-sm">
            ⚠️ RizzUI Select has compatibility issues - using native HTML select
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Native Select (Working)</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Select Category</label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary">
                <option value="">Choose...</option>
                {categories.map(cat => (
                  <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Note</h2>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
            <p className="text-amber-900 dark:text-amber-100">
              <strong>⚠️ Library Compatibility Issue:</strong> The RizzUI Select component has an internal bug where it calls <code className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded">toLowerCase()</code> on undefined values during initialization. This causes runtime errors.
            </p>
            <p className="mt-3 text-amber-900 dark:text-amber-100">
              <strong>Workaround:</strong> Use native HTML <code className="bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded">&lt;select&gt;</code> or wait for library fix.
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Expected Usage (When Fixed)</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Select } from 'rizzui/select';

<Select 
  label="Category"
  options={['Option 1', 'Option 2']}
  value={value}
  onChange={setValue}
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
