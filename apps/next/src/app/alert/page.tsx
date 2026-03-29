'use client';

import { Alert } from 'rizzui/alert';
import { useState } from 'react';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function AlertPage() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/alert" />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Alert Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Alert messages for different states and feedback
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~10KB
          </div>
        </div>

        {/* Colors */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Colors</h2>
          <div className="space-y-4">
            <Alert color="info">
              This is an informational alert message
            </Alert>
            <Alert color="success">
              Your changes have been saved successfully
            </Alert>
            <Alert color="warning">
              Please review your settings before proceeding
            </Alert>
            <Alert color="danger">
              An error occurred while processing your request
            </Alert>
          </div>
        </section>

        {/* Variants */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Variants</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Flat (Default)</h3>
              <div className="space-y-3">
                <Alert variant="flat" color="info">Flat info alert</Alert>
                <Alert variant="flat" color="success">Flat success alert</Alert>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Outline</h3>
              <div className="space-y-3">
                <Alert variant="outline" color="info">Outline info alert</Alert>
                <Alert variant="outline" color="success">Outline success alert</Alert>
              </div>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="space-y-4">
            <Alert size="sm" color="info">Small alert message</Alert>
            <Alert size="md" color="info">Medium alert message</Alert>
            <Alert size="lg" color="info">Large alert message</Alert>
            <Alert size="xl" color="info">Extra large alert message</Alert>
          </div>
        </section>

        {/* Rounded */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Rounded Variants</h2>
          <div className="space-y-4">
            <Alert rounded="none" color="info">No border radius</Alert>
            <Alert rounded="sm" color="info">Small rounded</Alert>
            <Alert rounded="md" color="info">Medium rounded</Alert>
            <Alert rounded="lg" color="info">Large rounded</Alert>
            <Alert rounded="xl" color="info">Extra large rounded</Alert>
          </div>
        </section>

        {/* With Bar */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">With Accent Bar</h2>
          <div className="space-y-4">
            <Alert bar color="info">Info alert with accent bar</Alert>
            <Alert bar color="success">Success alert with accent bar</Alert>
            <Alert bar color="warning">Warning alert with accent bar</Alert>
            <Alert bar color="danger">Danger alert with accent bar</Alert>
          </div>
        </section>

        {/* Closable */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Closable Alert</h2>
          {showAlert && (
            <Alert
              color="success"
              closable
              onClose={() => setShowAlert(false)}
            >
              This alert can be dismissed by clicking the close button
            </Alert>
          )}
          {!showAlert && (
            <button
              onClick={() => setShowAlert(true)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
            >
              Show Alert Again
            </button>
          )}
        </section>

        {/* Complete Examples */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Complete Examples
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Success Notification</h3>
              <Alert
                variant="flat"
                color="success"
                size="lg"
                rounded="lg"
                bar
                closable
              >
                <strong>Payment successful!</strong> Your order has been confirmed and will be shipped within 24 hours.
              </Alert>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Error Message</h3>
              <Alert
                variant="outline"
                color="danger"
                size="md"
                rounded="lg"
                closable
              >
                <strong>Upload failed.</strong> The file size exceeds the maximum limit of 10MB.
              </Alert>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Warning Notice</h3>
              <Alert
                variant="flat"
                color="warning"
                size="md"
                rounded="lg"
                bar
              >
                <strong>Maintenance scheduled.</strong> Our services will be temporarily unavailable on Sunday, 2:00 AM - 4:00 AM EST.
              </Alert>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Information Banner</h3>
              <Alert
                variant="outline"
                color="info"
                size="lg"
                rounded="md"
              >
                <div>
                  <strong>New features available!</strong>
                  <p className="mt-1 text-sm">Check out our latest updates in the dashboard.</p>
                </div>
              </Alert>
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
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">color</td>
                  <td className="p-3 font-mono text-xs">'info' | 'success' | 'warning' | 'danger'</td>
                  <td className="p-3 font-mono text-xs">'info'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">variant</td>
                  <td className="p-3 font-mono text-xs">'flat' | 'outline'</td>
                  <td className="p-3 font-mono text-xs">'flat'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">size</td>
                  <td className="p-3 font-mono text-xs">'sm' | 'md' | 'lg' | 'xl'</td>
                  <td className="p-3 font-mono text-xs">'md'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">rounded</td>
                  <td className="p-3 font-mono text-xs">'none' | 'sm' | 'md' | 'lg' | 'xl'</td>
                  <td className="p-3 font-mono text-xs">'md'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">bar</td>
                  <td className="p-3 font-mono text-xs">boolean</td>
                  <td className="p-3 font-mono text-xs">false</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">closable</td>
                  <td className="p-3 font-mono text-xs">boolean</td>
                  <td className="p-3 font-mono text-xs">false</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">onClose</td>
                  <td className="p-3 font-mono text-xs">() =&gt; void</td>
                  <td className="p-3 font-mono text-xs">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Usage Example</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Alert } from 'rizzui/alert';

<Alert 
  color="success" 
  bar
  closable
  onClose={() => setShowAlert(false)}
>
  Your changes have been saved!
</Alert>`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}

