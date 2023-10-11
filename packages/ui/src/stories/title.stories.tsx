// switch.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Title, Text } from '../components/typography';

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Title>;

export const Default = () => (
  <Title>The brown fox jumps over the lazy dog</Title>
);

export const Titles = () => (
  <div className="grid gap-8 py-2">
    <div>
      <Text as="span" className="tracking-wider text-gray-500">
        h1
      </Text>
      <Title as="h1">The brown fox jumps over the lazy dog</Title>
    </div>
    <div>
      <Text as="span" className="tracking-wider text-gray-500">
        h2
      </Text>
      <Title as="h2">The brown fox jumps over the lazy dog</Title>
    </div>
    <div>
      <Text as="span" className="tracking-wider text-gray-500">
        h3
      </Text>
      <Title as="h3">The brown fox jumps over the lazy dog</Title>
    </div>
    <div>
      <Text as="span" className="tracking-wider text-gray-500">
        h4
      </Text>
      <Title as="h4">The brown fox jumps over the lazy dog</Title>
    </div>
    <div>
      <Text as="span" className="tracking-wider text-gray-500">
        h5
      </Text>
      <Title as="h5">The brown fox jumps over the lazy dog</Title>
    </div>
    <div>
      <Text as="span" className="tracking-wider text-gray-500">
        h6
      </Text>
      <Title as="h6">The brown fox jumps over the lazy dog</Title>
    </div>
  </div>
);
