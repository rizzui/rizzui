'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { tokens, darkThemeTokens } from '@site/src/components/color-tokens/tokens';

type TokenValue = {
  hex: string;
  oklch: string;
};

type ThemeTokens = {
  [key: string]: TokenValue;
};

type ThemeContextType = {
  lightTokens: ThemeTokens;
  darkTokens: ThemeTokens;
  updateToken: (tokenName: string, value: string, theme: 'light' | 'dark') => void;
  resetToken: (tokenName: string, theme: 'light' | 'dark') => void;
  resetAllTokens: (theme: 'light' | 'dark') => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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

  // Apply CSS variables to document root
  const applyCSSVariables = useCallback(
    (tokens: ThemeTokens, selector: ':root' | '[data-theme="dark"]' = ':root') => {
      const root = document.documentElement;
      const isDark = selector === '[data-theme="dark"]';
      
      // Create or update style element
      let styleId = isDark ? 'rizzui-dark-theme-vars' : 'rizzui-light-theme-vars';
      let styleElement = document.getElementById(styleId) as HTMLStyleElement;

      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
      }

      // Build CSS rules
      const cssRules: string[] = [];
      Object.entries(tokens).forEach(([name, value]) => {
        cssRules.push(`  ${name}: ${value.oklch};`);
      });

      styleElement.textContent = `${selector} {\n${cssRules.join('\n')}\n}`;
    },
    []
  );

  // Apply initial CSS variables
  useEffect(() => {
    applyCSSVariables(lightTokens, ':root');
    applyCSSVariables(darkTokens, '[data-theme="dark"]');
  }, [lightTokens, darkTokens, applyCSSVariables]);

  // Update a single token
  const updateToken = useCallback(
    (tokenName: string, value: string, theme: 'light' | 'dark') => {
      const isOklch = value.startsWith('oklch') || value.endsWith('rem');
      
      if (theme === 'light') {
        setLightTokens((prev) => {
          const updated = { ...prev };
          if (updated[tokenName]) {
            updated[tokenName] = {
              ...updated[tokenName],
              oklch: value,
              // If it's a color token and we're updating OKLCH, keep hex as is
              // If it's a size token, hex stays empty
              hex: isOklch && updated[tokenName].hex ? updated[tokenName].hex : updated[tokenName].hex,
            };
          }
          return updated;
        });
      } else {
        setDarkTokens((prev) => {
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
    []
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
      
      if (theme === 'light') {
        setLightTokens(tokensObj);
      } else {
        setDarkTokens(tokensObj);
      }
    },
    []
  );

  return (
    <RizzUIThemeContext.Provider
      value={{
        lightTokens,
        darkTokens,
        updateToken,
        resetToken,
        resetAllTokens,
      }}
    >
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

