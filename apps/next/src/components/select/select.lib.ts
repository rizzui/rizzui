import { type SelectOption } from './select';

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

export function getOptionValueFn(option: any) {
  return option;
}

export function getOptionDisplayValueFn({ value, label }: SelectOption) {
  if (label) return label;
  if (value) return value;
  return `Error: use getOptionDisplayValue prop`;
}

export function displayValueFn(value: any) {
  if (isString(value) || isNumber(value)) return value;
  if (value?.label) return value.label;
  if (value.name) return value.name;
  return `Error: use displayValue prop`;
}

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
