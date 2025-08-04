module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}, // Tailwind CSS support
    "postcss-import": {}, // Support @import
    "postcss-mixins": {}, // Mixins
    "postcss-nested": {}, // Nesting like Sass
    "postcss-custom-properties": {}, // CSS variables
    "postcss-preset-env": {
      stage: 1, // Enables modern CSS
      features: {
        "nesting-rules": false, // We'll use postcss-nested instead
        "custom-properties": false, // Already handled by postcss-custom-properties
      },
    },
    autoprefixer: {}, // Add vendor prefixes
  },
};
