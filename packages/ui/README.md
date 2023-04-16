# Rizz

A modern and minimal React UI library built with TailwindCSS. Designed to provide you with a simple and intuitive set of UI components that are easy to use, customize and integrate into your React Application. We have carefully crafted each component to ensure that they are responsive, accessible and consistent across different devices and browsers.

## Installation

We need to install TailwindCSS first. Please run this following command:

```ssh
npm install -D tailwindCSS postcss autoprefixer @tailwindcss/forms
```

Follow their official guide to install [TailwindCSS](https://tailwindcss.com/docs/installation) 

&nbsp;

## Configure tailwind.config.js 

You need to copy and paste our tailwind.config.js 

```js
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}', // The content section of your tailwind.config.js file is where you configure the paths to all of your HTML templates, JavaScript components, and any other source files that contain Tailwind class names

		'../node_modules/aegon-ui/dist/*.{js,ts,jsx,tsx}', // must use this line to compile and generate our Rizz components style
	],
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			current: 'currentColor',
			transparent: 'transparent',
      /*
       * you can use hex code color value unless you want light and dark mode color scheme, 
       * we are using css variables for light and dark mode color scheme
       */
			gray: {
				0: 'rgb(var(--gray-0) / <alpha-value>)',
				50: 'rgb(var(--gray-50) / <alpha-value>)',
				100: 'rgb(var(--gray-100) / <alpha-value>)',
				200: 'rgb(var(--gray-200) / <alpha-value>)',
				300: 'rgb(var(--gray-300) / <alpha-value>)',
				400: 'rgb(var(--gray-400) / <alpha-value>)',
				500: 'rgb(var(--gray-500) / <alpha-value>)',
				600: 'rgb(var(--gray-600) / <alpha-value>)',
				700: 'rgb(var(--gray-700) / <alpha-value>)',
				800: 'rgb(var(--gray-800) / <alpha-value>)',
				900: 'rgb(var(--gray-900) / <alpha-value>)',
				1000: 'rgb(var(--gray-1000) / <alpha-value>)',
			},
			primary: {
				lighter: 'rgb(var(--primary-lighter) / <alpha-value>)',
				light: 'rgb(var(--primary-light) / <alpha-value>)',
				DEFAULT: 'rgb(var(--primary-default) / <alpha-value>)',
				dark: 'rgb(var(--primary-dark) / <alpha-value>)',
			},
			secondary: {
				lighter: 'rgb(var(--secondary-lighter) / <alpha-value>)',
				light: 'rgb(var(--secondary-light) / <alpha-value>)',
				DEFAULT: 'rgb(var(--secondary-default) / <alpha-value>)',
				dark: 'rgb(var(--secondary-dark) / <alpha-value>)',
			},
			red: {
				lighter: 'rgb(var(--red-lighter) / <alpha-value>)',
				light: 'rgb(var(--red-light) / <alpha-value>)',
				DEFAULT: 'rgb(var(--red-default) / <alpha-value>)',
				dark: 'rgb(var(--red-dark) / <alpha-value>)',
			},
			orange: {
				lighter: 'rgb(var(--orange-lighter) / <alpha-value>)',
				light: 'rgb(var(--orange-light) / <alpha-value>)',
				DEFAULT: 'rgb(var(--orange-default) / <alpha-value>)',
				dark: 'rgb(var(--orange-dark) / <alpha-value>)',
			},
			blue: {
				lighter: 'rgb(var(--blue-lighter) / <alpha-value>)',
				light: 'rgb(var(--blue-light) / <alpha-value>)',
				DEFAULT: 'rgb(var(--blue-default) / <alpha-value>)',
				dark: 'rgb(var(--blue-dark) / <alpha-value>)',
			},
			green: {
				lighter: 'rgb(var(--green-lighter) / <alpha-value>)',
				light: 'rgb(var(--green-light) / <alpha-value>)',
				DEFAULT: 'rgb(var(--green-default) / <alpha-value>)',
				dark: 'rgb(var(--green-dark) / <alpha-value>)',
			},
		},
		extend: {
			// customize your site's typography hierarchy 
			fontSize: {
				h1: [
					'2.25rem',
					{
						lineHeight: '2.5rem',
						fontWeight: '700',
					},
				],
				h2: [
					'1.875rem',
					{
						lineHeight: '2.25rem',
						fontWeight: '700',
					},
				],
				h3: [
					'1.5rem',
					{
						lineHeight: '2rem',
						fontWeight: '700',
					},
				],
				h4: [
					'1.25rem',
					{
						lineHeight: '1.75rem',
						fontWeight: '700',
					},
				],
				h5: [
					'1.125rem',
					{
						lineHeight: '1.5rem',
						fontWeight: '700',
					},
				],
				h6: [
					'1rem',
					{
						lineHeight: '1rem',
						fontWeight: '700',
					},
				],
				quote: [
					'1.125rem',
					{
						lineHeight: '1.75rem',
						fontWeight: '600',
					},
				],
			},
      // using these animations on our loader
			animation: {
				blink: 'blink 1.4s infinite both;',
				'scale-up': 'scaleUp 500ms infinite alternate',
			},
			keyframes: {
				blink: {
					'0%': { opacity: 0.2 },
					'20%': { opacity: 1 },
					'100%': { opacity: 0.2 },
				},
				scaleUp: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		plugin(function ({ addVariant }) {
			// required this to prevent any style on readOnly input elements
			addVariant('not-read-only', '&:not(:read-only)');
		}),
	],
};
```

**Only our tailwind.config.js file is not enough for styeling, you need to use our global.css file as well. Please copy and paste bellow TailwindCSS styles file's code and use it in your app style file**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply antialiased;
  }
  input[type="search"]::-webkit-search-cancel-button {
    display: none;
  }

	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type="checkbox"]:checked {
		background-image: none;
	}
  
  /* default theme */
  :root {
   /* 
    - gray/natural colors for texts, borders and disabled elements. 
    - If required we can use as background too. 
    */
   /* For rgb(255 255 255 / <alpha-value>) = #ffffff */
   --gray-0: 255 255 255;
   /* For rgb(250 250 250 / <alpha-value>) = #fafafa */
    --gray-50: 250 250 250;
    /* For rgb(241 241 241 / <alpha-value>) = #f1f1f1 */
    --gray-100: 241 241 241;
    /* For rgb(227 227 227 / <alpha-value>) = #e3e3e3 */
    --gray-200: 227 227 227;
    /* For rgb(223 223 223 / <alpha-value>) = #dfdfdf */
    --gray-300: 223 223 223;
    /* For rgb(146 146 146 / <alpha-value>) = #929292 */
    --gray-400: 146 146 146;
    /* For rgb(102 102 102 / <alpha-value>) = #666666 */
    --gray-500: 102 102 102;
    /* For rgb(72 72 72 / <alpha-value>) = #484848 */
    --gray-600: 72 72 72;
    /* For rgb(51 51 51 / <alpha-value>) = #333333 */
    --gray-700: 51 51 51;
    /* For rgb(34 34 34 / <alpha-value>) = #222222 */
    --gray-800: 34 34 34;
    /* For rgb(17 17 17 / <alpha-value>) = #111111 */
    --gray-900: 17 17 17;
    /* For rgb(0 0 0 / <alpha-value>) = #000000 */
    --gray-1000: 0 0 0;

    
    /* primary/brand colors */
    /* ----------------------------------- */
    /* For rgb(221 227 255 / <alpha-value>) = #dde3ff */
    --primary-lighter: 221 227 255;
    /* For rgb(99 91 255 / <alpha-value>) = #635bff */
    --primary-light: 99 91 255;
    /* For rgb(78 54 245 / <alpha-value>) = #4e36f5 */ 
    --primary-default: 78 54 245;
    /* For rgb(67 42 216 / <alpha-value>) = #432ad8 */ 
    --primary-dark: 67 42 216; 


    /* secondary colors */
    /* ----------------------------------- */
    /* For rgb(227 215 252 / <alpha-value>) = #e3d7fc */
    --secondary-lighter: 227 215 252;
    /* For rgb(138 99 210 / <alpha-value>) = #8a63d2 */
    --secondary-light: 138 99 210; 
    /* For rgb(121 40 202 / <alpha-value>) = #7928ca */
    --secondary-default: 121 40 202;
    /* For rgb(76 40 137 / <alpha-value>) = #4c2889 */
    --secondary-dark: 76 40 137;


    /* red/error colors */
    /* ----------------------------------- */
    /* For rgb(247 212 214 / <alpha-value>) = #f7d4d6 */
    --red-lighter: 247 212 214;
    /* For rgb(255 26 26 / <alpha-value>) = #ff1a1a */
    --red-light: 255 26 26;
    /* For rgb(238 0 0 / <alpha-value>) = #e00 */
    --red-default: 238 0 0;
    /* For rgb(197 0 0 / <alpha-value>) = #c50000 */
    --red-dark: 197 0 0;


    /* orange/warning colors */
    /* ----------------------------------- */
    /* For rgb(255 239 207 / <alpha-value>) = #ffefcf */
    --orange-lighter: 255 239 207;
    /* For rgb(247 185 85 / <alpha-value>) = #f7b955 */
    --orange-light: 247 185 85;
    /* For rgb(245 166 35 / <alpha-value>) = #f5a623 */
    --orange-default: 245 166 35;
    /* For rgb(171 87 10 / <alpha-value>) = #ab570a */
    --orange-dark: 171 87 10;


    /* blue/info colors */
    /* ----------------------------------- */
    /* For rgb(211 229 255 / <alpha-value>) = #d3e5ff */
    --blue-lighter: 211 229 255;
    /* For rgb(50 145 255 / <alpha-value>) = #3291ff */
    --blue-light: 50 145 255;
    /* For rgb(0 112 243 / <alpha-value>) = #0070f3 */
    --blue-default: 0 112 243;
    /* For rgb(7 97 209 / <alpha-value>) = #0761d1 */
    --blue-dark: 7 97 209;


    /* green/success colors */
    /* ----------------------------------- */
    /* For rgb(185 249 207 / <alpha-value>) = #b9f9cf */
    --green-lighter: 185 249 207;
    /* For rgb(28 203 92 / <alpha-value>) = #1ccb5c */
    --green-light: 28 203 92;
    /* For rgb(17 168 73 / <alpha-value>) = #11a849 */
    --green-default: 17 168 73;
    /* For rgb(17 132 60 / <alpha-value>) = #11843c */
    --green-dark: 17 132 60;

    /* write here box shadow variation */
    /* --card-shadow-100: 0 0 0 1px rgb(35 38 59 / 5%), 0 1px 3px 0 rgb(35 38 59 / 15%);
    --card-shadow-500: 0 0 0 1px rgb(35 38 59 / 5%), 0 20px 32px -8px rgb(35 38 59 / 25%); */
  }

  /* dark theme */
  [data-theme='dark'] {
   /* 
    - gray/natural color shades for texts, borders and disabled elements. 
    - If required we can use as background too. 
    */
   /* For rgb(0 0 0 / <alpha-value>) = #000000 */
   --gray-0: 0 0 0;
   /* For rgb(17 17 17 / <alpha-value>) = #111111 */
   --gray-50: 17 17 17;
   /* For rgb(34 34 34 / <alpha-value>) = #222222 */
   --gray-100: 34 34 34;
   /* For rgb(51 51 51 / <alpha-value>) = #333333 */
   --gray-200: 51 51 51;
   /* For rgb(72 72 72 / <alpha-value>) = #484848 */
   --gray-300: 72 72 72;
   /* For rgb(102 102 102 / <alpha-value>) = #666666 */
   --gray-400: 102 102 102;
   /* For rgb(146 146 146 / <alpha-value>) = #929292 */
   --gray-500: 146 146 146;
   /* For rgb(223 223 223 / <alpha-value>) = #dfdfdf */
   --gray-600: 223 223 223;
   /* For rgb(227 227 227 / <alpha-value>) = #e3e3e3 */
   --gray-700: 227 227 227;
   /* For rgb(241 241 241 / <alpha-value>) = #f1f1f1 */
   --gray-800: 241 241 241;
   /* For rgb(250 250 250 / <alpha-value>) = #fafafa */
   --gray-900: 250 250 250;
   /* For rgb(255 255 255 / <alpha-value>) = #ffffff */
   --gray-1000: 255 255 255;

    /* here you can customize other colors for dark theme if design required */
  }
}

@layer components {
  /* width */
  .scroller::-webkit-scrollbar {
    width: var(--scroller-width);
  }

  /* Track */
  .scroller::-webkit-scrollbar-track {
    /* background: #f1f1f1; */
    border-radius: 5px;
    background: var(--trackColor);
  }

  /* Handle */
  .scroller::-webkit-scrollbar-thumb {
    /* background: #888; */
    background: var(--handleColor);
    border-radius: 5px;
  }

  /* Handle on hover */
  .scroller::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Progress Bar */
  .circlePercentage {
    background-image: conic-gradient(
      var(--outerCirclePercentageColor) var(--progressPercentage),
      var(--outerCircleColor) 0
    );
  }
  .innerCircle {
    width: calc(100% - 20%);
    height: calc(100% - 20%);
    color: var(--innerCircleTextColor);
    background: var(--innerCircleColor);
  }

	/* Password dot */
	.password-dot {
		-webkit-text-security: disc;
		-moz-text-security: circle;
		text-security: circle;
	}
}

@layer utilities {
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  .animation-delay-500 {
    animation-delay: 500ms;
  }
  .animation-delay-700 {
    animation-delay: 700ms;
  }
}
```

## Usage

```tsx
import { Button } from 'aegon-ui';

export default function App() {
    return <Button>Default</Button>;
}
```

We are still building our official documentation site, but you can visite your storybook demo by visiting this link -> https://rizz-storybook.vercel.app/