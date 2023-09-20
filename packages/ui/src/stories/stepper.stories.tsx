// stepper.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stepper, { Step } from '../components/stepper';
import Button from '../components/button';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  subcomponents: { Step },
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper {...args}>
    <Step title="Step 1" description="This is a description" />
    <Step title="Step 2" description="This is a description" />
    <Step title="Step 3" description="This is a description" />
  </Stepper>
);

export const Default = Template.bind({});

export const SolidPrimary = () => (
  <Stepper currentIndex={1}>
    <Step color="primary" title="Step 1" description="This is a description" />
    <Step color="primary" title="Step 2" description="This is a description" />
    <Step color="primary" title="Step 3" description="This is a description" />
  </Stepper>
);

export const OutlinePrimary = () => (
  <Stepper dot currentIndex={1}>
    <Step
      variant="outline"
      color="primary"
      title="Step 1"
      description="This is a description"
    />
    <Step
      variant="outline"
      color="primary"
      title="Step 2"
      description="This is a description"
    />
    <Step
      variant="outline"
      color="primary"
      title="Step 3"
      description="This is a description"
    />
  </Stepper>
);

export const ErrorStep = () => (
  <Stepper currentIndex={1}>
    <Step title="Step 1" description="This is a description" />
    <Step
      status="error"
      color="danger"
      title="Step 2"
      description="This is a description"
    />
    <Step title="Step 3" description="This is a description" />
  </Stepper>
);

export const SmallSize = () => (
  <Stepper currentIndex={1}>
    <Step size="sm" title="Step 1" description="This is a description" />
    <Step size="sm" title="Step 2" description="This is a description" />
    <Step size="sm" title="Step 3" description="This is a description" />
  </Stepper>
);

export const CustomIcon = () => (
  <Stepper currentIndex={2}>
    <Step
      variant="outline"
      title="Login"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      }
    />
    <Step
      variant="outline"
      title="Verification"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      }
    />
    <Step
      variant="outline"
      title="Pay"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
      }
    />
    <Step
      variant="outline"
      title="Done"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      }
    />
  </Stepper>
);

export const Functional = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  return (
    <>
      <Stepper currentIndex={currentStep}>
        <Step title="Step 1" description="This is a description" />
        <Step title="Step 2" description="This is a description" />
        <Step title="Step 3" description="This is a description" />
      </Stepper>
      <div className="mt-7 flex space-x-4">
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
};
