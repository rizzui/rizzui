'use client';

import { Text, Title } from 'rizzui/typography';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function TypographyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/typography" />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Typography Components</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Text and Title components for consistent typography
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~6KB
          </div>
        </div>

        {/* Title Component */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Title Component</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">as="h1"</p>
              <Title as="h1">Heading 1 - Main Page Title</Title>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">as="h2"</p>
              <Title as="h2">Heading 2 - Section Title</Title>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">as="h3"</p>
              <Title as="h3">Heading 3 - Subsection Title</Title>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">as="h4"</p>
              <Title as="h4">Heading 4 - Minor Section</Title>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">as="h5"</p>
              <Title as="h5">Heading 5 - Smallest Heading</Title>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">as="h6"</p>
              <Title as="h6">Heading 6 - Tiny Heading</Title>
            </div>
          </div>
        </section>

        {/* Font Weights */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Font Weights</h2>
          <div className="space-y-4">
            <Text fontWeight="thin">This is thin weight text</Text>
            <Text fontWeight="extralight">This is extra light weight text</Text>
            <Text fontWeight="light">This is light weight text</Text>
            <Text fontWeight="normal">This is normal weight text</Text>
            <Text fontWeight="medium">This is medium weight text</Text>
            <Text fontWeight="semibold">This is semibold weight text</Text>
            <Text fontWeight="bold">This is bold weight text</Text>
            <Text fontWeight="extrabold">This is extra bold weight text</Text>
            <Text fontWeight="black">This is black weight text</Text>
          </div>
        </section>

        {/* Text Elements */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Text Elements</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Paragraph (as="p")</p>
              <Text as="p">
                This is a paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Strong (as="strong")</p>
              <Text as="strong">This text is strongly emphasized</Text>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Emphasis (as="em")</p>
              <Text as="em">This text is emphasized</Text>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Small (as="small")</p>
              <Text as="small">This is small text</Text>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Delete (as="del")</p>
              <Text as="del">This text has been deleted</Text>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Mark (as="mark")</p>
              <Text as="mark">This text is highlighted</Text>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Abbreviation (as="abbr")</p>
              <Text as="abbr" title="HyperText Markup Language">HTML</Text>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Subscript & Superscript</p>
              <div className="flex gap-4">
                <Text as="p">H<Text as="sub">2</Text>O</Text>
                <Text as="p">E = mc<Text as="sup">2</Text></Text>
              </div>
            </div>
          </div>
        </section>

        {/* Code Elements */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Code Elements</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Inline Code (as="code")</p>
              <Text as="p">
                Use the <Text as="code">console.log()</Text> function to debug your code.
              </Text>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Keyboard (as="kbd")</p>
              <Text as="p">
                Press <Text as="kbd">Ctrl</Text> + <Text as="kbd">C</Text> to copy
              </Text>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Preformatted (as="pre")</p>
              <Text as="pre">
{`function hello() {
  console.log('Hello World!');
  return true;
}`}
              </Text>
            </div>
          </div>
        </section>

        {/* Blockquote */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Blockquote</h2>
          <Text as="blockquote">
            "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. 
            Don't settle."
            <footer className="mt-2 text-sm text-gray-600 dark:text-gray-400">— Steve Jobs</footer>
          </Text>
        </section>

        {/* Real World Examples */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Real World Examples
          </h2>
          <div className="space-y-8">
            <article className="space-y-4">
              <Title as="h2">Getting Started with React</Title>
              <Text as="p">
                React is a JavaScript library for building user interfaces. It was created by Facebook and is 
                maintained by Meta and the community.
              </Text>
              <Title as="h3">Installation</Title>
              <Text as="p">
                To get started, run: <Text as="code">npx create-react-app my-app</Text>
              </Text>
              <Text as="blockquote">
                "React makes it painless to create interactive UIs."
              </Text>
            </article>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <Title as="h3">Product Description</Title>
              <div className="space-y-3 mt-4">
                <Text as="p" fontWeight="semibold">Premium Wireless Headphones</Text>
                <Text as="p">
                  Experience crystal-clear audio with our latest wireless headphones. 
                  <Text as="mark">Now on sale!</Text>
                </Text>
                <Text as="p">
                  <Text as="del">$299.99</Text>{' '}
                  <Text as="strong">$199.99</Text>
                </Text>
                <Text as="small">Free shipping on orders over $50</Text>
              </div>
            </div>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Props & API</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Title Component</h3>
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
                      <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">as</td>
                      <td className="p-3 font-mono text-xs">'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'</td>
                      <td className="p-3 font-mono text-xs">'h2'</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">fontWeight</td>
                      <td className="p-3 font-mono text-xs">thin | light | normal | medium | semibold | bold | etc.</td>
                      <td className="p-3 font-mono text-xs">'bold'</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Text Component</h3>
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
                      <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">as</td>
                      <td className="p-3 font-mono text-xs">p | span | strong | em | small | del | mark | code | kbd | pre | etc.</td>
                      <td className="p-3 font-mono text-xs">'p'</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs text-blue-600 dark:text-blue-400">fontWeight</td>
                      <td className="p-3 font-mono text-xs">thin | light | normal | medium | semibold | bold | etc.</td>
                      <td className="p-3 font-mono text-xs">'normal'</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Usage Examples</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2">Title:</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Title } from 'rizzui/typography';

<Title as="h1">Page Title</Title>`}
                </pre>
              </div>
              <div>
                <p className="text-sm mb-2">Text:</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Text } from 'rizzui/typography';

<Text as="p" fontWeight="medium">
  Paragraph text with medium weight
</Text>`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

