// file-input.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileInput from '../components/upload/file-input';

export default {
  title: 'Components/FileInput',
  component: FileInput,
  parameters: {
    viewMode: 'docs',
  },
  // @ts-ignore
} as ComponentMeta<typeof FileInput>;

// @ts-ignore
const Template: ComponentStory<typeof FileInput> = (args) => (
  <FileInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Upload File',
};

export const Clearable = () => {
  const [file, setFile] = React.useState<any>('');
  return (
    <>
      <FileInput
        value={file}
        onChange={(e) => setFile(e.target.value)}
        clearable={!!file}
        multiple
        onClear={() => {
          setFile('');
        }}
      />
    </>
  );
};
export const MultipleFile = () => <FileInput multiple />;

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  accept: 'image/*',
  helperText: 'Please upload images',
};

export const WithValidationError = Template.bind({});
WithValidationError.args = {
  error: 'This field is required',
};
