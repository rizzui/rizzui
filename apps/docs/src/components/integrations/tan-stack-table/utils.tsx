import dayjs from 'dayjs';
import { Avatar, AvatarProps, Badge, cn, Text } from 'rizzui';

interface AvatarCardProps {
  src: string;
  name: string;
  className?: string;
  description?: string;
  avatarProps?: AvatarProps;
}

export function AvatarCard({
  src,
  name,
  className,
  description,
  avatarProps,
}: AvatarCardProps) {
  return (
    <figure className={cn('flex items-center gap-3', className)}>
      <Avatar name={name} src={src} {...avatarProps} />
      <figcaption className="grid gap-0.5">
        <Text className="font-lexend text-sm font-medium text-[var(--text-primary)] dark:text-[var(--text-secondary)]">
          {name}
        </Text>
        {description && (
          <Text className="!text-[13px] !leading-normal text-[var(--muted-foreground)]">
            {description}
          </Text>
        )}
      </figcaption>
    </figure>
  );
}

interface DateCellProps {
  date: Date;
  className?: string;
  dateFormat?: string;
  dateClassName?: string;
  timeFormat?: string;
  timeClassName?: string;
}

export function DateCell({
  date,
  className,
  timeClassName,
  dateClassName,
  dateFormat = 'MMMM D, YYYY',
  timeFormat = 'h:mm A',
}: DateCellProps) {
  return (
    <div className={cn('grid gap-0', className)}>
      <time
        dateTime={formatDate(date, 'YYYY-MM-DD')}
        className={cn('font-medium text-[var(--text-secondary)]', dateClassName)}
      >
        {formatDate(date, dateFormat)}
      </time>
      <time
        dateTime={formatDate(date, 'HH:mm:ss')}
        className={cn(
          'text-[13px] text-[var(--muted-foreground)] leading-normal',
          timeClassName
        )}
      >
        {formatDate(date, timeFormat)}
      </time>
    </div>
  );
}

export function formatDate(
  date?: Date,
  format: string = 'DD MMM, YYYY'
): string {
  if (!date) return '';
  return dayjs(date).format(format);
}

export function getStatusBadge(status: string) {
  switch (status?.toLowerCase()) {
    case 'pending':
      return (
        <div className="flex items-center gap-2">
          <Badge color="warning" renderAsDot />
          <Text className="font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case 'paid':
      return (
        <div className="flex items-center gap-2">
          <Badge color="success" renderAsDot />
          <Text className="font-medium text-green-dark">{status}</Text>
        </div>
      );
    case 'overdue':
      return (
        <div className="flex items-center gap-2">
          <Badge color="danger" renderAsDot />
          <Text className="font-medium text-red-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-2">
          <Badge renderAsDot className="bg-[var(--muted-foreground)]" />
          <Text className="font-medium text-[var(--text-secondary)]">{status}</Text>
        </div>
      );
  }
}
