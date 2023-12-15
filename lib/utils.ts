import { type ClassValue, clsx } from 'clsx';
import useSWR from 'swr';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
