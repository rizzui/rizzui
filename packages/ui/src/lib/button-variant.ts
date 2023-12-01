export const buttonVariantStyles = {
  solid: {
    base: 'border border-transparent',
    color: {
      primary:
        'bg-primary hover:enabled:bg-primary-dark focus-visible:ring-gray-200 text-white',
      secondary:
        'bg-secondary hover:enabled:bg-secondary-dark focus-visible:ring-secondary/30 text-white',
      danger:
        'bg-red hover:enabled:bg-red-dark focus-visible:ring-red/30 text-white',
    },
  },
  flat: {
    base: 'border-transparent',
    color: {
      primary:
        'bg-primary-lighter hover:enabled:bg-primary/20 focus-visible:ring-primary-lighter text-primary-dark',
      secondary:
        'bg-secondary-lighter hover:enabled:bg-secondary-dark/20 focus-visible:ring-secondary/30 text-secondary-dark',
      danger:
        'bg-red-lighter hover:enabled:bg-red-dark/20 focus-visible:ring-red/30 text-red-dark',
    },
  },
  outline: {
    base: 'bg-transparent border',
    color: {
      primary:
        'hover:enabled:bg-primary-lighter/20 focus-visible:ring-gray-200 text-primary hover:enabled:text-primary-dark border-gray-200 hover:enabled:border-primary',
      secondary:
        'hover:enabled:bg-secondary-lighter/20 focus-visible:ring-secondary/30 text-secondary hover:enabled:text-secondary-dark border-secondary hover:enabled:border-secondary-dark',
      danger:
        'hover:enabled:bg-red-lighter/20 focus-visible:ring-red/30 text-red hover:enabled:text-red-dark border-red hover:enabled:border-red-dark ',
    },
  },
  text: {
    base: '',
    color: {
      primary:
        'hover:enabled:text-primary-dark focus-visible:ring-primary/30 text-primary',
      secondary:
        'hover:enabled:text-secondary-dark focus-visible:ring-secondary/30 text-secondary',
      danger: 'hover:enabled:text-red-dark focus-visible:ring-red/30 text-red',
    },
  },
};
