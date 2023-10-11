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
      <Text as="span" className="tracking-wider text-gray-500">
        p
      </Text>
      <Text as="p">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        i
      </Text>
      <Text as="i">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        del
      </Text>
      <Text as="del">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        mark
      </Text>
      <Text as="mark">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        b
      </Text>
      <Text as="b">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        em
      </Text>
      <Text as="em">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        strong
      </Text>
      <Text as="strong">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        small
      </Text>
      <Text as="small">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        abbr
      </Text>
      <Text as="abbr" title="Hello World!">
        HW
      </Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        q
      </Text>
      <Text as="q">The brown fox jumps over the lazy dog</Text>
    </div>
    <div className="grid gap-1">
      <Text as="span" className="tracking-wider text-gray-500">
        blockquote
      </Text>
      <Text as="blockquote">
        Before going to sleep every night, <br /> forgive everyone and sleep
        with a clean heart.
      </Text>
    </div>
    <div>
      <Text as="span" className="tracking-wider text-gray-500">
        kbd
      </Text>
      <div className="mt-2 grid gap-5">
        <div className="flex items-end gap-1">
          <Text as="kbd">
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z" />
            </svg>
            <span className="sr-only">Arrow key left</span>
          </Text>
          <div className="grid gap-1">
            <Text as="kbd">
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" />
              </svg>
              <span className="sr-only">Arrow key up</span>
            </Text>
            <Text as="kbd">
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
              </svg>
              <span className="sr-only">Arrow key down</span>
            </Text>
          </div>
          <Text as="kbd">
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
            </svg>
            <span className="sr-only">Arrow key right</span>
          </Text>
        </div>
        <Text as="p">
          Please press <Text as="kbd">Ctrl</Text> + <Text as="kbd">Shift</Text>{' '}
          +<Text as="kbd">R</Text> to reload this page.
        </Text>
      </div>
    </div>
    <div>
      <Text as="span" className="tracking-wider text-gray-500">
        sup
      </Text>
      <Text as="p">
        (a+b)
        <Text as="sup">2</Text> = a<Text as="sup">2</Text> + 2ab + b
        <Text as="sup">2</Text>
      </Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        sub
      </Text>
      <Text as="em">
        ∑𝐹 = ρ𝑄(𝓥
        <Text as="sub">out</Text> &nbsp;-&nbsp; 𝓥
        <Text as="sub">in</Text>)
      </Text>
    </div>
    <div>
      <Text as="span" className="mb-2 block tracking-wider text-gray-500">
        code
      </Text>
      <Text as="code">background-color: #000000</Text>
    </div>
    <div className="grid">
      <Text as="span" className="tracking-wider text-gray-500">
        pre
      </Text>
      <Text as="pre">
        &lt;html&gt; <br />
        &nbsp;&nbsp;&lt;head&gt; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Welcome to
        campuslife.&lt;/title&gt; <br />
        &nbsp;&nbsp;&lt;/head&gt; <br />
        &nbsp;&nbsp;&lt;body&gt; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Campuslife Wesbite&lt;/h1&gt; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;My first page.&lt;/h2&gt; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Campuslife is a free learning source
        website for users. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt; <br />
        &nbsp;&nbsp;&lt;/body&gt; <br />
        &lt;/html&gt;
      </Text>
    </div>
  </div>
);
