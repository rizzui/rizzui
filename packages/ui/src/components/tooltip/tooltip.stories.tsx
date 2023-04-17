// tooltip.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from '.';
import Button from '../button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className="h-64">
    <Tooltip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  content: "I'm your tooltip",
  placement: 'bottom',
  children: <Button variant="outline">Default</Button>,
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  children: <Button variant="outline">Custom Content</Button>,
  content: (
    <div className="w-40 text-start">
      <span className="inline-flex items-center gap-2 text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>

        <h2>Tooltip Title</h2>
      </span>
      <p className="mt-2 text-sm">
        This is a tip to help you accomplish a task.
      </p>
    </div>
  ),
  placement: 'bottom-start',
};

export const WithPlacement = () => (
  <div className="flex h-[560px] flex-col">
    <div className="relative m-auto flex h-96 w-3/5 flex-wrap justify-center gap-8">
      <Tooltip content="I'm your tooltip" placement="left">
        <Button variant="outline" className="absolute top-1/2 left-0">
          Left
        </Button>
      </Tooltip>
      <Tooltip content="I'm your tooltip" placement="right">
        <Button variant="outline" className="absolute top-1/2 right-0">
          Right
        </Button>
      </Tooltip>
      <Tooltip content="I'm your tooltip" placement="top">
        <Button variant="outline" className="absolute top-0">
          Top
        </Button>
      </Tooltip>
      <Tooltip content="I'm your tooltip" placement="bottom">
        <Button variant="outline" className="absolute -bottom-5">
          Bottom
        </Button>
      </Tooltip>
      <Tooltip content="I'm your tooltip" placement="top-start">
        <Button variant="outline" className="absolute left-20 top-0">
          Top Start
        </Button>
      </Tooltip>
      <Tooltip content="I'm your tooltip" placement="top-end">
        <Button variant="outline" className="absolute top-0 right-20">
          Top End
        </Button>
      </Tooltip>

      <Tooltip content="I'm your tooltip" placement="bottom-start">
        <Button variant="outline" className="absolute -bottom-5 left-20">
          Bottom Start
        </Button>
      </Tooltip>
      <Tooltip content="I'm your tooltip" placement="bottom-end">
        <Button variant="outline" className="absolute -bottom-5 right-20">
          Bottom End
        </Button>
      </Tooltip>

      <Tooltip content="I'm your tooltip" placement="left-start">
        <Button variant="outline" className="absolute left-8 top-24">
          Left Start
        </Button>
      </Tooltip>
      <Tooltip content="I'm your tooltip" placement="left-end">
        <Button variant="outline" className="absolute bottom-16 left-8">
          Left End
        </Button>
      </Tooltip>

      <Tooltip content="I'm your tooltip" placement="right-start">
        <Button variant="outline" className="absolute right-8 top-24">
          Right Start
        </Button>
      </Tooltip>
      <Tooltip content="I'm your tooltip" placement="right-end">
        <Button variant="outline" className="absolute right-8 bottom-16">
          Right End
        </Button>
      </Tooltip>
    </div>
  </div>
);
