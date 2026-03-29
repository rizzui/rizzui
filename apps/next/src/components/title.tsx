import { Title as RizzuiTitle } from 'rizzui/typography';
import { cn } from 'rizzui/cn';

export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <RizzuiTitle className={cn('text-lg 2xl:text-xl font-medium', className)}>
      {children}
    </RizzuiTitle>
  );
}
