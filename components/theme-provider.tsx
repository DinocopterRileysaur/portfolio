// Import necessary dependencies
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

// Define functional component for the ThemeProvider
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	// Return the NextThemesProvider with the provided props and children
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
