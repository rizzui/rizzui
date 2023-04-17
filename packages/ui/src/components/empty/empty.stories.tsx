import { ComponentStory, ComponentMeta } from '@storybook/react';
import Empty from '.';
import { EmptyProductBoxIcon, SearchNotFoundIcon } from './empty-icons';

export default {
  title: 'Components/Empty',
  component: Empty,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'No Data',
  textClassName: 'mt-2',
};

export const NoProduct = Template.bind({});
NoProduct.args = {
  image: <EmptyProductBoxIcon />,
  text: 'No Product Available',
};

export const NoResultFound = Template.bind({});
NoResultFound.args = {
  image: <SearchNotFoundIcon />,
  text: 'No Result Found',
};
