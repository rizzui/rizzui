'use client';

import { Loader } from 'rizzui/loader';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function LoaderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/loader" />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Loader Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Loading indicators in multiple styles and colors
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~4KB
          </div>
        </div>

        {/* Variants */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Loader variant="bars" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Bars</p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Loader variant="spinner" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Spinner</p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Loader variant="pulse" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pulse</p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Loader variant="threeDot" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Three Dot</p>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center space-y-2">
              <Loader size="sm" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Small</p>
            </div>
            <div className="text-center space-y-2">
              <Loader size="md" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Medium</p>
            </div>
            <div className="text-center space-y-2">
              <Loader size="lg" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Large</p>
            </div>
            <div className="text-center space-y-2">
              <Loader size="xl" />
              <p className="text-xs text-gray-600 dark:text-gray-400">XL</p>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            <div className="text-center space-y-3">
              <Loader color="current" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Current</p>
            </div>
            <div className="text-center space-y-3">
              <Loader color="primary" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Primary</p>
            </div>
            <div className="text-center space-y-3">
              <Loader color="secondary" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Secondary</p>
            </div>
            <div className="text-center space-y-3">
              <Loader color="success" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Success</p>
            </div>
            <div className="text-center space-y-3">
              <Loader color="warning" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Warning</p>
            </div>
            <div className="text-center space-y-3">
              <Loader color="danger" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Danger</p>
            </div>
            <div className="text-center space-y-3">
              <Loader color="info" />
              <p className="text-xs text-gray-600 dark:text-gray-400">Info</p>
            </div>
          </div>
        </section>

        {/* All Combinations */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Variant × Size Matrix
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left text-gray-700 dark:text-gray-300">Variant</th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">SM</th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">MD</th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">LG</th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">XL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">Bars</td>
                  <td className="p-4 text-center">
                    <Loader variant="bars" size="sm" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="bars" size="md" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="bars" size="lg" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="bars" size="xl" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">Spinner</td>
                  <td className="p-4 text-center">
                    <Loader variant="spinner" size="sm" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="spinner" size="md" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="spinner" size="lg" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="spinner" size="xl" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">Pulse</td>
                  <td className="p-4 text-center">
                    <Loader variant="pulse" size="sm" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="pulse" size="md" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="pulse" size="lg" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="pulse" size="xl" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">Three Dot</td>
                  <td className="p-4 text-center">
                    <Loader variant="threeDot" size="sm" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="threeDot" size="md" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="threeDot" size="lg" />
                  </td>
                  <td className="p-4 text-center">
                    <Loader variant="threeDot" size="xl" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Loading Content</h3>
              <div className="flex items-center justify-center h-32 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Loader size="lg" color="primary" />
              </div>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Inline Loader</h3>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg flex items-center gap-2">
                <Loader size="sm" color="current" />
                <span>Processing...</span>
              </button>
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
                  <td className="p-3 font-mono text-xs">'bars' | 'spinner' | 'pulse' | 'threeDot'</td>
                  <td className="p-3 font-mono text-xs">'bars'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">size</td>
                  <td className="p-3 font-mono text-xs">'sm' | 'md' | 'lg' | 'xl'</td>
                  <td className="p-3 font-mono text-xs">'md'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">color</td>
                  <td className="p-3 font-mono text-xs">current | primary | secondary | success | warning | danger | info</td>
                  <td className="p-3 font-mono text-xs">'current'</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Usage Example</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Loader } from 'rizzui/loader';

<Loader variant="spinner" size="lg" color="primary" />`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}

