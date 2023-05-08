'use client';

import ReactAvatar from 'react-avatar';
import cn from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';

const classes = {
  base: 'object-cover',
  rounded: {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    full: 'rounded-full',
  },
};

export type AvatarProps = ExtractProps<typeof ReactAvatar> & {
  rounded?: keyof typeof classes.rounded;
};

/**
 * Avatar is a small UI item which represents user profile picture, or event that appears in relativity with the underlying object.
 * We are using `react-avatar` package for this component. Please follow their documentation for any query -> https://www.npmjs.com/package/react-avatar
 */
export default function Avatar({
  className,
  rounded = 'full',
  ...props
}: AvatarProps) {
  return (
    <ReactAvatar
      className={cn(
        className,
        classes.base,
        classes.rounded[rounded],
        props.onClick && 'cursor-pointer'
      )}
      {...props}
    />
  );
}

Avatar.displayName = 'Avatar';
