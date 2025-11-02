import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const radialProgress = tv({
  base: 'transform transition-all duration-200',
  variants: {
    startAngle: {
      0: 'rotate-0',
      45: '-rotate-45',
      90: '-rotate-90',
      180: '-rotate-180',
      270: '-rotate-[270deg]',
      360: '-rotate-[360deg]',
    },
  },
  defaultVariants: {
    startAngle: 90,
  },
});

type RadialProgressVariant = VariantProps<typeof radialProgress>;

export type RadialProgressBarProps = {
  /** percentage of filled bar */
  value?: number;
  /** width and height of the component */
  size?: number;
  /** color of progress track */
  trackColor?: string;
  /** width of progress bar */
  progressbarWidth?: number;
  /** color of progress bar */
  progressColor?: string;
  /** gradient color of progress bar */
  gradientColor?: string;
  /** gradient id of progress bar */
  gradientId?: string;
  /** class name for progress bar */
  trackClassName?: string;
  /** class name for progress bar */
  progressBarClassName?: string;
  /** use parent responsive */
  useParentResponsive?: boolean;
  /** start angle of the progress bar */
  startAngle?: RadialProgressVariant['startAngle'];
};

export function RadialProgressBar({
  value = 0,
  size = 100,
  trackColor = '#f0f0f0',
  progressColor = '#111111',
  gradientColor,
  gradientId = 'gradient',
  startAngle = 90,
  trackClassName,
  progressbarWidth = 8,
  useParentResponsive,
  progressBarClassName,
}: RadialProgressBarProps) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = (size - progressbarWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  const progressBarRef = React.useRef<SVGCircleElement | null>(null);
  React.useEffect(() => {
    const progressBarRefEl = progressBarRef.current;
    if (progressBarRefEl) {
      progressBarRefEl.style.transition = 'stroke-dashoffset 0.3s ease-in-out';
      progressBarRefEl.style.strokeDashoffset = offset.toString();
    }
    // Cleanup function to remove transition style when unmounting
    return () => {
      if (progressBarRefEl) {
        progressBarRefEl.style.transition = '';
      }
    };
  }, [offset]);

  return (
    <svg
      {...(!useParentResponsive && { width: size, height: size })}
      viewBox={`0 0 ${size} ${size}`}
      className={radialProgress({ startAngle })}
    >
      {gradientColor && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={progressColor} />
            <stop offset="100%" stopColor={gradientColor} />
          </linearGradient>
        </defs>
      )}

      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill={'transparent'}
        strokeWidth={progressbarWidth}
        stroke={trackColor}
        {...(trackClassName && { className: trackClassName })}
      />

      <circle
        ref={progressBarRef}
        cx={cx}
        cy={cy}
        r={radius}
        fill="transparent"
        strokeWidth={progressbarWidth}
        stroke={gradientColor ? `url(#${gradientId})` : progressColor}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={-offset}
        strokeLinecap="round"
        {...(progressBarClassName && { className: progressBarClassName })}
      />
    </svg>
  );
}
