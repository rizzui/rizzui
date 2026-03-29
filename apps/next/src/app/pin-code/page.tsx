'use client';

import { PinCode } from 'rizzui/pin-code';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function PinCodePage() {
  const [code, setCode] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/pin-code" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Pin Code Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">PIN/OTP input for verification codes</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~8KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
          <PinCode
            length={6}
            setValue={setCode}
          />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Entered: <strong>{code || 'None'}</strong>
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Variants</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Outline</h3>
              <PinCode length={4} variant="outline" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Flat</h3>
              <PinCode length={4} variant="flat" />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="space-y-6">
            <PinCode length={4} size="sm" />
            <PinCode length={4} size="md" />
            <PinCode length={4} size="lg" />
            <PinCode length={4} size="xl" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Different Lengths</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm mb-2">4-digit PIN</p>
              <PinCode length={4} />
            </div>
            <div>
              <p className="text-sm mb-2">6-digit OTP</p>
              <PinCode length={6} />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { PinCode } from 'rizzui/pin-code';

<PinCode
  length={6}
  setValue={setCode}
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

