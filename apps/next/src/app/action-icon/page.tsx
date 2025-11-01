'use client';

// ✅ Import from specific path for tree-shaking (reduces from 168.4k to ~8k)
import { ActionIcon } from 'rizzui/action-icon';
import { useState } from 'react';
import { PlusIcon } from '@/icons/plus';
import { XIcon } from '@/icons/x-mark';
import { SearchIcon } from '@/icons/search';
import { StarIcon } from '@/icons/star';
import { ShoppingCartIcon } from '@/icons/shopping-cart';
import { CheckmarkIcon } from '@/icons/checkmark';
import Link from 'next/link';

export default function ActionIconPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            RizzUI ActionIcon Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Icon-only buttons for actions and interactions
          </p>

          {/* Component Navigation */}
          <div className="flex justify-center gap-4 pt-4">
            <Link
              href="/"
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            >
              Button
            </Link>
            <Link
              href="/action-icon"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
            >
              ActionIcon
            </Link>
            <Link
              href="/badge"
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            >
              Badge
            </Link>
          </div>

          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~8KB (was 168KB)
          </div>
        </div>

        {/* Variants Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            ActionIcon Variants
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
                <ActionIcon variant="solid">
                  <PlusIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="solid">
                  <SearchIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="solid">
                  <StarIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="solid">
                  <ShoppingCartIcon className="w-5 h-5" />
                </ActionIcon>
              </div>
            </div>

            {/* Outline Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Outline
              </h3>
              <div className="flex flex-wrap gap-4">
                <ActionIcon variant="outline">
                  <PlusIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="outline">
                  <SearchIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="outline">
                  <StarIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="outline">
                  <ShoppingCartIcon className="w-5 h-5" />
                </ActionIcon>
              </div>
            </div>

            {/* Flat Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Flat
              </h3>
              <div className="flex flex-wrap gap-4">
                <ActionIcon variant="flat">
                  <PlusIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="flat">
                  <SearchIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="flat">
                  <StarIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="flat">
                  <ShoppingCartIcon className="w-5 h-5" />
                </ActionIcon>
              </div>
            </div>

            {/* Text Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Text
              </h3>
              <div className="flex flex-wrap gap-4">
                <ActionIcon variant="text">
                  <PlusIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="text">
                  <SearchIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="text">
                  <StarIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="text">
                  <ShoppingCartIcon className="w-5 h-5" />
                </ActionIcon>
              </div>
            </div>

            {/* Danger Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Danger
              </h3>
              <div className="flex flex-wrap gap-4">
                <ActionIcon variant="danger">
                  <XIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="danger">
                  <XIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="danger">
                  <XIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="danger">
                  <XIcon className="w-5 h-5" />
                </ActionIcon>
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
            <ActionIcon size="sm">
              <PlusIcon className="w-4 h-4" />
            </ActionIcon>
            <ActionIcon size="md">
              <PlusIcon className="w-5 h-5" />
            </ActionIcon>
            <ActionIcon size="lg">
              <PlusIcon className="w-6 h-6" />
            </ActionIcon>
            <ActionIcon size="xl">
              <PlusIcon className="w-7 h-7" />
            </ActionIcon>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Sizes: SM (32px), MD (40px), LG (48px), XL (56px)
          </p>
        </section>

        {/* Rounded Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Rounded Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="text-center">
              <ActionIcon rounded="none">
                <StarIcon className="w-5 h-5" />
              </ActionIcon>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                None
              </p>
            </div>
            <div className="text-center">
              <ActionIcon rounded="sm">
                <StarIcon className="w-5 h-5" />
              </ActionIcon>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Small
              </p>
            </div>
            <div className="text-center">
              <ActionIcon rounded="md">
                <StarIcon className="w-5 h-5" />
              </ActionIcon>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Medium
              </p>
            </div>
            <div className="text-center">
              <ActionIcon rounded="lg">
                <StarIcon className="w-5 h-5" />
              </ActionIcon>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Large
              </p>
            </div>
            <div className="text-center">
              <ActionIcon rounded="full">
                <StarIcon className="w-5 h-5" />
              </ActionIcon>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Full
              </p>
            </div>
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
                <ActionIcon isLoading={isLoading} onClick={handleLoadingDemo}>
                  <CheckmarkIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="outline" isLoading>
                  <SearchIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="flat" isLoading>
                  <StarIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="text" isLoading>
                  <PlusIcon className="w-5 h-5" />
                </ActionIcon>
              </div>
            </div>

            {/* Disabled State */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Disabled
              </h3>
              <div className="flex flex-wrap gap-4">
                <ActionIcon disabled>
                  <PlusIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="outline" disabled>
                  <SearchIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="flat" disabled>
                  <StarIcon className="w-5 h-5" />
                </ActionIcon>
                <ActionIcon variant="text" disabled>
                  <XIcon className="w-5 h-5" />
                </ActionIcon>
              </div>
            </div>
          </div>
        </section>

        {/* Size × Variant Matrix */}
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
                    <ActionIcon size="sm" variant="solid">
                      <PlusIcon className="w-4 h-4" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="sm" variant="outline">
                      <PlusIcon className="w-4 h-4" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="sm" variant="flat">
                      <PlusIcon className="w-4 h-4" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="sm" variant="text">
                      <PlusIcon className="w-4 h-4" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="sm" variant="danger">
                      <XIcon className="w-4 h-4" />
                    </ActionIcon>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">MD</td>
                  <td className="p-4 text-center">
                    <ActionIcon size="md" variant="solid">
                      <PlusIcon className="w-5 h-5" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="md" variant="outline">
                      <PlusIcon className="w-5 h-5" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="md" variant="flat">
                      <PlusIcon className="w-5 h-5" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="md" variant="text">
                      <PlusIcon className="w-5 h-5" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="md" variant="danger">
                      <XIcon className="w-5 h-5" />
                    </ActionIcon>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">LG</td>
                  <td className="p-4 text-center">
                    <ActionIcon size="lg" variant="solid">
                      <PlusIcon className="w-6 h-6" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="lg" variant="outline">
                      <PlusIcon className="w-6 h-6" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="lg" variant="flat">
                      <PlusIcon className="w-6 h-6" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="lg" variant="text">
                      <PlusIcon className="w-6 h-6" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="lg" variant="danger">
                      <XIcon className="w-6 h-6" />
                    </ActionIcon>
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 text-gray-700 dark:text-gray-300">XL</td>
                  <td className="p-4 text-center">
                    <ActionIcon size="xl" variant="solid">
                      <PlusIcon className="w-7 h-7" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="xl" variant="outline">
                      <PlusIcon className="w-7 h-7" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="xl" variant="flat">
                      <PlusIcon className="w-7 h-7" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="xl" variant="text">
                      <PlusIcon className="w-7 h-7" />
                    </ActionIcon>
                  </td>
                  <td className="p-4 text-center">
                    <ActionIcon size="xl" variant="danger">
                      <XIcon className="w-7 h-7" />
                    </ActionIcon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            ActionIcon Props & API
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
                      The size of the icon button
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      rounded
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      'none' | 'sm' | 'md' | 'lg' | 'full'
                    </td>
                    <td className="p-3 font-mono text-xs">'md'</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Border radius style
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      children
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      ReactNode
                    </td>
                    <td className="p-3 font-mono text-xs">required</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      SVG icon element
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
                    {`import { ActionIcon } from 'rizzui/action-icon';
import { PlusIcon } from '@heroicons/react/24/outline';

<ActionIcon>
  <PlusIcon className="w-5 h-5" />
</ActionIcon>`}
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    With all props:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`<ActionIcon
  variant="solid"
  size="lg"
  rounded="full"
  isLoading={false}
  disabled={false}
  onClick={() => console.log('clicked')}
>
  <StarIcon className="w-6 h-6" />
</ActionIcon>`}
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Delete button example:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`<ActionIcon 
  variant="danger" 
  rounded="full"
  onClick={handleDelete}
>
  <XIcon className="w-5 h-5" />
</ActionIcon>`}
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    ⚠️ Tree-shaking import (recommended):
                  </p>
                  <pre className="bg-green-900 text-green-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`// ✅ Good - ~8KB
import { ActionIcon } from 'rizzui/action-icon';

// ❌ Bad - 168KB (imports entire library)
import { ActionIcon } from 'rizzui';`}
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

