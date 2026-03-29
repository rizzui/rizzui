import { useMemo, useState } from 'react';

// Type utilities
export function isString(value: any): value is string {
  return typeof value === 'string' || value instanceof String;
}

export function isNumber(value: any): value is number {
  return typeof value === 'number' && isFinite(value);
}

export function isEmpty(value: any): boolean {
  if (value == null) {
    return true;
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
}

// Internal state management hook for controlled/uncontrolled components
export const useInternalState = <T>(defaultValueProp: T, valueProp: T | undefined) => {
  const isControlled = valueProp !== undefined;
  const [valueState, setValueState] = useState(defaultValueProp);

  const value = isControlled ? valueProp : valueState;
  const setValue = (nextValue: T) => {
    if (!isControlled) {
      setValueState(nextValue);
    }
  };

  return [value, setValue] as const;
};

// Placement types and conversion
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

// Keyboard interaction handler for HeadlessUI
export function preventHeadlessUIKeyboardInterActions(e: React.KeyboardEvent) {
  const allowedHeadlessUIKeys = [
    'ArrowUp',
    'ArrowDown',
    'Enter',
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

// Shared filter function for options
export function useFilteredOptions<T extends Record<string, any>>(
  options: T[],
  searchQuery: string,
  searchByKey: string,
  disableDefaultFilter?: boolean
) {
  return useMemo(
    () =>
      disableDefaultFilter
        ? options
        : options.filter((item) => {
            const value = item[searchByKey];
            if (!value) return false;
            return String(value)
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          }),
    [searchQuery, options, disableDefaultFilter, searchByKey]
  );
}

