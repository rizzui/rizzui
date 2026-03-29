'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { tokens, darkThemeTokens } from '@site/src/components/color-tokens/tokens';

type TokenValue = {
  hex: string;
  oklch: string;
};

type ThemeTokens = {
  [key: string]: TokenValue;
};

type RizzUIThemeContextType = {
  lightTokens: ThemeTokens;
  darkTokens: ThemeTokens;
  updateToken: (tokenName: string, value: string, theme: 'light' | 'dark') => void;
  resetToken: (tokenName: string, theme: 'light' | 'dark') => void;
  resetAllTokens: (theme: 'light' | 'dark') => void;
};

const RizzUIThemeContext = createContext<RizzUIThemeContextType | undefined>(undefined);

// Convert tokens array to object for easier access
function tokensToObject(tokensArray: typeof tokens): ThemeTokens {
  return tokensArray.reduce((acc, token) => {
    acc[token.name] = {
      hex: token.hex,
      oklch: token.oklch,
    };
    return acc;
  }, {} as ThemeTokens);
}

export function RizzUIThemeProvider({ children }: { children: React.ReactNode }) {
  const [lightTokens, setLightTokens] = useState<ThemeTokens>(() =>
    tokensToObject(tokens)
  );
  const [darkTokens, setDarkTokens] = useState<ThemeTokens>(() =>
    tokensToObject(darkThemeTokens)
  );

  // Refs to track pending updates and animation frame
  const pendingUpdatesRef = useRef<Map<string, { value: string; theme: 'light' | 'dark' }>>(new Map());
  const rafIdRef = useRef<number | null>(null);
  const styleElementsRef = useRef<{
    light: HTMLStyleElement | null;
    dark: HTMLStyleElement | null;
  }>({ light: null, dark: null });

  // Apply all CSS variables (for initial load)
  const applyAllCSSVariables = useCallback(
    (tokens: ThemeTokens, selector: string, styleElement: HTMLStyleElement) => {
      const cssRules: string[] = [];
      Object.entries(tokens).forEach(([name, value]) => {
        cssRules.push(`  ${name}: ${value.oklch};`);
      });
      styleElement.textContent = `${selector} {\n${cssRules.join('\n')}\n}`;
    },
    []
  );

  // Initialize style elements once
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Create or get style elements
    let lightStyle = document.getElementById('rizzui-light-theme-vars') as HTMLStyleElement;
    let darkStyle = document.getElementById('rizzui-dark-theme-vars') as HTMLStyleElement;

    if (!lightStyle) {
      lightStyle = document.createElement('style');
      lightStyle.id = 'rizzui-light-theme-vars';
      document.head.appendChild(lightStyle);
    }

    if (!darkStyle) {
      darkStyle = document.createElement('style');
      darkStyle.id = 'rizzui-dark-theme-vars';
      document.head.appendChild(darkStyle);
    }

    styleElementsRef.current = { light: lightStyle, dark: darkStyle };

    // Apply initial CSS variables
    applyAllCSSVariables(lightTokens, ':root', lightStyle);
    applyAllCSSVariables(darkTokens, '[data-theme="dark"]', darkStyle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Update single CSS variable directly (optimized for performance)
  const updateCSSVariable = useCallback(
    (tokenName: string, value: string, theme: 'light' | 'dark') => {
      if (typeof document === 'undefined') return;

      const root = document.documentElement;
      
      // Direct CSS variable update on :root for immediate visual feedback
      // This is the fastest way to update CSS variables
      root.style.setProperty(tokenName, value);

      // Batch style element updates (less frequent, for persistence)
      // Use a simple debounce approach - only update style element every few frames
      const styleElement = theme === 'dark' 
        ? styleElementsRef.current.dark 
        : styleElementsRef.current.light;
      
      if (styleElement) {
        // Use a simple string replacement for better performance
        const currentContent = styleElement.textContent || '';
        const tokenIndex = currentContent.indexOf(tokenName);
        
        if (tokenIndex !== -1) {
          // Find the end of this rule (semicolon)
          const ruleStart = currentContent.lastIndexOf('\n', tokenIndex) + 1;
          const ruleEnd = currentContent.indexOf(';', tokenIndex) + 1;
          
          if (ruleEnd > ruleStart) {
            // Replace just this rule
            const before = currentContent.slice(0, ruleStart);
            const after = currentContent.slice(ruleEnd);
            styleElement.textContent = before + `  ${tokenName}: ${value};` + after;
          }
        } else {
          // Add new rule if it doesn't exist
          const rulesEnd = currentContent.lastIndexOf('}');
          if (rulesEnd > 0) {
            styleElement.textContent = 
              currentContent.slice(0, rulesEnd) + 
              `\n  ${tokenName}: ${value};` + 
              '\n' + currentContent.slice(rulesEnd);
          }
        }
      }
    },
    []
  );

  // Batch CSS updates using requestAnimationFrame
  const flushPendingUpdates = useCallback(() => {
    if (pendingUpdatesRef.current.size === 0) {
      rafIdRef.current = null;
      return;
    }

    // Apply all pending updates
    pendingUpdatesRef.current.forEach((update, tokenName) => {
      updateCSSVariable(tokenName, update.value, update.theme);
    });

    // Clear pending updates
    pendingUpdatesRef.current.clear();
    rafIdRef.current = null;
  }, [updateCSSVariable]);

  // Schedule CSS update
  const scheduleCSSUpdate = useCallback(
    (tokenName: string, value: string, theme: 'light' | 'dark') => {
      // Add to pending updates
      pendingUpdatesRef.current.set(tokenName, { value, theme });

      // Schedule update if not already scheduled
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(flushPendingUpdates);
      }
    },
    [flushPendingUpdates]
  );

  // Update a single token (optimized with immediate CSS update)
  const updateToken = useCallback(
    (tokenName: string, value: string, theme: 'light' | 'dark') => {
      // Immediately update CSS variable for smooth UX (no debounce on visual update)
      scheduleCSSUpdate(tokenName, value, theme);

      // Debounce state update to reduce re-renders
      const isOklch = value.startsWith('oklch') || value.endsWith('rem');
      
      if (theme === 'light') {
        setLightTokens((prev) => {
          // Only update if value actually changed
          if (prev[tokenName]?.oklch === value) return prev;
          
          const updated = { ...prev };
          if (updated[tokenName]) {
            updated[tokenName] = {
              ...updated[tokenName],
              oklch: value,
              hex: isOklch && updated[tokenName].hex ? updated[tokenName].hex : updated[tokenName].hex,
            };
          }
          return updated;
        });
      } else {
        setDarkTokens((prev) => {
          // Only update if value actually changed
          if (prev[tokenName]?.oklch === value) return prev;
          
          const updated = { ...prev };
          if (updated[tokenName]) {
            updated[tokenName] = {
              ...updated[tokenName],
              oklch: value,
              hex: isOklch && updated[tokenName].hex ? updated[tokenName].hex : updated[tokenName].hex,
            };
          }
          return updated;
        });
      }
    },
    [scheduleCSSUpdate]
  );

  // Reset a single token to default
  const resetToken = useCallback(
    (tokenName: string, theme: 'light' | 'dark') => {
      const defaultTokens = theme === 'light' ? tokens : darkThemeTokens;
      const defaultToken = defaultTokens.find((t) => t.name === tokenName);
      
      if (defaultToken) {
        updateToken(tokenName, defaultToken.oklch, theme);
      }
    },
    [updateToken]
  );

  // Reset all tokens to default
  const resetAllTokens = useCallback(
    (theme: 'light' | 'dark') => {
      const defaultTokens = theme === 'light' ? tokens : darkThemeTokens;
      const tokensObj = tokensToObject(defaultTokens);
      
      // Apply all CSS variables at once
      const styleElement = theme === 'dark' 
        ? styleElementsRef.current.dark 
        : styleElementsRef.current.light;
      
      if (styleElement) {
        const selector = theme === 'dark' ? '[data-theme="dark"]' : ':root';
        applyAllCSSVariables(tokensObj, selector, styleElement);
      }
      
      if (theme === 'light') {
        setLightTokens(tokensObj);
      } else {
        setDarkTokens(tokensObj);
      }
    },
    [applyAllCSSVariables]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      lightTokens,
      darkTokens,
      updateToken,
      resetToken,
      resetAllTokens,
    }),
    [lightTokens, darkTokens, updateToken, resetToken, resetAllTokens]
  );

  return (
    <RizzUIThemeContext.Provider value={contextValue}>
      {children}
    </RizzUIThemeContext.Provider>
  );
}

export function useRizzUITheme() {
  const context = useContext(RizzUIThemeContext);
  if (context === undefined) {
    throw new Error('useRizzUITheme must be used within a RizzUIThemeProvider');
  }
  return context;
}

