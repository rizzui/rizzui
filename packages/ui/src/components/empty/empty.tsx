import React from 'react';
import { cn } from '../../lib/cn';
import { DefaultIcon } from './empty-icons';
import { makeClassName } from '../../lib/make-class-name';

const emptyStyles = {
  base: 'flex flex-col items-start',
  alignment: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  },
};

type EmptyTextTagProps = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface EmptyProps {
  image?: React.ReactNode;
  imageClassName?: string;
  defaultImageClassName?: string;
  text?: string;
  textAs?: EmptyTextTagProps;
  textClassName?: string;
  alignment?: keyof typeof emptyStyles.alignment;
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
      className={cn(
        makeClassName('empty-root'),
        emptyStyles.base,
        emptyStyles.alignment[alignment],
        className,
      )}
    >
      <div className="text-center">
        <div className={cn(makeClassName('empty-icon'), imageClassName)}>
          {image || <DefaultIcon className={defaultImageClassName} />}
        </div>
        {text ? (
          <Component
            role="heading"
            className={cn(makeClassName('empty-text'), textClassName)}
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
