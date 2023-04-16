import { addons } from '@storybook/addons';
import theme from './theme';

// set default sidebar width
const storybookLayout = JSON.parse(localStorage["storybook-layout"] || '{}');
const newLayout = { resizerNav: { x: 290, y: 0 }};
localStorage["storybook-layout"] = JSON.stringify({...storybookLayout, ...newLayout});

addons.setConfig({
  theme: theme
});