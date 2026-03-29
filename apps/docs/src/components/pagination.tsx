import React from 'react';
import 'rc-pagination/assets/index.css';
import RcPagination, {
  PaginationProps as RcPaginationProps,
} from 'rc-pagination';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from 'rizzui/cn';

const pagination = tv({
  slots: {
    container:
      '[&>.rc-pagination-item>a]:!no-underline [&>.rc-pagination-item>a]:!font-medium [&>li.rc-pagination-item]:!border-muted [&>.rc-pagination-item]:!rounded-[var(--border-radius)] [&>.rc-pagination-item:not(.rc-pagination-item-active)]:!bg-transparent',
    icon: '',
    jumperDiv:
      '[&>.rc-pagination-options>.rc-pagination-options-quick-jumper]:!text-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper]:!text-gray-500',
    jumperInput:
      '[&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:!py-[3px] [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:!text-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:!border-muted [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:!ring-0 rounded-[var(--border-radius)]',
  },
  variants: {
    variant: {
      solid: {
        container:
          '[&>.rc-pagination-item-active]:!bg-primary [&>.rc-pagination-item-active]:!rounded-[var(--border-radius)] [&>.rc-pagination-item-active>a]:!text-primary-foreground [&>li.rc-pagination-item-active]:!border-primary [&>.rc-pagination-item-active]:hover:!border-primary [&>.rc-pagination-item-active]:focus:!border-primary',
      },
      flat: {
        container:
          '[&>.rc-pagination-item-active]:!bg-primary-lighter [&>.rc-pagination-item-active]:!rounded-[var(--border-radius)] [&>li.rc-pagination-item-active]:border-primary-lighter [&>.rc-pagination-item-active>a]:text-primary-dark [&>.rc-pagination-item-active>a]:hover:text-primary-dark [&>.rc-pagination-item-active>a]:focus:text-primary-dark [&>.rc-pagination-item-active]:hover:border-primary-lighter [&>.rc-pagination-item-active]:focus:!border-primary-lighter',
      },
    },
    outline: {
      true: {
        container:
          '[&>.rc-pagination-item]:!leading-7 [&>.rc-pagination-item]:!border-0',
        icon: '[&>.rc-pagination-prev]:!align-baseline [&>.rc-pagination-next]:!align-baseline',
      },
      false: {
        container:
          '[&>.rc-pagination-item]:!leading-7 [&>.rc-pagination-item]:!border-0',
        icon: '[&>.rc-pagination-prev]:!align-baseline [&>.rc-pagination-next]:!align-baseline',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    outline: false,
  },
});

const iconTV = tv({
  base: 'text-foreground rounded-[var(--border-radius)]',
  variants: {
    outline: {
      true: 'border border-muted p-[5px]',
      false: 'inline-block align-middle',
    },
  },
  defaultVariants: {
    outline: false,
  },
});

type IconProps = {
  icon: React.ReactNode;
  outline: boolean;
  className: string;
};

const PrevIcon = ({ icon, outline, className }: IconProps) => (
  <div className={iconTV({ outline, className })}>
    {icon || (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="m-auto h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    )}
  </div>
);

const NextIcon = ({ icon, outline, className }: IconProps) => (
  <div className={iconTV({ outline, className })}>
    {icon || (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="m-auto h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    )}
  </div>
);

const JumpPrevIcon = ({ icon, outline, className }: IconProps) => (
  <div
    className={iconTV({
      outline,
      className: cn(!icon && outline && 'py-0 leading-[26px]', className),
    })}
  >
    {icon || '•••'}
  </div>
);

const JumpNextIcon = ({ icon, outline, className }: IconProps) => (
  <div
    className={iconTV({
      outline,
      className: cn(!icon && outline && 'py-0 leading-[26px]', className),
    })}
  >
    {icon || '•••'}
  </div>
);

export const localeDefault = {
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size',
};

export interface PaginationProps extends RcPaginationProps {
  outline?: boolean;
  variant?: VariantProps<typeof pagination>['variant'];
  prevIconClassName?: string;
  nextIconClassName?: string;
  jumpPrevIconClassName?: string;
  jumpNextIconClassName?: string;
}

export default function Pagination({
  outline = false,
  variant = 'solid',
  locale,
  nextIcon,
  prevIcon,
  prevIconClassName,
  nextIconClassName,
  jumpPrevIcon,
  jumpNextIcon,
  jumpPrevIconClassName,
  jumpNextIconClassName,
  className,
  ...props
}: PaginationProps) {
  const {
    container: containerClass,
    icon: iconClass,
    jumperDiv: jumperDivClass,
    jumperInput: jumperInputClass,
  } = pagination({
    variant,
    outline,
  });

  return (
    <RcPagination
      locale={locale || localeDefault}
      nextIcon={
        <NextIcon
          icon={nextIcon as React.ReactNode}
          outline={outline}
          className={nextIconClassName as string}
        />
      }
      prevIcon={
        <PrevIcon
          icon={prevIcon as React.ReactNode}
          outline={outline}
          className={prevIconClassName as string}
        />
      }
      jumpPrevIcon={
        <JumpPrevIcon
          icon={jumpPrevIcon as React.ReactNode}
          outline={outline}
          className={jumpPrevIconClassName as string}
        />
      }
      jumpNextIcon={
        <JumpNextIcon
          icon={jumpNextIcon as React.ReactNode}
          outline={outline}
          className={jumpNextIconClassName as string}
        />
      }
      className={cn(
        containerClass(),
        iconClass(),
        jumperDivClass(),
        jumperInputClass(),
        className
      )}
      {...props}
    />
  );
}

Pagination.displayName = 'Pagination';
