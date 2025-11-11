'use client';

import { Grid } from 'rizzui/grid';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function GridPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/grid" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Grid Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">CSS Grid layout component</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~6KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Grid</h2>
          <Grid cols={3} gap={4}>
            <div className="p-4 bg-primary text-primary-foreground rounded">1</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">2</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">3</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">4</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">5</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">6</div>
          </Grid>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Responsive Grid</h2>
          <Grid cols={1} colsSm={2} colsMd={3} colsLg={4} gap={4}>
            <div className="p-4 bg-secondary text-secondary-foreground rounded">A</div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded">B</div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded">C</div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded">D</div>
          </Grid>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Grid } from 'rizzui/grid';

<Grid cols={3} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
