'use client';

import { Avatar } from 'rizzui/avatar';
import { Badge } from 'rizzui/badge';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function AvatarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/avatar" />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Avatar Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            User avatars with initials, images, and status indicators
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~6KB
          </div>
        </div>

        {/* Sizes */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Sizes</h2>
          <div className="flex items-center flex-wrap gap-6">
            <Avatar name="John Doe" size="sm" />
            <Avatar name="John Doe" size="md" />
            <Avatar name="John Doe" size="lg" />
            <Avatar name="John Doe" size="xl" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Sizes: SM (32px), MD (40px), LG (48px), XL (56px)
          </p>
        </section>

        {/* Rounded */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Rounded Variants</h2>
          <div className="flex items-center flex-wrap gap-6">
            <div className="text-center">
              <Avatar name="John" rounded="none" />
              <p className="text-xs mt-2">None</p>
            </div>
            <div className="text-center">
              <Avatar name="Jane" rounded="sm" />
              <p className="text-xs mt-2">Small</p>
            </div>
            <div className="text-center">
              <Avatar name="Bob" rounded="md" />
              <p className="text-xs mt-2">Medium</p>
            </div>
            <div className="text-center">
              <Avatar name="Alice" rounded="lg" />
              <p className="text-xs mt-2">Large</p>
            </div>
            <div className="text-center">
              <Avatar name="Charlie" rounded="full" />
              <p className="text-xs mt-2">Full</p>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Colors</h2>
          <div className="flex items-center flex-wrap gap-4">
            <Avatar name="Primary" color="primary" />
            <Avatar name="Secondary" color="secondary" />
            <Avatar name="Success" color="success" />
            <Avatar name="Warning" color="warning" />
            <Avatar name="Danger" color="danger" />
            <Avatar name="Info" color="info" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            By default, avatars use auto-generated colors based on the first letter
          </p>
        </section>

        {/* Auto Colors */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Auto-Generated Colors
          </h2>
          <div className="flex items-center flex-wrap gap-4">
            <Avatar name="Alice" />
            <Avatar name="Bob" />
            <Avatar name="Charlie" />
            <Avatar name="David" />
            <Avatar name="Emma" />
            <Avatar name="Frank" />
            <Avatar name="Grace" />
            <Avatar name="Henry" />
            <Avatar name="Iris" />
            <Avatar name="Jack" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Each letter gets a unique color automatically
          </p>
        </section>

        {/* With Images */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            With Images
          </h2>
          <div className="flex items-center flex-wrap gap-4">
            <Avatar 
              name="User One" 
              src="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <Avatar 
              name="User Two" 
              src="https://randomuser.me/api/portraits/women/2.jpg"
              size="lg"
            />
            <Avatar 
              name="User Three" 
              src="https://randomuser.me/api/portraits/men/3.jpg"
              size="xl"
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Falls back to initials if image fails to load
          </p>
        </section>

        {/* With Status Badge */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            With Status Badge
          </h2>
          <div className="flex items-center flex-wrap gap-8">
            <div className="relative">
              <Avatar name="Online" size="lg" />
              <Badge
                renderAsDot
                color="success"
                enableOutlineRing
                className="absolute bottom-0 right-0"
              />
            </div>
            <div className="relative">
              <Avatar name="Away" size="lg" />
              <Badge
                renderAsDot
                color="warning"
                enableOutlineRing
                className="absolute bottom-0 right-0"
              />
            </div>
            <div className="relative">
              <Avatar name="Offline" size="lg" />
              <Badge
                renderAsDot
                color="danger"
                enableOutlineRing
                className="absolute bottom-0 right-0"
              />
            </div>
            <div className="relative">
              <Avatar name="Busy" size="lg" />
              <Badge
                renderAsDot
                color="info"
                enableOutlineRing
                className="absolute bottom-0 right-0"
              />
            </div>
          </div>
        </section>

        {/* Clickable */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Clickable Avatar
          </h2>
          <div className="flex items-center gap-4">
            <Avatar 
              name="Click Me" 
              onClick={() => alert('Avatar clicked!')}
            />
            <p className="text-gray-600 dark:text-gray-400">Click the avatar →</p>
          </div>
        </section>

        {/* Avatar Group */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Avatar Group
          </h2>
          <div className="flex items-center -space-x-4">
            <Avatar name="Alice" className="ring-2 ring-background" />
            <Avatar name="Bob" className="ring-2 ring-background" />
            <Avatar name="Charlie" className="ring-2 ring-background" />
            <Avatar name="David" className="ring-2 ring-background" />
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-sm font-medium ring-2 ring-background">
              +5
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
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">name</td>
                  <td className="p-3 font-mono text-xs">string</td>
                  <td className="p-3 font-mono text-xs">required</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">src</td>
                  <td className="p-3 font-mono text-xs">string</td>
                  <td className="p-3 font-mono text-xs">-</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">initials</td>
                  <td className="p-3 font-mono text-xs">string</td>
                  <td className="p-3 font-mono text-xs">auto</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">size</td>
                  <td className="p-3 font-mono text-xs">'sm' | 'md' | 'lg' | 'xl'</td>
                  <td className="p-3 font-mono text-xs">'md'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">rounded</td>
                  <td className="p-3 font-mono text-xs">'none' | 'sm' | 'md' | 'lg' | 'full'</td>
                  <td className="p-3 font-mono text-xs">'full'</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">color</td>
                  <td className="p-3 font-mono text-xs">primary | secondary | success | warning | danger | info</td>
                  <td className="p-3 font-mono text-xs">auto</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">onClick</td>
                  <td className="p-3 font-mono text-xs">() =&gt; void</td>
                  <td className="p-3 font-mono text-xs">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Usage Examples</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2">Basic:</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Avatar } from 'rizzui/avatar';

<Avatar name="John Doe" />`}
                </pre>
              </div>
              <div>
                <p className="text-sm mb-2">With image:</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`<Avatar 
  name="John Doe" 
  src="/avatar.jpg"
  size="lg"
/>`}
                </pre>
              </div>
              <div>
                <p className="text-sm mb-2">With status badge:</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`<div className="relative">
  <Avatar name="John Doe" />
  <Badge
    renderAsDot
    color="success"
    enableOutlineRing
    className="absolute bottom-0 right-0"
  />
</div>`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

