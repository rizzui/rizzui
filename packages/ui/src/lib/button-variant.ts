export const buttonVariantStyles = {
  solid: {
    base: 'border border-transparent dark:backdrop-blur',
    color: {
      primary:
        'bg-primary hover:bg-primary-dark dark:hover:bg-primary/90 focus-visible:ring-muted text-primary-foreground',
      secondary:
        'bg-secondary hover:bg-secondary-dark dark:hover:bg-secondary/80 focus-visible:ring-secondary/30 text-secondary-foreground',
      danger:
        'bg-red hover:bg-red-dark dark:hover:bg-red/80 focus-visible:ring-red/30 text-white',
    },
  },
  flat: {
    base: 'border-transparent backdrop-blur bg-muted',
    color: {
      primary:
        'hover:bg-primary-lighter focus-visible:ring-primary-lighter hover:text-primary-dark',
      secondary:
        'hover:bg-secondary-lighter focus-visible:ring-secondary-lighter hover:text-secondary-dark',
      danger: 'bg-red-lighter focus-visible:ring-red-lighter text-red-dark',
    },
  },
  outline: {
    base: 'bg-transparent border border-muted dark:backdrop-blur',
    color: {
      primary:
        'focus-visible:ring-muted hover:text-primary hover:border-primary',
      secondary:
        'focus-visible:ring-secondary-lighter hover:text-secondary hover:border-secondary',
      danger:
        'focus-visible:ring-red-lighter text-red hover:text-red-dark border-red hover:border-red-dark ',
    },
  },
  text: {
    base: '',
    color: {
      primary: 'hover:text-primary focus-visible:ring-primary-lighter',
      secondary: 'hover:text-secondary focus-visible:ring-secondary-lighter',
      danger: 'hover:text-red-dark focus-visible:ring-red-lighter text-red',
    },
  },
};
