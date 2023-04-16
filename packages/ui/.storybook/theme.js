import { create } from '@storybook/theming';
import logo from './rizz-logo.svg';

export default create({
  base: 'light',

  colorSecondary: '#222222',

  // UI
  appBg: '#f1f1f1',
  appContentBg: '#ffffff',

  // Typography
  fontBase: '"Inter", sans-serif',

  // brand
  brandTitle: 'Rizz',
  brandUrl: 'https://rizz-storybook.vercel.app/',
  brandImage: logo,
});
