'use client';

import { Tab } from 'rizzui/tabs';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function TabsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/tabs" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Tabs Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Tab navigation for organized content</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~12KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Tabs</h2>
          <Tab>
            <Tab.List>
              <Tab.ListItem>Profile</Tab.ListItem>
              <Tab.ListItem>Settings</Tab.ListItem>
              <Tab.ListItem>Messages</Tab.ListItem>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Profile Content</h3>
                  <p className="text-gray-600 dark:text-gray-300">Your profile information goes here.</p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Settings Content</h3>
                  <p className="text-gray-600 dark:text-gray-300">Your settings options go here.</p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Messages Content</h3>
                  <p className="text-gray-600 dark:text-gray-300">Your messages appear here.</p>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Tab } from 'rizzui/tabs';

<Tab>
  <Tab.List>
    <Tab.ListItem>Tab 1</Tab.ListItem>
    <Tab.ListItem>Tab 2</Tab.ListItem>
  </Tab.List>
  <Tab.Panels>
    <Tab.Panel>Content 1</Tab.Panel>
    <Tab.Panel>Content 2</Tab.Panel>
  </Tab.Panels>
</Tab>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

