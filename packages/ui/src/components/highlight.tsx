import React, { useMemo, useRef } from 'react';
import { isUnplacedRect, ReactiveDomReact } from '../lib/use-rect';
import usePrevious from '../lib/use-previous';
import { cn } from '../lib/cn';

type Props = {
  rect: ReactiveDomReact;
  visible?: boolean;
  hoverHeightRatio?: number;
  hoverWidthRatio?: number;
  activeOpacity?: number;
};

type HighlightPosition = {
  width: string;
  left: string;
  height: string;
  top: string;
  transition: string;
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type HighlightProps = Props & NativeAttrs;

export function Highlight({
  rect,
  visible,
  hoverHeightRatio = 1,
  hoverWidthRatio = 1,
  activeOpacity = 0.8,
  className,
  ...props
}: HighlightProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isFirstVisible = usePrevious<boolean>(isUnplacedRect(rect));
  const position = useMemo<HighlightPosition>(() => {
    const width = rect.width * hoverWidthRatio;
    const height = rect.height * hoverHeightRatio;
    return {
      width: `${width}px`,
      left: `${rect.left + (rect.width - width) / 2}px`,
      height: `${height}px`,
      top: `${rect.elementTop + (rect.height - height) / 2}px`,
      transition: isFirstVisible ? 'opacity' : 'opacity, width, left, top',
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rect, hoverWidthRatio, hoverHeightRatio]);

  return (
    <span
      ref={ref}
      className={cn(
        'highlight bg-gray-200/60 absolute rounded-md transition -z-[1]',
        visible ? 'opacity-100' : 'opacity-0',
        className,
      )}
      style={{
        width: position.width,
        left: position.left,
        height: position.height,
        top: position.top,
        transitionProperty: position.transition,
      }}
      {...props}
    />
  );
}
