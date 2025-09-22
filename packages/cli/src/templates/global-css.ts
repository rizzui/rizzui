import { ColorName, TAILWIND_COLORS, hexToRgb } from '../utils/colors';
import { ThemeOption } from './tailwind-config';

export interface GlobalCssOptions {
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

export function generateGlobalCss(options: GlobalCssOptions): string {
  const { isDarkMode, customColors } = options;

  const primaryColor = customColors?.primary || 'gray';
  const secondaryColor = customColors?.secondary || 'indigo';
  const dangerColor = customColors?.danger || 'red';
  const warningColor = customColors?.warning || 'amber';
  const infoColor = customColors?.info || 'sky';
  const successColor = customColors?.success || 'emerald';

  let css = `@import "tailwindcss";

/* RizzUI Theme Configuration */
@theme {
  /* Color Palette */
  --color-background: #ffffff;
  --color-foreground: #484848;
  --color-muted: #e3e3e3;
  --color-muted-foreground: #929292;

  /* Primary Colors */
  --color-primary-lighter: ${TAILWIND_COLORS[primaryColor][200]};
  --color-primary: ${TAILWIND_COLORS[primaryColor][800]};
  --color-primary-dark: ${TAILWIND_COLORS[primaryColor][950]};
  --color-primary-foreground: #ffffff;

  /* Secondary Colors */
  --color-secondary-lighter: ${TAILWIND_COLORS[secondaryColor][200]};
  --color-secondary: ${TAILWIND_COLORS[secondaryColor][500]};
  --color-secondary-dark: ${TAILWIND_COLORS[secondaryColor][700]};
  --color-secondary-foreground: #ffffff;

  /* Danger Colors */
  --color-red-lighter: ${TAILWIND_COLORS[dangerColor][200]};
  --color-red: ${TAILWIND_COLORS[dangerColor][500]};
  --color-red-dark: ${TAILWIND_COLORS[dangerColor][700]};

  /* Warning Colors */
  --color-orange-lighter: ${TAILWIND_COLORS[warningColor][200]};
  --color-orange: ${TAILWIND_COLORS[warningColor][500]};
  --color-orange-dark: ${TAILWIND_COLORS[warningColor][700]};

  /* Info Colors */
  --color-blue-lighter: ${TAILWIND_COLORS[infoColor][200]};
  --color-blue: ${TAILWIND_COLORS[infoColor][500]};
  --color-blue-dark: ${TAILWIND_COLORS[infoColor][700]};

  /* Success Colors */
  --color-green-lighter: ${TAILWIND_COLORS[successColor][200]};
  --color-green: ${TAILWIND_COLORS[successColor][500]};
  --color-green-dark: ${TAILWIND_COLORS[successColor][700]};
}`;

  if (isDarkMode) {
    css += `

/* Dark Mode Theme Variables */
@media (prefers-color-scheme: dark) {
  @theme {
    --color-background: #08090e;
    --color-foreground: #dfdfdf;
    --color-muted: #333333;
    --color-muted-foreground: #666666;

    /* Primary Colors - Dark Mode */
    --color-primary-lighter: ${TAILWIND_COLORS[primaryColor][800]};
    --color-primary: ${TAILWIND_COLORS[primaryColor][100]};
    --color-primary-dark: ${TAILWIND_COLORS[primaryColor][50]};
    --color-primary-foreground: #000000;

    /* Secondary Colors - Dark Mode */
    --color-secondary-lighter: ${TAILWIND_COLORS[secondaryColor][900]};
    --color-secondary-dark: ${TAILWIND_COLORS[secondaryColor][300]};

    /* Danger Colors - Dark Mode */
    --color-red-lighter: ${TAILWIND_COLORS[dangerColor][900]};
    --color-red-dark: ${TAILWIND_COLORS[dangerColor][300]};

    /* Warning Colors - Dark Mode */
    --color-orange-lighter: ${TAILWIND_COLORS[warningColor][900]};
    --color-orange-dark: ${TAILWIND_COLORS[warningColor][300]};

    /* Info Colors - Dark Mode */
    --color-blue-lighter: ${TAILWIND_COLORS[infoColor][900]};
    --color-blue-dark: ${TAILWIND_COLORS[infoColor][300]};

    /* Success Colors - Dark Mode */
    --color-green-lighter: ${TAILWIND_COLORS[successColor][900]};
    --color-green-dark: ${TAILWIND_COLORS[successColor][300]};
  }
}

/* Manual Dark Mode Toggle Support */
[data-theme='dark'] {
  color-scheme: dark;
}

[data-theme='dark'] * {
  --color-background: #08090e;
  --color-foreground: #dfdfdf;
  --color-muted: #333333;
  --color-muted-foreground: #666666;

  /* Primary Colors - Dark Mode */
  --color-primary-lighter: ${TAILWIND_COLORS[primaryColor][800]};
  --color-primary: ${TAILWIND_COLORS[primaryColor][100]};
  --color-primary-dark: ${TAILWIND_COLORS[primaryColor][50]};
  --color-primary-foreground: #000000;

  /* Secondary Colors - Dark Mode */
  --color-secondary-lighter: ${TAILWIND_COLORS[secondaryColor][900]};
  --color-secondary-dark: ${TAILWIND_COLORS[secondaryColor][300]};

  /* Danger Colors - Dark Mode */
  --color-red-lighter: ${TAILWIND_COLORS[dangerColor][900]};
  --color-red-dark: ${TAILWIND_COLORS[dangerColor][300]};

  /* Warning Colors - Dark Mode */
  --color-orange-lighter: ${TAILWIND_COLORS[warningColor][900]};
  --color-orange-dark: ${TAILWIND_COLORS[warningColor][300]};

  /* Info Colors - Dark Mode */
  --color-blue-lighter: ${TAILWIND_COLORS[infoColor][900]};
  --color-blue-dark: ${TAILWIND_COLORS[infoColor][300]};

  /* Success Colors - Dark Mode */
  --color-green-lighter: ${TAILWIND_COLORS[successColor][900]};
  --color-green-dark: ${TAILWIND_COLORS[successColor][300]};
}`;
  }

  return css;
}