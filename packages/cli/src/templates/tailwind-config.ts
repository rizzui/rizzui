import { ColorName, TAILWIND_COLORS } from '../utils/colors';

export interface TailwindConfigOptions {
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

export function generateTailwindConfig(options: TailwindConfigOptions) {
  const { isDarkMode, customColors } = options;

  const lightModeColors = {
    background: 'rgb(255 255 255)',
    foreground: 'rgb(72 72 72)',
    muted: 'rgb(227 227 227)',
    'muted-foreground': 'rgb(146 146 146)',
    primary: {
      lighter: customColors?.primary ? `rgb(${Object.values(TAILWIND_COLORS[customColors.primary])[1]})` : 'rgb(227 227 227)',
      DEFAULT: customColors?.primary ? `rgb(${Object.values(TAILWIND_COLORS[customColors.primary])[7]})` : 'rgb(34 34 34)',
      dark: customColors?.primary ? `rgb(${Object.values(TAILWIND_COLORS[customColors.primary])[8]})` : 'rgb(0 0 0)',
      foreground: 'rgb(255 255 255)',
    },
    secondary: {
      lighter: customColors?.secondary ? `rgb(${Object.values(TAILWIND_COLORS[customColors.secondary])[1]})` : 'rgb(221 227 255)',
      DEFAULT: customColors?.secondary ? `rgb(${Object.values(TAILWIND_COLORS[customColors.secondary])[5]})` : 'rgb(78 54 245)',
      dark: customColors?.secondary ? `rgb(${Object.values(TAILWIND_COLORS[customColors.secondary])[6]})` : 'rgb(67 42 216)',
      foreground: 'rgb(255 255 255)',
    },
    red: {
      lighter: customColors?.danger ? `rgb(${Object.values(TAILWIND_COLORS[customColors.danger])[1]})` : 'rgb(247 212 214)',
      DEFAULT: customColors?.danger ? `rgb(${Object.values(TAILWIND_COLORS[customColors.danger])[5]})` : 'rgb(238 0 0)',
      dark: customColors?.danger ? `rgb(${Object.values(TAILWIND_COLORS[customColors.danger])[6]})` : 'rgb(197 0 0)',
    },
    orange: {
      lighter: customColors?.warning ? `rgb(${Object.values(TAILWIND_COLORS[customColors.warning])[1]})` : 'rgb(255 239 207)',
      DEFAULT: customColors?.warning ? `rgb(${Object.values(TAILWIND_COLORS[customColors.warning])[5]})` : 'rgb(245 166 35)',
      dark: customColors?.warning ? `rgb(${Object.values(TAILWIND_COLORS[customColors.warning])[6]})` : 'rgb(171 87 10)',
    },
    blue: {
      lighter: customColors?.info ? `rgb(${Object.values(TAILWIND_COLORS[customColors.info])[1]})` : 'rgb(211 229 255)',
      DEFAULT: customColors?.info ? `rgb(${Object.values(TAILWIND_COLORS[customColors.info])[5]})` : 'rgb(0 112 243)',
      dark: customColors?.info ? `rgb(${Object.values(TAILWIND_COLORS[customColors.info])[6]})` : 'rgb(7 97 209)',
    },
    green: {
      lighter: customColors?.success ? `rgb(${Object.values(TAILWIND_COLORS[customColors.success])[1]})` : 'rgb(185 249 207)',
      DEFAULT: customColors?.success ? `rgb(${Object.values(TAILWIND_COLORS[customColors.success])[5]})` : 'rgb(17 168 73)',
      dark: customColors?.success ? `rgb(${Object.values(TAILWIND_COLORS[customColors.success])[6]})` : 'rgb(17 132 60)',
    },
  };

  const config: any = {
    content: [
      './node_modules/rizzui/dist/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: isDarkMode ? {
          background: 'rgb(var(--background) / <alpha-value>)',
          foreground: 'rgb(var(--foreground) / <alpha-value>)',
          muted: 'rgb(var(--muted) / <alpha-value>)',
          'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
          primary: {
            lighter: 'rgb(var(--primary-lighter) / <alpha-value>)',
            DEFAULT: 'rgb(var(--primary-default) / <alpha-value>)',
            dark: 'rgb(var(--primary-dark) / <alpha-value>)',
            foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
          },
          secondary: {
            lighter: 'rgb(var(--secondary-lighter) / <alpha-value>)',
            DEFAULT: 'rgb(var(--secondary-default) / <alpha-value>)',
            dark: 'rgb(var(--secondary-dark) / <alpha-value>)',
            foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
          },
          red: {
            lighter: 'rgb(var(--red-lighter) / <alpha-value>)',
            DEFAULT: 'rgb(var(--red-default) / <alpha-value>)',
            dark: 'rgb(var(--red-dark) / <alpha-value>)',
          },
          orange: {
            lighter: 'rgb(var(--orange-lighter) / <alpha-value>)',
            DEFAULT: 'rgb(var(--orange-default) / <alpha-value>)',
            dark: 'rgb(var(--orange-dark) / <alpha-value>)',
          },
          blue: {
            lighter: 'rgb(var(--blue-lighter) / <alpha-value>)',
            DEFAULT: 'rgb(var(--blue-default) / <alpha-value>)',
            dark: 'rgb(var(--blue-dark) / <alpha-value>)',
          },
          green: {
            lighter: 'rgb(var(--green-lighter) / <alpha-value>)',
            DEFAULT: 'rgb(var(--green-default) / <alpha-value>)',
            dark: 'rgb(var(--green-dark) / <alpha-value>)',
          },
        } : lightModeColors,
      },
    },
    plugins: ['@tailwindcss/forms'],
  };

  if (isDarkMode) {
    config.darkMode = ['class', '[data-theme="dark"]'];
  }

  return config;
}