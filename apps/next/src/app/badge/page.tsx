'use client';

// ✅ Import from specific path for tree-shaking (reduces from 168.4k to ~8k)
import { Badge } from 'rizzui/badge';
import Link from 'next/link';

export default function BadgePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            RizzUI Badge Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Small status indicators and labels
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
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            >
              ActionIcon
            </Link>
            <Link
              href="/badge"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
            >
              Badge
            </Link>
          </div>

          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~6KB (was 168KB)
          </div>
        </div>

        {/* Variants Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Badge Variants
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Available variants:{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              solid
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              flat
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              outline
            </code>
          </p>
          <div className="space-y-8">
            {/* Solid Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Solid
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="solid" color="primary">
                  Primary
                </Badge>
                <Badge variant="solid" color="secondary">
                  Secondary
                </Badge>
                <Badge variant="solid" color="success">
                  Success
                </Badge>
                <Badge variant="solid" color="warning">
                  Warning
                </Badge>
                <Badge variant="solid" color="danger">
                  Danger
                </Badge>
                <Badge variant="solid" color="info">
                  Info
                </Badge>
              </div>
            </div>

            {/* Flat Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Flat
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="flat" color="primary">
                  Primary
                </Badge>
                <Badge variant="flat" color="secondary">
                  Secondary
                </Badge>
                <Badge variant="flat" color="success">
                  Success
                </Badge>
                <Badge variant="flat" color="warning">
                  Warning
                </Badge>
                <Badge variant="flat" color="danger">
                  Danger
                </Badge>
                <Badge variant="flat" color="info">
                  Info
                </Badge>
              </div>
            </div>

            {/* Outline Variant */}
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                Outline
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" color="primary">
                  Primary
                </Badge>
                <Badge variant="outline" color="secondary">
                  Secondary
                </Badge>
                <Badge variant="outline" color="success">
                  Success
                </Badge>
                <Badge variant="outline" color="warning">
                  Warning
                </Badge>
                <Badge variant="outline" color="danger">
                  Danger
                </Badge>
                <Badge variant="outline" color="info">
                  Info
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Color Options
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Available colors:{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              primary
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              secondary
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              success
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              warning
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              danger
            </code>
            ,{' '}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              info
            </code>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center space-y-3">
              <Badge color="primary">Primary</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Primary
              </p>
            </div>
            <div className="text-center space-y-3">
              <Badge color="secondary">Secondary</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Secondary
              </p>
            </div>
            <div className="text-center space-y-3">
              <Badge color="success">Success</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Success
              </p>
            </div>
            <div className="text-center space-y-3">
              <Badge color="warning">Warning</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Warning
              </p>
            </div>
            <div className="text-center space-y-3">
              <Badge color="danger">Danger</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Danger
              </p>
            </div>
            <div className="text-center space-y-3">
              <Badge color="info">Info</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400">Info</p>
            </div>
          </div>
        </section>

        {/* Sizes Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Sizes
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
            <Badge size="xl">Extra Large</Badge>
          </div>
        </section>

        {/* Rounded Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Rounded Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="text-center">
              <Badge rounded="none">None</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                None
              </p>
            </div>
            <div className="text-center">
              <Badge rounded="sm">Small</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Small
              </p>
            </div>
            <div className="text-center">
              <Badge rounded="md">Medium</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Medium
              </p>
            </div>
            <div className="text-center">
              <Badge rounded="lg">Large</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Large
              </p>
            </div>
            <div className="text-center">
              <Badge rounded="pill">Pill</Badge>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Pill (Default)
              </p>
            </div>
          </div>
        </section>

        {/* Dot Badges Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Dot Badges
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Use <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">renderAsDot</code> prop for status indicators
          </p>
          
          <div className="space-y-6">
            {/* Dot sizes */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Badge renderAsDot size="sm" color="success" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Small
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge renderAsDot size="md" color="success" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Medium
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge renderAsDot size="lg" color="success" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Large
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge renderAsDot size="xl" color="success" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Extra Large
                  </span>
                </div>
              </div>
            </div>

            {/* Dot colors */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                Status Colors
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Badge renderAsDot color="primary" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Primary
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge renderAsDot color="secondary" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Secondary
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge renderAsDot color="success" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Online
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge renderAsDot color="warning" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Away
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge renderAsDot color="danger" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Offline
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge renderAsDot color="info" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Info
                  </span>
                </div>
              </div>
            </div>

            {/* With outline ring */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                With Outline Ring (for overlapping UI)
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <Badge
                    renderAsDot
                    color="success"
                    enableOutlineRing
                    className="absolute -top-0.5 -right-0.5"
                  />
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <Badge
                    renderAsDot
                    color="danger"
                    enableOutlineRing
                    className="absolute -top-0.5 -right-0.5"
                  />
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <Badge
                    renderAsDot
                    color="warning"
                    enableOutlineRing
                    className="absolute -top-0.5 -right-0.5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Variant × Color Matrix */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Variant × Color Matrix
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-gray-700 dark:text-gray-300">
                    Color
                  </th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">
                    Solid
                  </th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">
                    Flat
                  </th>
                  <th className="p-4 text-center text-gray-700 dark:text-gray-300">
                    Outline
                  </th>
                </tr>
              </thead>
              <tbody>
                {['primary', 'secondary', 'success', 'warning', 'danger', 'info'].map(
                  (color) => (
                    <tr
                      key={color}
                      className="border-t border-gray-200 dark:border-gray-700"
                    >
                      <td className="p-4 text-gray-700 dark:text-gray-300 capitalize">
                        {color}
                      </td>
                      <td className="p-4 text-center">
                        <Badge
                          variant="solid"
                          color={color as any}
                          className="inline-flex"
                        >
                          {color}
                        </Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge
                          variant="flat"
                          color={color as any}
                          className="inline-flex"
                        >
                          {color}
                        </Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge
                          variant="outline"
                          color={color as any}
                          className="inline-flex"
                        >
                          {color}
                        </Badge>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Common Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Notification Badge */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Notification Counter
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 dark:text-gray-300">
                    Messages
                  </span>
                  <Badge variant="solid" color="danger" size="sm">
                    12
                  </Badge>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Status Indicator
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 dark:text-gray-300">
                    Server Status
                  </span>
                  <Badge variant="flat" color="success">
                    Active
                  </Badge>
                </div>
              </div>
            </div>

            {/* Category Badge */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Category Tags
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" color="primary">
                    Design
                  </Badge>
                  <Badge variant="outline" color="info">
                    Development
                  </Badge>
                  <Badge variant="outline" color="success">
                    Marketing
                  </Badge>
                </div>
              </div>
            </div>

            {/* Online Status */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                User Online Status
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <Badge
                      renderAsDot
                      color="success"
                      enableOutlineRing
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    John Doe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Badge Props & API
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
                      'solid' | 'flat' | 'outline'
                    </td>
                    <td className="p-3 font-mono text-xs">'solid'</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      The visual style variant
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      color
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      'primary' | 'secondary' | 'success' | 'warning' | 'danger'
                      | 'info'
                    </td>
                    <td className="p-3 font-mono text-xs">'primary'</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      The color scheme
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
                      The size of the badge
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      rounded
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      'none' | 'sm' | 'md' | 'lg' | 'pill'
                    </td>
                    <td className="p-3 font-mono text-xs">'pill'</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Border radius style
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      renderAsDot
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="p-3 font-mono text-xs">false</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Render as a small dot indicator
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      enableOutlineRing
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="p-3 font-mono text-xs">false</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Add outline ring (useful for overlapping UI)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">
                      children
                    </td>
                    <td className="p-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                      ReactNode
                    </td>
                    <td className="p-3 font-mono text-xs">-</td>
                    <td className="p-3 text-gray-700 dark:text-gray-300">
                      Badge content (ignored if renderAsDot is true)
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
                    {`import { Badge } from 'rizzui/badge';

<Badge>New</Badge>
<Badge color="success">Active</Badge>
<Badge variant="outline" color="warning">Pending</Badge>`}
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Notification Badge:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`<div className="relative">
  <BellIcon className="w-6 h-6" />
  <Badge 
    size="sm" 
    color="danger" 
    className="absolute -top-1 -right-1"
  >
    5
  </Badge>
</div>`}
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Status Dot:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`<div className="flex items-center gap-2">
  <Badge renderAsDot color="success" />
  <span>Online</span>
</div>`}
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Avatar with Status:
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`<div className="relative">
  <img src="/avatar.jpg" className="w-12 h-12 rounded-full" />
  <Badge
    renderAsDot
    color="success"
    enableOutlineRing
    className="absolute bottom-0 right-0"
  />
</div>`}
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    ⚠️ Tree-shaking import (recommended):
                  </p>
                  <pre className="bg-green-900 text-green-100 p-4 rounded-lg overflow-x-auto text-xs">
                    {`// ✅ Good - ~6KB
import { Badge } from 'rizzui/badge';

// ❌ Bad - 168KB (imports entire library)
import { Badge } from 'rizzui';`}
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

