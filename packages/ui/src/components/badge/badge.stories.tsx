// badge.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from './badge';
import { ShoppingBagIcon } from '../../icons/shopping-bag';
import { ShoppingCartIcon } from '../../icons/shopping-cart';
import Avatar from '../avatar';
import Text from '../text';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Badge',
};

export const Variants = () => (
  <div className="flex items-center justify-around gap-3">
    <Badge variant="outline">Badge</Badge>
    <Badge variant="flat">Badge</Badge>
    <Badge>Badge</Badge>
  </div>
);

export const Sizes = () => (
  <div className="flex items-center justify-around gap-3">
    <Badge size="sm">Badge</Badge>
    <Badge>Badge</Badge>
    <Badge size="lg">Badge</Badge>
    <Badge size="xl">Badge</Badge>
  </div>
);

export const Rounded = () => (
  <div className="flex items-center justify-around gap-3">
    <Badge rounded="none">Badge</Badge>
    <Badge rounded="sm">Badge</Badge>
    <Badge rounded="md">Badge</Badge>
    <Badge rounded="lg">Badge</Badge>
    <Badge>Badge</Badge>
  </div>
);

export const Dot = () => (
  <div className="flex flex-col gap-6 text-sm">
    <div className="flex items-center gap-2">
      <Badge renderAsDot />
      <Text>Default</Text>
    </div>
    <div className="flex items-center gap-2">
      <Badge renderAsDot color="primary" />
      <Text>Primary</Text>
    </div>
    <div className="flex items-center gap-2">
      <Badge renderAsDot color="secondary" />
      <Text>Secondary</Text>
    </div>
    <div className="flex items-center gap-2">
      <Badge renderAsDot color="danger" />
      <Text>Danger</Text>
    </div>
    <div className="flex items-center gap-2">
      <Badge renderAsDot color="warning" />
      <Text>Warning</Text>
    </div>
    <div className="flex items-center gap-2">
      <Badge renderAsDot color="success" />
      <Text>Success</Text>
    </div>
    <div className="flex items-center gap-2">
      <Badge renderAsDot color="info" />
      <Text>Info</Text>
    </div>
  </div>
);

export const WithIcon = () => (
  <div className="flex items-center justify-around gap-3">
    <div className="relative inline-flex">
      <ShoppingBagIcon className="h-auto w-8" strokeWidth={1.2} />
      <Badge
        size="sm"
        enableOutlineRing
        className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/2"
      >
        99
      </Badge>
    </div>
    <div className="relative ml-3 inline-flex">
      <ShoppingCartIcon className="h-auto w-8" strokeWidth={1.2} />
      <Badge
        size="sm"
        color="success"
        enableOutlineRing
        className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/2"
      >
        99+
      </Badge>
    </div>
    <div className="relative ml-3 inline-flex">
      <ShoppingBagIcon className="h-auto w-8" strokeWidth={1.2} />
      <Badge
        size="sm"
        color="danger"
        enableOutlineRing
        className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/2"
      >
        999+
      </Badge>
    </div>
  </div>
);

export const WithAvatar = () => (
  <div className="flex items-center justify-around gap-3">
    <div className="relative inline-flex">
      <Avatar
        size="48px"
        src="https://randomuser.me/api/portraits/women/40.jpg"
      />
      <Badge
        size="lg"
        renderAsDot
        color="success"
        enableOutlineRing
        className="absolute right-0 top-0 -translate-y-[25%]"
      />
    </div>
    <div className="relative ml-3 inline-flex">
      <Avatar
        size="48px"
        src="https://randomuser.me/api/portraits/women/43.jpg"
      />
      <Badge
        size="lg"
        renderAsDot
        color="danger"
        enableOutlineRing
        className="absolute right-0 bottom-0 -translate-y-[25%]"
      />
    </div>
    <div className="relative ml-3 inline-flex">
      <Avatar
        size="48px"
        src="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Badge
        size="lg"
        renderAsDot
        color="warning"
        enableOutlineRing
        className="absolute right-0 top-0 -translate-y-[30%]"
      />
    </div>
  </div>
);

export const Colors = () => (
  <div className="grid gap-9 py-4">
    <div className="flex items-center justify-around gap-3">
      <Badge variant="outline">Default</Badge>
      <Badge variant="outline" color="primary">
        Primary
      </Badge>
      <Badge variant="outline" color="secondary">
        Secondary
      </Badge>
      <Badge variant="outline" color="danger">
        Danger
      </Badge>
      <Badge variant="outline" color="warning">
        Warning
      </Badge>
      <Badge variant="outline" color="success">
        Success
      </Badge>
      <Badge variant="outline" color="info">
        Info
      </Badge>
    </div>
    {/* End of outline variants */}
    <div className="flex items-center justify-around gap-3">
      <Badge variant="flat">Default</Badge>
      <Badge variant="flat" color="primary">
        Primary
      </Badge>
      <Badge variant="flat" color="secondary">
        Secondary
      </Badge>
      <Badge variant="flat" color="danger">
        Danger
      </Badge>
      <Badge variant="flat" color="warning">
        Warning
      </Badge>
      <Badge variant="flat" color="success">
        Success
      </Badge>
      <Badge variant="flat" color="info">
        Info
      </Badge>
    </div>
    {/* End of flat variants */}
    <div className="flex items-center justify-around gap-3">
      <Badge>Default</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="info">Info</Badge>
    </div>
    {/* End of solid/default variants */}
  </div>
);
