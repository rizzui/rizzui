import React from 'react';
import { CheckmarkIcon } from '../../icons/checkmark';
import { QuestionMarkCircleIcon } from '../../icons/question-mark-circle';
import { XIcon } from '../../icons/x-mark';

const classes = {
  size: {
    sm: 'h-3 w-3',
    DEFAULT: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6',
  },
};

export type IconProps = {
  size: keyof typeof classes.size;
  color: 'danger' | 'info' | 'success' | 'warning';
};

const AlertIcon = ({ size, color }: IconProps) => {
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
      fill="currentColor"
      className={classes.size[size]}
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AlertIcon;
