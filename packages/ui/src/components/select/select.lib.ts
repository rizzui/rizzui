import { type SelectOption } from './select';
import { isString, isNumber } from './select-shared.lib';

// Re-export shared utilities for backward compatibility
export { isString, isNumber, isEmpty, ourPlacementObject, preventHeadlessUIKeyboardInterActions, type TheirPlacementType } from './select-shared.lib';

// Select-specific display and value functions
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
  if (value?.name) return value.name;
  if (value?.value) return value.value;
  return String(value);
}
