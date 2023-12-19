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
