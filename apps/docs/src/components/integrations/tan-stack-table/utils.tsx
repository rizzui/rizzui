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
        <Text className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          {name}
        </Text>
        {description && (
          <Text className="!text-[13px] !leading-normal text-gray-500">
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
        className={cn('font-medium text-gray-700', dateClassName)}
      >
        {formatDate(date, dateFormat)}
      </time>
      <time
        dateTime={formatDate(date, 'HH:mm:ss')}
        className={cn(
          'text-[13px] text-gray-500 leading-normal',
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
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case 'paid':
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    case 'overdue':
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}
