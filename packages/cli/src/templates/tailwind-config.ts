import { ColorName, TAILWIND_COLORS } from '../utils/colors';

export type ThemeOption = 'default-light' | 'default-with-dark' | 'custom-light' | 'custom-with-dark';

export interface TailwindConfigOptions {
  themeOption: ThemeOption;
  isDarkMode: boolean;
  customColors?: {
    primary?: ColorName;
    secondary?: ColorName;
    danger?: ColorName;
    warning?: ColorName;
    info?: ColorName;
    success?: ColorName;
  };
}

export function generatePostCSSConfig() {
  return `const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`;
}