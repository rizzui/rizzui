// file-input.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileInput } from '.';

export default {
  title: 'Components/FileInput',
  component: FileInput,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args) => (
  <FileInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Choose File',
};

export const ImageFile = () => <FileInput accept="image/*" />;
export const Clearable = () => <FileInput clearable />;
export const MultipleFile = () => <FileInput multiple />;
