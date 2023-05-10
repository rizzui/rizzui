import React from 'react';

import cn from '../../lib/cn';

const classes = {
  base: 'inline-flex items-center justify-center flex-shrink-0',
  size: {
    sm: '32px',
    DEFAULT: '40px',
    lg: '48px',
    xl: '56px',
  },
  fontSize: {
    sm: 'text-xs',
    DEFAULT: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    full: 'rounded-full',
  },
  color: {
    DEFAULT: 'bg-gray-200 text-gray-900',
    invert: 'bg-gray-900 text-gray-0',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    success: 'bg-green text-white',
    warning: 'bg-orange text-white',
    danger: 'bg-red text-white',
    info: 'bg-blue text-white',
  },
};

export type AvatarProps = {
  src?: string;
  name: string;
  initials?: string;
  size?: keyof typeof classes.size;
  customSize?: string;
  rounded?: keyof typeof classes.rounded;
  color?: keyof typeof classes.color;
  onClick?: () => void;
  className?: string;
};

const CHECK_VALID_CUSTOM_SIZE = /(\d*px)?/g;

function getInitials(name: string) {
  const words = name.split(' ');
  const initials = words.map((word) => word[0]);
  return initials.slice(0, 2).join('').toUpperCase();
}

export default function Avatar({
  src,
  name,
  size = 'DEFAULT',
  initials,
  customSize,
  rounded = 'full',
  color = 'DEFAULT',
  onClick,
  className,
}: AvatarProps) {
  const [isError, setError] = React.useState(false);

  // checking customSize value
  if (customSize?.match(CHECK_VALID_CUSTOM_SIZE)) {
    const checkedCustomSizeValue =
      customSize?.match(CHECK_VALID_CUSTOM_SIZE) ?? [];
    if (checkedCustomSizeValue[0] === '') {
      console.warn(
        'customSize prop value is not valid. Please set customSize prop like -> customSize="50px"'
      );
    }
  }

  if (src && !isError) {
    return (
      <img
        src={src}
        alt={name}
        title={name}
        draggable={false}
        width={customSize ?? classes.size[size]}
        height={customSize ?? classes.size[size]}
        onError={() => setError(() => true)}
        className={cn(
          classes.base,
          classes.rounded[rounded],
          classes.color[color],
          'object-cover',
          onClick && 'cursor-pointer',
          className
        )}
        style={{
          width: customSize ?? classes.size[size],
          height: customSize ?? classes.size[size],
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <span
      title={name}
      className={cn(
        classes.base,
        classes.fontSize[size],
        classes.rounded[rounded],
        classes.color[color],
        'font-semibold',
        onClick && 'cursor-pointer',
        className
      )}
      style={{
        width: customSize ?? classes.size[size],
        height: customSize ?? classes.size[size],
      }}
      onClick={onClick}
    >
      {initials || getInitials(name)}
    </span>
  );
}

Avatar.displayName = 'Avatar';
