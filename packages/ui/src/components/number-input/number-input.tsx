import React from 'react';
import {
  NumericFormat,
  PatternFormat,
  NumberFormatBase,
} from 'react-number-format';

import { ExtractProps } from '../../lib/extract-props';

export type NumberInputProps = (
  | ExtractProps<typeof NumericFormat>
  | ExtractProps<typeof PatternFormat>
  | ExtractProps<typeof NumberFormatBase>
) & {
  /** These are the format types of the component */
  formatType: 'numeric' | 'pattern' | 'custom';
};

/**
 * We used `react-number-format` package to build the NumberInput component.
 * See their [official documentation](https://s-yadav.github.io/react-number-format/docs/intro) for more info.
 */
export const NumberInput = ({ formatType, ...props }: NumberInputProps) => {
  if (formatType === 'custom') {
    return (
      <NumberFormatBase {...(props as ExtractProps<typeof NumberFormatBase>)} />
    );
  }
  if (formatType === 'numeric') {
    return <NumericFormat {...(props as ExtractProps<typeof NumericFormat>)} />;
  }
  return <PatternFormat {...(props as ExtractProps<typeof PatternFormat>)} />;
};

NumberInput.displayName = 'NumberInput';
