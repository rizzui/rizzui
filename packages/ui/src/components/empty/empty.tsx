import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { DefaultIcon } from './empty-icons';

const empty = tv({
  base: 'flex flex-col',
  variants: {
    alignment: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
  },
  defaultVariants: {
    alignment: 'center',
  },
});

type EmptyTextTagProps = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type EmptyVariant = VariantProps<typeof empty>;

export interface EmptyProps {
  image?: React.ReactNode;
  imageClassName?: string;
  defaultImageClassName?: string;
  text?: string;
  textAs?: EmptyTextTagProps;
  textClassName?: string;
  alignment?: EmptyVariant['alignment'];
  className?: string;
}

export function Empty({
  image,
  className,
  text,
  textAs = 'p',
  imageClassName,
  textClassName,
  alignment = 'center',
  defaultImageClassName,
  children,
}: React.PropsWithChildren<EmptyProps>) {
  let Component = textAs;
  return (
    <div
      data-testid="empty-state"
      className={empty({
        alignment,
        className,
      })}
    >
      <div className="text-center">
        <div className={cn('rizzui-empty-icon', imageClassName)}>
          {image || <DefaultIcon className={defaultImageClassName} />}
        </div>
        {text ? (
          <Component
            role="heading"
            className={cn('rizzui-empty-text', textClassName)}
          >
            {text}
          </Component>
        ) : null}
      </div>
      {children}
    </div>
  );
}

Empty.displayName = 'Empty';
