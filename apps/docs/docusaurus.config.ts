import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'RizzUI',
  tagline:
    'A Modern and Minimal React UI Library built with TailwindCSS. Designed to provide you with a simple and intuitive set of UI components that are easy to use, customize and integrate into your React application.',
  favicon: 'img/rizz-favicon.svg',

  url: 'https://rizzui.com/',

  baseUrl: '/',

  organizationName: 'rizzui',
  projectName: 'rizzui',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/rizzui/rizzui/apps/docs',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/rizzui/rizzui/apps/docs/blog',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          postsPerPage: 12,
          blogTitle: 'RizzUI Blogs',
          blogDescription: 'Read blog posts about RizzUI updates from team.',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'List of all posts',
          blogListComponent: '@site/src/pages/blog/index',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/rizz-social-card.png',
    fonts: {
      myFont: ['Outfit', 'sans-serif'],
    },
    navbar: {
      logo: {
        alt: 'RizzUI',
        src: 'img/rizz-logo.svg',
      },
      items: [
        {
          to: 'docs/guide/getting-started',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: 'docs/guide/components',
          position: 'left',
          label: 'Components',
        },
        {
          to: '/blog',
          position: 'left',
          label: 'Blog',
        },
        {
          href: 'https://github.com/rizzui/rizzui',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
        {
          type: 'dropdown',
          label: 'v-2.0.0',
          position: 'right',
          items: [
            {
              label: 'v-1.0.0',
              href: 'https://legacy-docs.rizzui.com/docs/guide/getting-started', // Replace with your actual URL
            },
            {
              label: 'v-0.8.7',
              href: 'https://legacy-docs.rizzui.com/docs/0.8.7/guide/getting-started', // Replace with your actual URL
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.oceanicNext,
      darkTheme: prismThemes.oceanicNext,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
