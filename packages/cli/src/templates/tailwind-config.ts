export type ThemeOption = 'default-light' | 'default-with-dark';

export interface TailwindConfigOptions {
  themeOption: ThemeOption;
  isDarkMode: boolean;
}

export function generatePostCSSConfig() {
  return `const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;`;
}
