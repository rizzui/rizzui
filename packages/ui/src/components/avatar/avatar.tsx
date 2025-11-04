import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

const avatar = tv({
  base: 'inline-flex items-center justify-center flex-shrink-0 rounded-full',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    color: {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      success: 'bg-green text-white',
      warning: 'bg-orange text-white',
      danger: 'bg-red text-white',
      info: 'bg-blue text-white',
    },
    clickable: {
      true: 'cursor-pointer',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const avatarSizes = {
  sm: '32',
  md: '40',
  lg: '48',
};

type AvatarVariant = VariantProps<typeof avatar>;

export type AvatarProps = {
  src?: string;
  name: string;
  initials?: string;
  size?: AvatarVariant['size'];
  customSize?: string | number;
  color?: AvatarVariant['color'];
  onClick?: () => void;
  className?: string;
};

const letterWithColors = [
  { string: ['a', 'n'], color: '#FF9F47' },
  { string: ['b', 'o'], color: '#A347FF' },
  { string: ['c', 'p'], color: '#726D76' },
  { string: ['d', 'q'], color: '#FF6847' },
  { string: ['e', 'r'], color: '#47A7FF' },
  { string: ['f', 's'], color: '#22BCA0' },
  { string: ['g', 't'], color: '#FF4794' },
  { string: ['h', 'u'], color: '#4770FF' },
  { string: ['i', 'v'], color: '#40DFEF' },
  { string: ['j', 'w'], color: '#AB46D2' },
  { string: ['k', 'x'], color: '#83BD75' },
  { string: ['l', 'y'], color: '#FF008E' },
  { string: ['m', 'z'], color: '#ef4444' },
];

function backgroundColor(signature: string) {
  const currObj = letterWithColors.filter((obj) =>
    obj.string.includes(signature?.charAt(0).toLowerCase())
  );
  return currObj[0]?.color ?? '#FF6847';
}

function getInitials(name: string) {
  const words = name.split(' ');
  const initials = words.map((word) => word[0]);
  return initials.slice(0, 2).join('').toUpperCase();
}

export function Avatar({
  src,
  name,
  size = 'md',
  initials,
  customSize,
  color,
  onClick,
  className,
}: AvatarProps) {
  const [isError, setError] = React.useState(false);

  let signature = initials || getInitials(name);
  let avatarSize = customSize ?? avatarSizes[size];

  if (src && !isError) {
    return (
      <img
        src={src}
        alt={name}
        title={name}
        draggable={false}
        loading="lazy"
        width={avatarSize}
        height={avatarSize}
        onError={() => setError(() => true)}
        className={avatar({
          size,
          color,
          clickable: Boolean(onClick),
          className: cn(makeClassName(`avatar-img`), 'object-cover', className),
        })}
        style={{
          width: avatarSize + 'px',
          height: avatarSize + 'px',
          ...(!color && { backgroundColor: backgroundColor(signature) }),
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <span
      title={name}
      className={avatar({
        size,
        color,
        clickable: Boolean(onClick),
        className: cn(makeClassName(`avatar-initials`), 'font-semibold', className),
      })}
      style={{
        width: avatarSize + 'px',
        height: avatarSize + 'px',
        ...(!color && { backgroundColor: backgroundColor(signature) }),
      }}
      onClick={onClick}
    >
      {signature}
    </span>
  );
}

Avatar.displayName = 'Avatar';
