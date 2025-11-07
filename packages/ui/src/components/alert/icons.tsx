import { CheckmarkIcon } from '../../icons/checkmark';
import { QuestionMarkCircleIcon } from '../../icons/question-mark-circle';
import { XIcon } from '../../icons/x-mark';

const classes = {
  size: {
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-6',
  },
};

export type IconProps = {
  size: keyof typeof classes.size;
  color: 'danger' | 'info' | 'success' | 'warning';
};

export function AlertIcon({ size, color }: IconProps) {
  if (color === 'danger') {
    return <XIcon data-testid="alert-xicon" className={classes.size[size]} />;
  }
  if (color === 'info') {
    return (
      <QuestionMarkCircleIcon
        data-testid="alert-question-icon"
        className={classes.size[size]}
      />
    );
  }
  if (color === 'success') {
    return (
      <CheckmarkIcon
        data-testid="alert-check-icon"
        className={classes.size[size]}
      />
    );
  }
  return (
    <svg
      data-testid="alert-warning-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={classes.size[size]}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4M12 17h.01" />
    </svg>
  );
}
