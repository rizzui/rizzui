import React from 'react';

export const useInternalState = <T>(defaultValueProp: T, valueProp: T) => {
  const isControlled = valueProp !== undefined;
  const [valueState, setValueState] = React.useState(defaultValueProp);

  const value = isControlled ? valueProp : valueState;
  const setValue = (nextValue: T) => {
    if (isControlled) {
      return;
    }
    setValueState(nextValue);
  };

  return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
};

type Align = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
export type TheirPlacementType = `${Side}` | `${Side}-${Align}`;
type OurPlacementType = `${Side}` | `${Side} ${Align}`;

export const ourPlacementObject: {
  [key in TheirPlacementType]: OurPlacementType;
} = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  'top-start': 'top start',
  'top-end': 'top end',
  'bottom-start': 'bottom start',
  'bottom-end': 'bottom end',
  'right-start': 'right start',
  'right-end': 'right end',
  'left-start': 'left start',
  'left-end': 'left end',
};

export function preventHeadlessUIKeyboardInterActions(e: React.KeyboardEvent) {
  const allowedHeadlessUIKeys = [
    'ArrowUp',
    'ArrowDown',
    'Enter',
    ' ',
    'Home',
    'End',
    'Escape',
  ];
  if (
    !allowedHeadlessUIKeys.includes(e.key) ||
    e.shiftKey ||
    e.ctrlKey ||
    e.metaKey ||
    e.altKey
  ) {
    e.stopPropagation();
  }
}
