// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import myTheme from "./prism-theme";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "RizzUI",
  tagline:
    "A Modern and Minimal React UI Library built with TailwindCSS. Designed to provide you with a simple and intuitive set of UI components that are easy to use, customize and integrate into your React application.",
  favicon: "img/rizz-favicon.svg",

  url: "https://rizzui.com/",

  baseUrl: "/",

  organizationName: "rizzui",
  projectName: "rizzui",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: "https://github.com/rizzui/rizzui/apps/docs",
          lastVersion: "current",
          versions: {
            current: {
              label: "v-1.0.0",
            },
            "0.8.7": {
              label: "v-0.8.7",
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/rizzui/rizzui/apps/docs/blog",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          postsPerPage: 5,
          blogTitle: "RizzUI Blogs",
          blogDescription: "Read blog posts about RizzUI updates from team.",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "List of all posts",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/rizz-social-card.jpg",
    fonts: {
      myFont: ["Geist", "sans-serif"],
      myOtherFont: ["-apple-system", "system-ui", "sans-serif"],
    },
    navbar: {
      // hideOnScroll: true,
      logo: {
        alt: "RizzUI",
        src: "img/rizz-logo.svg",
      },
      items: [
        {
          to: "docs/guide/getting-started",
          position: "left",
          label: "Documentation",
        },
        {
          to: "docs/buttons/action-icon",
          position: "left",
          label: "Components",
        },
        {
          to: "/blog",
          position: "left",
          label: "Blog",
        },
        {
          href: "https://github.com/rizzui/rizzui",
          position: "right",
          className: "header-github-link order-3 ml-3 -mr-3",
          "aria-label": "GitHub",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          className: "customVersionDropdown",
        },
      ],
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: myTheme,
      darkTheme: myTheme,
    },
  },
};

export default config;
