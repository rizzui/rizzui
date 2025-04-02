import { fontWeightStyles } from './font-weight';

export const labelStyles = {
  weight: fontWeightStyles,
  size: {
    sm: 'text-xs mb-1',
    md: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
    xl: 'text-base mb-2',
  },
} as const;
