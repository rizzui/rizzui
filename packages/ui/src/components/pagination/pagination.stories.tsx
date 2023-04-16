import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultCurrent: 1,
  total: 25,
};

export const CustomPrevNext = () => (
  <Pagination
    defaultCurrent={5}
    total={100}
    prevIcon="Previous"
    nextIcon="Next"
    prevIconClassName="py-0 text-gray-500 !leading-[26px]"
    nextIconClassName="py-0 text-gray-500 !leading-[26px]"
  />
);

export const CustomPrevNextJump = () => (
  <Pagination
    defaultCurrent={5}
    total={100}
    outline
    jumpPrevIcon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
        />
      </svg>
    }
    jumpNextIcon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>
    }
  />
);
