// range-slider.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RangeSlider from '.';

export default {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof RangeSlider>;

const Template: ComponentStory<typeof RangeSlider> = (args) => (
  <RangeSlider {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: 20,
};

export const Range = Template.bind({});
Range.args = {
  range: true,
  defaultValue: [20, 60],
};

export const StepWithMarks = () => {
  const marks = {
    0: '0',
    20: '2000',
    40: '4000',
    60: '6000',
    80: '8000',
    100: '10000',
  };
  return <RangeSlider marks={marks} step={20} defaultValue={40} />;
};

export const StepWithMarksInRange = () => {
  const marks = {
    0: '0',
    20: '2000',
    40: '4000',
    60: '6000',
    80: '8000',
    100: '10000',
  };
  return <RangeSlider range marks={marks} step={20} defaultValue={[20, 60]} />;
};
