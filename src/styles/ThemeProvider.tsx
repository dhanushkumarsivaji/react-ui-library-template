import { createContext, useContext, useMemo, useState, useCallback, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { lightTokens, darkTokens, type ThemeMode, type SemanticTokens } from './tokens';

interface ThemeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
  tokens: SemanticTokens;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * Hook to access the current theme mode and tokens.
 *
 * @example
 * const { mode, toggleMode, tokens } = useThemeMode();
 */
export const useThemeMode = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeMode must be used within a ThemeProvider');
  return ctx;
};

interface ThemeProviderProps {
  /** Initial theme mode (default: respects system preference) */
  defaultMode?: ThemeMode;
  /** Content to wrap */
  children: ReactNode;
}

/**
 * Theme provider with light/dark mode support.
 * Wraps MUI ThemeProvider and injects CSS variables for design tokens.
 *
 * @example
 * <ThemeProvider defaultMode="light">
 *   <App />
 * </ThemeProvider>
 */
const ThemeProvider = ({ defaultMode, children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (defaultMode) return defaultMode;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const toggleMode = useCallback(() => setMode((m) => (m === 'light' ? 'dark' : 'light')), []);

  const tokens = mode === 'dark' ? darkTokens : lightTokens;

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: tokens.colorPrimary },
          error: { main: tokens.colorError },
          success: { main: tokens.colorSuccess },
          warning: { main: tokens.colorWarning },
          info: { main: tokens.colorInfo },
          background: {
            default: tokens.colorBackground,
            paper: tokens.colorSurface,
          },
          text: {
            primary: tokens.colorText,
            secondary: tokens.colorTextSecondary,
            disabled: tokens.colorTextDisabled,
          },
          divider: tokens.colorBorder,
        },
      }),
    [mode, tokens],
  );

  // Inject CSS variables onto <html>
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(tokens).forEach(([key, value]) => {
      // camelCase → kebab-case CSS variable
      const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVar, value);
    });
    root.setAttribute('data-theme', mode);
  }, [tokens, mode]);

  const value = useMemo(() => ({ mode, toggleMode, setMode, tokens }), [mode, toggleMode, tokens]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
