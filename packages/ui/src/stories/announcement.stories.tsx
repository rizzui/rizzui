// announcement.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Announcement from '../components/announcement/announcement';

export default {
  title: 'Components/Announcement',
  component: Announcement,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Announcement>;

const Template: ComponentStory<typeof Announcement> = (args) => (
  <Announcement {...args} />
);

export const Default = Template.bind({});
Default.args = {
  badgeText: 'Trending',
  highlightedText: '25% discount',
  children: 'on our new product',
};

export const Compound = () => (
  <div className="h-full bg-gray-200/70 p-5">
    <Announcement
      badgeText="New"
      highlightedText="25% discount"
      endIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-1 h-3.5 w-3.5 stroke-[2.5px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      }
    >
      on our every product
    </Announcement>
  </div>
);
