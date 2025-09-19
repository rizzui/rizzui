import { ColorName, TAILWIND_COLORS, hexToRgb } from '../utils/colors';

export interface GlobalCssOptions {
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

  // Convert hex colors to RGB format for CSS variables
  const getRgbFromHex = (hex: string) => {
    return hexToRgb(hex);
  };

  const getColorValue = (colorName: ColorName, shade: number) => {
    const colorValue = TAILWIND_COLORS[colorName][shade as keyof typeof TAILWIND_COLORS[ColorName]];
    return getRgbFromHex(colorValue);
  };

  const primaryColor = customColors?.primary || 'gray';
  const secondaryColor = customColors?.secondary || 'indigo';
  const dangerColor = customColors?.danger || 'red';
  const warningColor = customColors?.warning || 'amber';
  const infoColor = customColors?.info || 'sky';
  const successColor = customColors?.success || 'emerald';

  let css = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* --------------------------------- */
  /* light theme */
  /* --------------------------------- */
  :root {
    --background: 255 255 255; /* #ffffff */
    --foreground: 72 72 72; /* #484848 */
    --muted: 227 227 227; /* #e3e3e3 */
    --muted-foreground: 146 146 146; /* #929292 */

    /*
    * primary colors
    */
    --primary-lighter: ${getColorValue(primaryColor, 200)}; /* ${TAILWIND_COLORS[primaryColor][200]} */
    --primary-default: ${getColorValue(primaryColor, 800)}; /* ${TAILWIND_COLORS[primaryColor][800]} */
    --primary-dark: ${getColorValue(primaryColor, 950)}; /* ${TAILWIND_COLORS[primaryColor][950]} */
    --primary-foreground: 255 255 255; /* #ffffff */

    /*
    * secondary colors
    */
    --secondary-lighter: ${getColorValue(secondaryColor, 200)}; /* ${TAILWIND_COLORS[secondaryColor][200]} */
    --secondary-default: ${getColorValue(secondaryColor, 500)}; /* ${TAILWIND_COLORS[secondaryColor][500]} */
    --secondary-dark: ${getColorValue(secondaryColor, 700)}; /* ${TAILWIND_COLORS[secondaryColor][700]} */
    --secondary-foreground: 255 255 255; /* #ffffff */

    /*
    * danger colors
    */
    --red-lighter: ${getColorValue(dangerColor, 200)}; /* ${TAILWIND_COLORS[dangerColor][200]} */
    --red-default: ${getColorValue(dangerColor, 500)}; /* ${TAILWIND_COLORS[dangerColor][500]} */
    --red-dark: ${getColorValue(dangerColor, 700)}; /* ${TAILWIND_COLORS[dangerColor][700]} */

    /*
    * warning colors
    */
    --orange-lighter: ${getColorValue(warningColor, 200)}; /* ${TAILWIND_COLORS[warningColor][200]} */
    --orange-default: ${getColorValue(warningColor, 500)}; /* ${TAILWIND_COLORS[warningColor][500]} */
    --orange-dark: ${getColorValue(warningColor, 700)}; /* ${TAILWIND_COLORS[warningColor][700]} */

    /*
    * info colors
    */
    --blue-lighter: ${getColorValue(infoColor, 200)}; /* ${TAILWIND_COLORS[infoColor][200]} */
    --blue-default: ${getColorValue(infoColor, 500)}; /* ${TAILWIND_COLORS[infoColor][500]} */
    --blue-dark: ${getColorValue(infoColor, 700)}; /* ${TAILWIND_COLORS[infoColor][700]} */

    /*
    * success colors
    */
    --green-lighter: ${getColorValue(successColor, 200)}; /* ${TAILWIND_COLORS[successColor][200]} */
    --green-default: ${getColorValue(successColor, 500)}; /* ${TAILWIND_COLORS[successColor][500]} */
    --green-dark: ${getColorValue(successColor, 700)}; /* ${TAILWIND_COLORS[successColor][700]} */
  }`;

  if (isDarkMode) {
    css += `

  /* --------------------------------- */
  /* dark theme */
  /* --------------------------------- */
  [data-theme='dark'] {
    --background: 8 9 14; /* #08090e */
    --foreground: 223 223 223; /* #dfdfdf */
    --muted: 51 51 51; /* #333333 */
    --muted-foreground: 102 102 102; /* #666666 */

    /*
    * primary colors
    */
    --primary-lighter: ${getColorValue(primaryColor, 800)}; /* ${TAILWIND_COLORS[primaryColor][800]} */
    --primary-default: ${getColorValue(primaryColor, 100)}; /* ${TAILWIND_COLORS[primaryColor][100]} */
    --primary-dark: ${getColorValue(primaryColor, 50)}; /* ${TAILWIND_COLORS[primaryColor][50]} */
    --primary-foreground: 0 0 0; /* #000000 */

    /*
    * secondary colors
    */
    --secondary-lighter: ${getColorValue(secondaryColor, 900)}; /* ${TAILWIND_COLORS[secondaryColor][900]} */
    --secondary-dark: ${getColorValue(secondaryColor, 300)}; /* ${TAILWIND_COLORS[secondaryColor][300]} */

    /*
    * danger colors
    */
    --red-lighter: ${getColorValue(dangerColor, 900)}; /* ${TAILWIND_COLORS[dangerColor][900]} */
    --red-dark: ${getColorValue(dangerColor, 300)}; /* ${TAILWIND_COLORS[dangerColor][300]} */

    /*
    * warning colors
    */
    --orange-lighter: ${getColorValue(warningColor, 900)}; /* ${TAILWIND_COLORS[warningColor][900]} */
    --orange-dark: ${getColorValue(warningColor, 300)}; /* ${TAILWIND_COLORS[warningColor][300]} */

    /*
    * info colors
    */
    --blue-lighter: ${getColorValue(infoColor, 900)}; /* ${TAILWIND_COLORS[infoColor][900]} */
    --blue-dark: ${getColorValue(infoColor, 300)}; /* ${TAILWIND_COLORS[infoColor][300]} */

    /*
    * success colors
    */
    --green-lighter: ${getColorValue(successColor, 900)}; /* ${TAILWIND_COLORS[successColor][900]} */
    --green-dark: ${getColorValue(successColor, 300)}; /* ${TAILWIND_COLORS[successColor][300]} */

    /* here you can customize other colors for dark theme if design required */
  }`;
  }

  css += '\n}';

  return css;
}