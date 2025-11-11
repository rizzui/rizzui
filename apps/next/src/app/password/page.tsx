'use client';

import { Password } from 'rizzui/password';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function PasswordPage() {
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/password" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Password Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Password input with visibility toggle</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~12KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
          <Password
            label="Password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Variants</h2>
          <div className="space-y-4">
            <Password variant="outline" label="Outline" placeholder="Outline variant" />
            <Password variant="text" label="Text" placeholder="Text variant" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="space-y-4">
            <Password size="sm" label="Small" placeholder="Small password input" />
            <Password size="md" label="Medium" placeholder="Medium password input" />
            <Password size="lg" label="Large" placeholder="Large password input" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">States</h2>
          <div className="space-y-4">
            <Password label="With Helper" placeholder="Enter password" helperText="Use at least 8 characters" />
            <Password label="Error State" placeholder="Enter password" error="Password must be at least 8 characters" />
            <Password label="Disabled" placeholder="Cannot edit" disabled />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Password } from 'rizzui/password';

<Password
  label="Password"
  placeholder="Enter password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

