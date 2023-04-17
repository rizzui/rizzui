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

export const ClearableWithBar = () => {
  const [isCleared, setIsCleared] = React.useState(false);
  return (
    !isCleared && (
      <Alert
        variant="flat"
        color="danger"
        iconContainerClassName="!items-start"
        iconClassName="mt-4"
        onClear={() => setIsCleared(!isCleared)}
        clearable
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
