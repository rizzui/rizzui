import { tv } from 'tailwind-variants';

// Use tailwind-variants for className merging
// This replaces the previous clsx + tailwind-merge combination
const merge = tv({
  base: '',
});

type ClassValue =
  | string
  | number
  | bigint
  | boolean
  | undefined
  | null
  | ClassValue[]
  | Record<string, any>;

export function cn(...inputs: ClassValue[]) {
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
      // Flatten nested objects if values are strings (for old style objects)
      for (const [key, value] of Object.entries(input)) {
        if (typeof value === 'boolean') {
          if (value) classes.push(key);
        } else if (typeof value === 'string') {
          classes.push(value);
        } else if (typeof value === 'object' && value !== null) {
          // Handle nested objects (like badge variant styles)
          for (const nestedValue of Object.values(value)) {
            if (typeof nestedValue === 'string') {
              classes.push(nestedValue);
            }
          }
        }
      }
    }
  }

  return merge({ class: classes.join(' ') });
}
