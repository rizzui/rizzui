import React from 'react';
import { Button, Step, Stepper } from 'rizzui';

export default function FunctionalStepper() {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <>
      <Stepper currentIndex={currentStep} className="w-full">
        <Step title="Step 1" description="This is a description" />
        <Step title="Step 2" description="This is a description" />
        <Step title="Step 3" description="This is a description" />
      </Stepper>

      <div className="flex space-x-4 mt-7">
        <Button
          disabled={currentStep === 3}
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Next
        </Button>

        {currentStep === 3 && (
          <Button onClick={() => setCurrentStep(0)}>Reset</Button>
        )}
      </div>
    </>
  );
}
