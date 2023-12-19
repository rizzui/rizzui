// switch.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Text } from '../components/typography/text';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Text>;

export const Default = () => <Text>The brown fox jumps over the lazy dog</Text>;

export const Typography = () => (
  <div className="grid gap-8 py-2">
    <div>
      <Text as="span" className="tracking-wider">
        p
      </Text>
      <Text as="p">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider">
        i
      </Text>
      <Text as="i">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider">
        del
      </Text>
      <Text as="del">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider">
        mark
      </Text>
      <Text as="mark">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider">
        b
      </Text>
      <Text as="b">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider">
        em
      </Text>
      <Text as="em">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider">
        strong
      </Text>
      <Text as="strong">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider">
        small
      </Text>
      <Text as="small">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider">
        abbr
      </Text>
      <Text as="abbr" title="Hello World!">
        HW
      </Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider">
        q
      </Text>
      <Text as="q">The brown fox jumps over the lazy dog</Text>
    </div>
    <div>
      <Text as="span" className="tracking-wider">
        kbd
      </Text>
      <div className="mt-2 grid gap-5">
        <Text as="p">
          Please press <Text as="kbd">Ctrl</Text> + <Text as="kbd">Shift</Text>{' '}
          + <Text as="kbd">R</Text> to reload this page.
        </Text>
      </div>
    </div>
    <div>
      <Text as="span" className="tracking-wider">
        sup
      </Text>
      <Text as="p">
        (a+b)<Text as="sup">2</Text> = a<Text as="sup">2</Text> + 2ab + b
        <Text as="sup">2</Text>
      </Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider">
        sub
      </Text>
      <Text as="em">
        ∑𝐹 = ρ𝑄(𝓥<Text as="sub">out</Text> &nbsp;-&nbsp; 𝓥
        <Text as="sub">in</Text>)
      </Text>
    </div>
  </div>
);
