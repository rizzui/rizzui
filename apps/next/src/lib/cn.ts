import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function for conditionally joining class names together.
 *
 * This implementation uses `clsx` to:
 * - Concatenate class names
 * - Support strings, arrays, objects, and conditional classes
 *
 * @example
 * cn('px-2 py-1', 'px-4') // => 'px-2 py-1 px-4'
 * cn('text-sm', { 'font-bold': true }) // => 'text-sm font-bold'
 * cn(['flex', 'items-center']) // => 'flex items-center'
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(...inputs);
}

