import { cnBase } from 'tailwind-variants';

/**
 * Utility function for conditionally joining class names together with proper
 * Tailwind CSS class merging using tailwind-variants v3
 * 
 * Uses cnBase from tailwind-variants which provides:
 * - Class name concatenation
 * - Automatic Tailwind CSS conflict resolution via tailwind-merge
 * - Support for strings, arrays, objects, and conditional classes
 * 
 * @example
 * cn('px-2 py-1', 'px-4') // => 'py-1 px-4' (conflict resolved)
 * cn('text-sm', { 'font-bold': true }) // => 'text-sm font-bold'
 * cn(['flex', 'items-center']) // => 'flex items-center'
 */
export function cn(...inputs: Parameters<typeof cnBase>): string {
  return cnBase(...inputs) || '';
}
