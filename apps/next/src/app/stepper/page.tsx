'use client';

import { Stepper } from 'rizzui/stepper';
import { useState } from 'react';
import { Button } from 'rizzui/button';
import { ShowcaseNav } from '@/components/showcase-nav';

export default function StepperPage() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ShowcaseNav currentPath="/stepper" />

        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Stepper Component</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Step indicator for multi-step processes</p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm">
            ✅ Tree-shakeable import • Bundle size: ~10KB
          </div>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Basic Stepper</h2>
          <Stepper currentIndex={currentStep}>
            <Stepper.Step title="Account" description="Create your account" />
            <Stepper.Step title="Profile" description="Setup profile" />
            <Stepper.Step title="Verification" description="Verify email" />
            <Stepper.Step title="Complete" description="All done!" />
          </Stepper>

          <div className="flex gap-3 mt-6">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button 
              onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
              disabled={currentStep === 3}
            >
              Next
            </Button>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Usage Example</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`import { Stepper } from 'rizzui/stepper';

<Stepper currentIndex={currentStep}>
  <Stepper.Step title="Step 1" />
  <Stepper.Step title="Step 2" />
  <Stepper.Step title="Step 3" />
</Stepper>`}
          </pre>
        </section>
      </div>
    </div>
  );
}

