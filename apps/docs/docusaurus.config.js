// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/vsDark");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const prismTheme = {
  plain: {
    color: "#e2e2e2",
    backgroundColor: "#0f2937",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "#7f848e",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "inserted"],
      style: {
        color: "#e6db74",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "#e6db74",
      },
    },
    {
      types: ["punctuation", "selector"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(191, 199, 213)",
      },
    },
    {
      types: ["class-name", "attr-name"],
      style: {
        color: "#e5c07b",
      },
    },
    {
      types: ["tag", "deleted"],
      style: {
        color: "#e06c75",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(137, 221, 255)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#c678dd",
      },
    },
    {
      types: ["doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "#f2f2f8",
      },
    },
  ],
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RizzUI",
  tagline:
    "🎉 A Modern and Minimal React UI Library built with TailwindCSS. Designed to provide you with a simple and intuitive set of UI components that are easy to use, customize and integrate into your React application. We have carefully crafted each component to ensure that they are responsive, accessible and consistent across different devices and browsers.",
  favicon: "img/rizz-favicon.svg",

  // Set the production url of your site here
  url: "https://rizzui.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RedQ", // Usually your GitHub org/user name.
  projectName: "rizzui", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // custom external stylesheets
  stylesheets: [
    {
      href: "fonts/inter-font.css",
      type: "text/css",
    },
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },

    // async function myWebpackPlugin(context, options) {
    //   return {
    //     name: "custom-webpack-config",
    //     configureWebpack(config) {
    //       config.resolve.fallback = {
    //         fs: false,
    //       };
    //       config.plugins = [new NodePolyfillPlugin()];
    //       return config;
    //     },
    //   };
    // },
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/rizzui/rizzui/apps/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/rizz-social-card.jpg",
      fonts: {
        myFont: ["Inter", "sans-serif"],
        myOtherFont: ["-apple-system", "system-ui", "sans-serif"],
      },
      navbar: {
        // hideOnScroll: true,
        logo: {
          alt: "RizzUI",
          src: "img/rizz-logo.svg",
          width: "96px",
          height: "auto",
        },
        items: [
          {
            to: "docs/guide/getting-started",
            position: "left",
            label: "Documentation",
          },
          {
            to: "docs/components/action-icon",
            position: "left",
            label: "Components",
          },
          {
            href: "https://github.com/rizzui/rizzui",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub",
          },
        ],
      },
      prism: {
        theme: prismTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
