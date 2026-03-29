'use client';

import { Switch } from 'rizzui/switch';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function SwitchPage() {
  const [enabled, setEnabled] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/switch" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Switch Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Toggle switch for on/off states</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~10KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Variants</h2>
          <div className="space-y-4">
            <Switch variant="outline" label="Outline variant" />
            <Switch variant="flat" label="Flat variant" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="space-y-4">
            <Switch size="sm" label="Small" />
            <Switch size="md" label="Medium" />
            <Switch size="lg" label="Large" />
            <Switch size="xl" label="Extra Large" />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Rounded</h2>
          <div className="space-y-4">
            <Switch rounded="none" label="None" defaultChecked />
            <Switch rounded="sm" label="Small" defaultChecked />
            <Switch rounded="md" label="Medium" defaultChecked />
            <Switch rounded="lg" label="Large" defaultChecked />
            <Switch rounded="pill" label="Pill" defaultChecked />
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">States</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Controlled</h3>
              <Switch 
                label={`Switch is ${enabled ? 'ON' : 'OFF'}`}
                checked={enabled}
                onChange={() => setEnabled(!enabled)}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Disabled</h3>
              <Switch disabled label="Disabled OFF" />
              <Switch disabled label="Disabled ON" defaultChecked className="mt-3" />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Switch } from 'rizzui/switch';

<Switch 
  label="Enable notifications"
  checked={enabled}
  onChange={() => setEnabled(!enabled)}
/>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

