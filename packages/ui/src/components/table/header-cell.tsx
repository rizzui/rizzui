import React from 'react';
import { cn } from '../../lib/cn';

type TextAlign = 'left' | 'center' | 'right';

export interface HeaderCellProps {
  title: React.ReactNode;
  width?: number;
  /** Set table header cell text alignment */
  align?: TextAlign;
  /** Make header cell text ellipsis, you need to set width prop too */
  ellipsis?: boolean;
  /** Make sortable column, it's also required ascending prop too. Check our example for more details. */
  sortable?: boolean;
  /** Make ascending column, it's also required sortable prop too. Check our example for more details. */
  ascending?: boolean;
  /** Add custom classes to the sort icon for extra style */
  iconClassName?: string;
  /** Add custom classes for extra style */
  className?: string;
}

// A util func
function handleTextAlignment(align: TextAlign) {
  if (align === 'center') return 'justify-center';
  if (align === 'right') return 'justify-end rtl:justify-start';
  return '';
}

/**
 *  Table HeaderCell component.
 */
export default function HeaderCell({
  title,
  align = 'left',
  width,
  ellipsis,
  sortable,
  ascending,
  iconClassName,
  className,
}: HeaderCellProps) {
  if (ellipsis && width === undefined) {
    console.warn(
      'When ellipsis is true make sure you are using the same column width in HeaderCell component too.'
    );
  }
  if (width !== undefined && ellipsis !== true) {
    console.warn(
      "width prop without ellipsis won't work, please set ellipsis prop true."
    );
  }
  return (
    <div
      className={cn(
        'flex items-center gap-1',
        sortable && 'cursor-pointer',
        handleTextAlignment(align),
        className
      )}
    >
      <div
        {...(ellipsis && { className: 'truncate' })}
        {...(ellipsis && width && { style: { width } })}
      >
        {title}
      </div>
      {sortable && (
        <div className="inline-flex">
          {ascending ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={cn('h-auto w-3', iconClassName)}
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={cn('h-auto w-3', iconClassName)}
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}

HeaderCell.displayName = 'HeaderCell';
