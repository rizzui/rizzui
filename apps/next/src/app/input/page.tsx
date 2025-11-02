'use client';

import { Input } from 'rizzui/input';
import { useState } from 'react';
import { SearchIcon } from '@/icons/search';
import { CheckmarkIcon } from '@/icons/checkmark';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function InputPage() {
  const [email, setEmail] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [errorValue, setErrorValue] = useState('invalid@');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/input" />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Input Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Text input field with variants, sizes, and advanced features
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~12KB
          </div>
        </div>

        {/* Variants */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Variants
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Outline (Default)
              </h3>
              <Input variant="outline" placeholder="Outline variant" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Flat
              </h3>
              <Input variant="flat" placeholder="Flat variant" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Text
              </h3>
              <Input variant="text" placeholder="Text variant" />
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Sizes
          </h2>
          <div className="space-y-4">
            <Input size="sm" placeholder="Small (h-8)" />
            <Input size="md" placeholder="Medium (h-10)" />
            <Input size="lg" placeholder="Large (h-12)" />
            <Input size="xl" placeholder="Extra Large (h-14)" />
          </div>
        </section>

        {/* Rounded */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Rounded Variants
          </h2>
          <div className="space-y-4">
            <Input rounded="none" placeholder="None" />
            <Input rounded="sm" placeholder="Small" />
            <Input rounded="md" placeholder="Medium" />
            <Input rounded="lg" placeholder="Large" />
            <Input rounded="pill" placeholder="Pill" />
          </div>
        </section>

        {/* With Label */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            With Label
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Email Address" type="email" placeholder="john@example.com" />
            <Input
              label="Full Name"
              placeholder="John Doe"
              labelWeight="semibold"
            />
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 000-0000"
            />
            <Input label="Website" type="url" placeholder="https://example.com" />
          </div>
        </section>

        {/* Input Types */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Input Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Text" type="text" placeholder="Enter text" />
            <Input label="Email" type="email" placeholder="your@email.com" />
            <Input label="Number" type="number" placeholder="123" />
            <Input label="Tel" type="tel" placeholder="+1 234 567 8900" />
            <Input label="Search" type="search" placeholder="Search..." />
            <Input label="URL" type="url" placeholder="https://" />
            <Input label="Date" type="date" />
            <Input label="Time" type="time" />
            <Input label="Date & Time" type="datetime-local" />
            <Input label="Week" type="week" />
            <Input label="Month" type="month" />
          </div>
        </section>

        {/* With Prefix & Suffix */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            With Prefix & Suffix
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Icon Prefix
              </h3>
              <Input
                label="Search"
                placeholder="Search something..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                prefix={<SearchIcon className="w-5 h-5 text-gray-500" />}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Icon Suffix
              </h3>
              <Input
                label="Verified Email"
                placeholder="email@example.com"
                suffix={<CheckmarkIcon className="w-5 h-5 text-green-500" />}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Text Prefix
              </h3>
              <Input
                label="Website"
                placeholder="example.com"
                prefix={
                  <span className="text-gray-500 text-sm">https://</span>
                }
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Text Suffix
              </h3>
              <Input
                label="Price"
                type="number"
                placeholder="0.00"
                suffix={<span className="text-gray-500 text-sm">USD</span>}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                Both Prefix & Suffix
              </h3>
              <Input
                label="Amount"
                type="number"
                placeholder="0.00"
                prefix={<span className="text-gray-500 text-sm">$</span>}
                suffix={<span className="text-gray-500 text-sm">USD</span>}
              />
            </div>
          </div>
        </section>

        {/* Clearable */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Clearable Input
          </h2>
          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              clearable
              onClear={() => setEmail('')}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Type something and hover to see the clear button
            </p>
          </div>
        </section>

        {/* Helper Text */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            With Helper Text
          </h2>
          <div className="space-y-4">
            <Input
              label="Username"
              placeholder="john_doe"
              helperText="Choose a unique username that represents you"
            />
            <Input
              label="Password"
              type="text"
              placeholder="••••••••"
              helperText="Must be at least 8 characters with uppercase, lowercase, and numbers"
            />
          </div>
        </section>

        {/* Error State */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Error State
          </h2>
          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="email@example.com"
              value={errorValue}
              onChange={(e) => setErrorValue(e.target.value)}
              error="Please enter a valid email address"
            />
            <Input
              label="Required Field"
              placeholder="This field is required"
              error="This field cannot be empty"
            />
            <Input
              label="Invalid Format"
              type="number"
              placeholder="Enter number"
              error="Please enter a valid number"
              prefix={<span className="text-red text-sm">$</span>}
            />
          </div>
        </section>

        {/* Disabled State */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Disabled State
          </h2>
          <div className="space-y-4">
            <Input
              label="Disabled Input"
              placeholder="Cannot edit this"
              disabled
            />
            <Input
              label="Disabled with Value"
              value="This value cannot be changed"
              disabled
            />
            <Input
              label="Disabled with Prefix"
              disabled
              prefix={<SearchIcon className="w-5 h-5" />}
              placeholder="Disabled"
            />
          </div>
        </section>

        {/* Read Only */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Read Only
          </h2>
          <div className="space-y-4">
            <Input
              label="Read Only"
              value="This value is read-only"
              readOnly
            />
            <Input
              label="Order ID"
              value="ORD-2024-001234"
              readOnly
              helperText="This order ID cannot be modified"
            />
          </div>
        </section>

        {/* Props Documentation */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Input Props & API
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
                    variant
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    'outline' | 'flat' | 'text'
                  </td>
                  <td className="p-3 font-mono text-xs">'outline'</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Visual style variant
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
                    Input size
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
                    Border radius
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    type
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    text | email | number | tel | search | url | date | time |
                    etc.
                  </td>
                  <td className="p-3 font-mono text-xs">'text'</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    HTML input type
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    label
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    ReactNode
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Field label
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    prefix
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    ReactNode
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Icon/text at start
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    suffix
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    ReactNode
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Icon/text at end
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
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    onClear
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    (e) =&gt; void
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Clear button callback
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    helperText
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    ReactNode
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Helper text below input
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                    error
                  </td>
                  <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                    string
                  </td>
                  <td className="p-3 font-mono text-xs">-</td>
                  <td className="p-3 text-gray-700 dark:text-gray-300">
                    Error message
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
                    Disable input
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
                  Basic:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`import { Input } from 'rizzui/input';

<Input label="Email" type="email" placeholder="your@email.com" />`}
                </pre>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  With icon prefix:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`<Input
  label="Search"
  placeholder="Search..."
  prefix={<SearchIcon className="w-5 h-5" />}
/>`}
                </pre>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Clearable with state:
                </p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  {`const [value, setValue] = useState('');

<Input
  label="Email"
  value={value}
  onChange={(e) => setValue(e.target.value)}
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
                  {`// ✅ Good - ~12KB
import { Input } from 'rizzui/input';

// ❌ Bad - 168KB
import { Input } from 'rizzui';`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

