import { twMerge } from 'tailwind-merge';

type ClassValue =
  | string
  | number
  | bigint
  | boolean
  | undefined
  | null
  | ClassValue[]
  | Record<string, any>;

/**
 * Utility function for conditionally joining class names together with proper
 * Tailwind CSS class merging using tailwind-merge
 * 
 * Supports: strings, numbers, arrays, objects with boolean/string values
 * 
 * @example
 * cn('px-2', 'py-1', { 'bg-blue-500': true }, ['text-white']) // => merged classes
 */
export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string' || typeof input === 'number' || typeof input === 'bigint') {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      // Recursively handle arrays
      const nested = cn(...input);
      if (nested) classes.push(nested);
    } else if (typeof input === 'object') {
      // Handle conditional classes like { 'class-name': true }
      for (const [key, value] of Object.entries(input)) {
        if (typeof value === 'boolean') {
          if (value) classes.push(key);
        } else if (typeof value === 'string') {
          classes.push(value);
        } else if (typeof value === 'object' && value !== null) {
          // Handle nested objects (like variant styles)
          for (const nestedValue of Object.values(value)) {
            if (typeof nestedValue === 'string') {
              classes.push(nestedValue);
            }
          }
        }
      }
    }
  }

  // Use tailwind-merge to properly merge Tailwind CSS classes
  return twMerge(classes.join(' '));
}
