// .storybook/main.js

const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  // generate extended prop args table
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript-plugin',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   shouldRemoveUndefinedFromOptional: true,
    //   propFilter: (prop) => {
    //     return prop.parent
    //       ? prop.parent.name !== 'DOMAttributes' &&
    //           prop.parent.name !== 'HTMLAttributes' &&
    //           prop.parent.name !== 'AriaAttributes' &&
    //           prop.parent.name !== 'InputHTMLAttributes' &&
    //           prop.parent.name !== 'ButtonHTMLAttributes'
    //       : true;
    //   },
    // },
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: 'postcss-loader',
          options: { implementation: require.resolve('postcss') },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
