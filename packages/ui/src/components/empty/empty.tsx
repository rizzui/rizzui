import React from 'react';

import { cn } from '../../lib/cn';
import Text from '../text';
import { DefaultIcon } from './empty-icons';

const classes = {
  base: 'flex flex-col',
  alignment: {
    inlineStart: '',
    center: 'items-center text-center',
    inlineEnd: '',
  },
};

type EmptyTextTagProps = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface EmptyProps {
  /** Add custom image or icon component */
  image?: React.ReactNode;
  /** Add custom classes on to the image or icon component's wrapper */
  imageClassName?: string;
  /** Set custom width of the default image / icon */
  defaultImageWidth?: string | number;
  /** Set custom height of the default image / icon */
  defaultImageHeight?: string | number;
  /** Set custom className of the default image / icon */
  defaultImageClassName?: string;
  /** Set custom text message of the Empty component */
  text?: string;
  /** Here you can use your text tag */
  textTag?: EmptyTextTagProps;
  /** Set custom classes for text style */
  textClassName?: string;
  /** Set custom text message of the Empty component */
  alignment?: keyof typeof classes.alignment;
  /** Add custom classes for extra style */
  className?: string;
}

/**
 * Empty state component. Note: We are highly inspired by the Ant Design empty component -> https://ant.design/components/empty
 */
export default function Empty({
  image,
  className,
  text,
  textTag = 'p',
  imageClassName,
  textClassName,
  alignment = 'center',
  defaultImageWidth = 184,
  defaultImageHeight = 152,
  defaultImageClassName,
  children,
}: React.PropsWithChildren<EmptyProps>) {
  return (
    <div
      data-testid="empty-state"
      className={cn(classes.base, classes.alignment[alignment], className)}
    >
      <div className={cn(imageClassName)}>
        {image || (
          <DefaultIcon
            width={defaultImageWidth}
            height={defaultImageHeight}
            className={defaultImageClassName}
          />
        )}
      </div>
      {text ? (
        <Text tag={textTag} className={cn(textClassName)}>
          {text}
        </Text>
      ) : null}
      {children}
    </div>
  );
}

Empty.displayName = 'Empty';
