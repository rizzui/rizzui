// alert.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from './alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'danger',
  children: (
    <>
      <h2 className="font-semibold">Flat</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores.</p>
    </>
  ),
};

export const CloseableWithBar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    isOpen && (
      <Alert
        variant="flat"
        color="danger"
        iconContainerClassName="!items-start"
        iconClassName="mt-4"
        onClose={() => setIsOpen(!isOpen)}
        closable
        bar
      >
        <>
          <h2 className="font-semibold">Clearble with Bar</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </>
      </Alert>
    )
  );
};
