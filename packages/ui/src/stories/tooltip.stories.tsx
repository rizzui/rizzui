// tooltip.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from '../components/tooltip';
import { Button } from '../components/button';

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

export const WithPlacement = () => (
  <div className="flex h-[560px] flex-col">
    <div className="relative m-auto flex h-96 w-3/5 flex-wrap justify-center gap-8">
      <Tooltip content={"I'm your tooltip"} placement="left">
        <Button variant="outline" className="absolute left-0 top-1/2">
          Left
        </Button>
      </Tooltip>
      <Tooltip content={"I'm your tooltip"} placement="right">
        <Button variant="outline" className="absolute right-0 top-1/2">
          Right
        </Button>
      </Tooltip>
      <Tooltip content={"I'm your tooltip"} placement="top">
        <Button variant="outline" className="absolute top-0">
          Top
        </Button>
      </Tooltip>
      <Tooltip content={"I'm your tooltip"} placement="bottom">
        <Button variant="outline" className="absolute -bottom-5">
          Bottom
        </Button>
      </Tooltip>
      <Tooltip content={"I'm your tooltip"} placement="top-start">
        <Button variant="outline" className="absolute left-20 top-0">
          Top Start
        </Button>
      </Tooltip>
      <Tooltip content={"I'm your tooltip"} placement="top-end">
        <Button variant="outline" className="absolute right-20 top-0">
          Top End
        </Button>
      </Tooltip>

      <Tooltip content={"I'm your tooltip"} placement="bottom-start">
        <Button variant="outline" className="absolute -bottom-5 left-20">
          Bottom Start
        </Button>
      </Tooltip>
      <Tooltip content={"I'm your tooltip"} placement="bottom-end">
        <Button variant="outline" className="absolute -bottom-5 right-20">
          Bottom End
        </Button>
      </Tooltip>

      <Tooltip content={"I'm your tooltip"} placement="left-start">
        <Button variant="outline" className="absolute left-8 top-24">
          Left Start
        </Button>
      </Tooltip>
      <Tooltip content={"I'm your tooltip"} placement="left-end">
        <Button variant="outline" className="absolute bottom-16 left-8">
          Left End
        </Button>
      </Tooltip>

      <Tooltip content={"I'm your tooltip"} placement="right-start">
        <Button variant="outline" className="absolute right-8 top-24">
          Right Start
        </Button>
      </Tooltip>
      <Tooltip content={"I'm your tooltip"} placement="right-end">
        <Button variant="outline" className="absolute bottom-16 right-8">
          Right End
        </Button>
      </Tooltip>
    </div>
  </div>
);
