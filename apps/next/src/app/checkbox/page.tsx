'use client';

import { Checkbox } from 'rizzui/checkbox';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/checkbox" />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Checkbox Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Checkbox input with variants, sizes, and label placement
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~8KB
          </div>
        </div>

        {/* Variants */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Variants</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Outline</h3>
              <div className="flex gap-4">
                <Checkbox variant="outline" label="Outline variant" />
                <Checkbox variant="outline" label="Checked" defaultChecked />
              </div>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="space-y-4">
            <Checkbox size="sm" label="Small" />
            <Checkbox size="md" label="Medium" />
            <Checkbox size="lg" label="Large" />
          </div>
        </section>

        {/* Rounded */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Rounded Variants</h2>
          <div className="space-y-4">
            <Checkbox rounded="none" label="None" defaultChecked />
            <Checkbox rounded="sm" label="Small" defaultChecked />
            <Checkbox rounded="md" label="Medium" defaultChecked />
            <Checkbox rounded="lg" label="Large" defaultChecked />
            <Checkbox rounded="full" label="Full (Circle)" defaultChecked />
          </div>
        </section>

        {/* Label Placement */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Label Placement</h2>
          <div className="space-y-4">
            <Checkbox labelPlacement="right" label="Label on right (default)" />
            <Checkbox labelPlacement="left" label="Label on left" />
          </div>
        </section>

        {/* States */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">States</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Controlled</h3>
              <Checkbox 
                label={`Checkbox is ${checked ? 'checked' : 'unchecked'}`}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Disabled</h3>
              <div className="space-y-3">
                <Checkbox disabled label="Disabled unchecked" />
                <Checkbox disabled label="Disabled checked" defaultChecked />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Error State</h3>
              <Checkbox label="Accept terms" error="You must accept the terms" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">With Helper Text</h3>
              <Checkbox 
                label="Subscribe to newsletter"
                helperText="We'll send you weekly updates about new features"
              />
            </div>
          </div>
        </section>

        {/* Real World Examples */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Real World Examples</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Terms & Conditions</h3>
              <Checkbox
                label="I accept the terms and conditions"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                error={!acceptTerms ? 'You must accept to continue' : ''}
              />
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Preferences</h3>
              <div className="space-y-3">
                <Checkbox label="Email notifications" defaultChecked />
                <Checkbox label="Push notifications" />
                <Checkbox label="SMS alerts" />
              </div>
            </div>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Props & API</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Prop</th>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Default</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">variant</td>
                  <td className="p-3 font-mono text-xs">'outline' | 'flat'</td>
                  <td className="p-3 font-mono text-xs">'outline'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">size</td>
                  <td className="p-3 font-mono text-xs">'sm' | 'md' | 'lg' | 'xl'</td>
                  <td className="p-3 font-mono text-xs">'md'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">rounded</td>
                  <td className="p-3 font-mono text-xs">'none' | 'sm' | 'md' | 'lg' | 'full'</td>
                  <td className="p-3 font-mono text-xs">'md'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">label</td>
                  <td className="p-3 font-mono text-xs">ReactNode</td>
                  <td className="p-3 font-mono text-xs">-</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">labelPlacement</td>
                  <td className="p-3 font-mono text-xs">'left' | 'right'</td>
                  <td className="p-3 font-mono text-xs">'right'</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Usage Example</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Checkbox } from 'rizzui/checkbox';

<Checkbox 
  label="Accept terms" 
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
/>`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}

