'use client';

// ✅ Import from specific path for tree-shaking (reduces from 168.4k to ~8k)
import { Button } from 'rizzui/button';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/" />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Button Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore all button variants, sizes, rounded styles, and states
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~8KB (was 168KB)
          </div>
        </div>

        {/* Variants Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Button Variants
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Available variants:{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              solid
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              outline
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              flat
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              text
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              danger
            </code>
          </p>
          <div className="space-y-8">
            {/* Solid Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Solid (Primary Style)
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="solid">Solid Button</Button>
              </div>
            </div>

            {/* Outline Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Outline
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">Outline Button</Button>
              </div>
            </div>

            {/* Flat Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Flat
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="flat">Flat Button</Button>
              </div>
            </div>

            {/* Text Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Text
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="text">Text Button</Button>
              </div>
            </div>

            {/* Danger Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Danger
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="danger">Danger Button</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sizes Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Sizes
          </h2>
          <div className="flex flex-wrap items-end gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </section>

        {/* Rounded Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Rounded Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button rounded="none">None</Button>
            <Button rounded="sm">Small</Button>
            <Button rounded="md">Medium</Button>
            <Button rounded="lg">Large</Button>
            <Button rounded="pill">Pill</Button>
          </div>
        </section>

        {/* States Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            States
          </h2>
          <div className="space-y-6">
            {/* Loading State */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Loading
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button isLoading={isLoading} onClick={handleLoadingDemo}>
                  {isLoading ? 'Loading...' : 'Click to Load'}
                </Button>
                <Button variant="outline" isLoading>
                  Loading
                </Button>
                <Button variant="flat" isLoading>
                  Loading
                </Button>
                <Button variant="text" isLoading>
                  Loading
                </Button>
              </div>
            </div>

            {/* Disabled State */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Disabled
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Solid</Button>
                <Button variant="outline" disabled>
                  Outline
                </Button>
                <Button variant="flat" disabled>
                  Flat
                </Button>
                <Button variant="text" disabled>
                  Text
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Combination Grid */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Size × Variant Matrix
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-gray-700 dark:text-gray-300">
                    Size
                  </th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">
                    Solid
                  </th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">
                    Outline
                  </th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">
                    Flat
                  </th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">
                    Text
                  </th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">
                    Danger
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">SM</td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="solid">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="outline">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="flat">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="text">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="danger">
                      Button
                    </Button>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">MD</td>
                  <td className="p-4 text-center">
                    <Button size="md" variant="solid">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="md" variant="outline">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="md" variant="flat">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="md" variant="text">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="md" variant="danger">
                      Button
                    </Button>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">LG</td>
                  <td className="p-4 text-center">
                    <Button size="lg" variant="solid">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="lg" variant="outline">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="lg" variant="flat">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="lg" variant="text">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="lg" variant="danger">
                      Button
                    </Button>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">XL</td>
                  <td className="p-4 text-center">
                    <Button size="xl" variant="solid">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="xl" variant="outline">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="xl" variant="flat">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="xl" variant="text">
                      Button
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button size="xl" variant="danger">
                      Button
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* All Variants Grid */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            All Button Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Solid */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Solid
              </h3>
              <div className="space-y-3">
                <Button variant="solid" className="w-full">
                  Solid
                </Button>
              </div>
            </div>

            {/* Outline */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Outline
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  Outline
                </Button>
              </div>
            </div>

            {/* Flat */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Flat
              </h3>
              <div className="space-y-3">
                <Button variant="flat" className="w-full">
                  Flat
                </Button>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Text
              </h3>
              <div className="space-y-3">
                <Button variant="text" className="w-full">
                  Text
                </Button>
              </div>
            </div>

            {/* Danger */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Danger
              </h3>
              <div className="space-y-3">
                <Button variant="danger" className="w-full">
                  Danger
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Button Props & API
          </h2>
          <div className="space-y-6">
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
                      variant
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      'solid' | 'outline' | 'flat' | 'text' | 'danger'
                    </td>
                    <td className="p-3 font-mono text-xs">'solid'</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      The visual style variant
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      size
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      'sm' | 'md' | 'lg' | 'xl'
                    </td>
                    <td className="p-3 font-mono text-xs">'md'</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      The size of the button
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      rounded
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      'none' | 'sm' | 'md' | 'lg' | 'pill'
                    </td>
                    <td className="p-3 font-mono text-xs">'md'</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Border radius style
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      isLoading
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="p-3 font-mono text-xs">false</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Shows loading spinner
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      disabled
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="p-3 font-mono text-xs">false</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Disables the button
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      type
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      'button' | 'submit' | 'reset'
                    </td>
                    <td className="p-3 font-mono text-xs">'button'</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      HTML button type
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      as
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      'button' | 'span'
                    </td>
                    <td className="p-3 font-mono text-xs">'button'</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Render as different element
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      loader
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      ReactNode
                    </td>
                    <td className="p-3 font-mono text-xs">-</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Custom loader component
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      className
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      string
                    </td>
                    <td className="p-3 font-mono text-xs">-</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Additional CSS classes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Usage Examples
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Basic Usage:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`import { Button } from 'rizzui/button';

<Button>Click me</Button>`}
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    With all props:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`<Button
  variant="solid"
  size="lg"
  rounded="pill"
  isLoading={false}
  disabled={false}
  onClick={() => console.log('clicked')}
>
  Submit
</Button>`}
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Loading state:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`<Button isLoading variant="outline">
  Processing...
</Button>`}
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    ⚠️ Tree-shaking import (recommended):
                  </p>
                  <pre className="bg-green-900 text-green-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`// ✅ Good - ~8KB
import { Button } from 'rizzui/button';

// ❌ Bad - 168KB (imports entire library)
import { Button } from 'rizzui';`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
