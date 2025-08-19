import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to safely merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for conflict resolution
 */
export default function classNameMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}