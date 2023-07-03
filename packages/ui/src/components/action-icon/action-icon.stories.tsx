// action-icon.stories.ts|tsx
import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ActionIcon from './action-icon';

export default {
  title: 'Components/ActionIcon',
  component: ActionIcon,
  parameters: {
    viewMode: 'docs',
  },
  // @ts-ignore
} as ComponentMeta<typeof ActionIcon>;

function FilterIcon({ className = 'h-auto w-5' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      />
    </svg>
  );
}

// @ts-ignore
const Template: ComponentStory<typeof ActionIcon> = (args) => (
  // @ts-ignore
  <ActionIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <FilterIcon />,
};

export const Variants = () => (
  <div className="flex items-center justify-around gap-3">
    <ActionIcon variant="text">
      <FilterIcon />
    </ActionIcon>
    <ActionIcon variant="outline">
      <FilterIcon />
    </ActionIcon>
    <ActionIcon variant="flat">
      <FilterIcon />
    </ActionIcon>
    <ActionIcon variant="solid">
      <FilterIcon />
    </ActionIcon>
  </div>
);

export const Sizes = () => (
  <div className="flex items-center justify-around gap-3">
    <ActionIcon size="sm">
      <FilterIcon className="w-4" />
    </ActionIcon>
    <ActionIcon>
      <FilterIcon />
    </ActionIcon>
    <ActionIcon size="lg">
      <FilterIcon className="w-6" />
    </ActionIcon>
    <ActionIcon size="xl">
      <FilterIcon className="w-7" />
    </ActionIcon>
  </div>
);

export const Rounded = () => (
  <div className="flex items-center justify-around gap-3">
    <ActionIcon rounded="none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-auto w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    </ActionIcon>
    <ActionIcon rounded="sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-auto w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
        />
      </svg>
    </ActionIcon>
    <ActionIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-auto w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </ActionIcon>
    <ActionIcon rounded="lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-auto w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
        />
      </svg>
    </ActionIcon>
    <ActionIcon rounded="full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-auto w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
    </ActionIcon>
  </div>
);

export const Loading = () => (
  <div className="flex items-center justify-around gap-3">
    <ActionIcon isLoading>
      <FilterIcon />
    </ActionIcon>
    <ActionIcon color="primary" isLoading>
      <FilterIcon />
    </ActionIcon>
    <ActionIcon color="secondary" isLoading>
      <FilterIcon />
    </ActionIcon>
    <ActionIcon color="info" isLoading>
      <FilterIcon />
    </ActionIcon>
    <ActionIcon color="warning" isLoading>
      <FilterIcon />
    </ActionIcon>
    <ActionIcon color="danger" isLoading>
      <FilterIcon />
    </ActionIcon>
    <ActionIcon color="success" isLoading>
      <FilterIcon />
    </ActionIcon>
  </div>
);

export const Colors = () => (
  <div className="grid gap-5">
    <div className="flex items-center justify-around gap-3">
      <ActionIcon variant="text">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="text" color="primary">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="text" color="secondary">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="text" color="info">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="text" color="warning">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="text" color="danger">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="text" color="success">
        <FilterIcon />
      </ActionIcon>
    </div>
    {/* End of text variants */}
    <div className="flex items-center justify-around gap-3">
      <ActionIcon variant="outline">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="outline" color="primary">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="outline" color="secondary">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="outline" color="info">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="outline" color="warning">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="outline" color="danger">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="outline" color="success">
        <FilterIcon />
      </ActionIcon>
    </div>
    {/* End of outline variants */}
    <div className="flex items-center justify-around gap-3">
      <ActionIcon variant="flat">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="flat" color="primary">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="flat" color="secondary">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="flat" color="info">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="flat" color="warning">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="flat" color="danger">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon variant="flat" color="success">
        <FilterIcon />
      </ActionIcon>
    </div>
    {/* End of flat variants */}
    <div className="flex items-center justify-around gap-3">
      <ActionIcon>
        <FilterIcon />
      </ActionIcon>
      <ActionIcon color="primary">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon color="secondary">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon color="info">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon color="warning">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon color="danger">
        <FilterIcon />
      </ActionIcon>
      <ActionIcon color="success">
        <FilterIcon />
      </ActionIcon>
    </div>
    {/* End of solid/default variants */}
  </div>
);
