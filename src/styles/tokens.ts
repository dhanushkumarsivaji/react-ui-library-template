/**
 * Design Tokens — the single source of truth for the design system.
 *
 * Architecture: Primitive → Semantic → Component
 *
 * - Primitive tokens: raw values (colors, spacing, radii)
 * - Semantic tokens: purpose-driven aliases (background, text, border)
 * - Component tokens: component-specific overrides (button-bg, card-shadow)
 *
 * These tokens are consumed by the ThemeProvider to generate CSS variables
 * and MUI theme overrides. Add new tokens here, not in component styles.
 */

// ─── Primitive Tokens ────────────────────────────────────────
export const primitives = {
  // Colors
  white: '#ffffff',
  black: '#000000',
  gray50: '#fafafa',
  gray100: '#f5f5f5',
  gray200: '#eeeeee',
  gray300: '#e0e0e0',
  gray400: '#bdbdbd',
  gray500: '#9e9e9e',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',

  blue50: '#e3f2fd',
  blue500: '#2196f3',
  blue600: '#1e88e5',
  blue700: '#1976d2',

  red50: '#ffebee',
  red500: '#f44336',
  red700: '#d32f2f',

  green50: '#e8f5e9',
  green500: '#4caf50',
  green700: '#388e3c',

  amber50: '#fff8e1',
  amber500: '#ff9800',
  amber700: '#f57c00',

  // Spacing
  space0: '0px',
  space1: '4px',
  space2: '8px',
  space3: '12px',
  space4: '16px',
  space5: '20px',
  space6: '24px',
  space8: '32px',
  space10: '40px',
  space12: '48px',

  // Border Radius
  radiusSm: '4px',
  radiusMd: '8px',
  radiusLg: '12px',
  radiusXl: '16px',
  radiusFull: '9999px',

  // Typography
  fontSizeXs: '0.75rem',
  fontSizeSm: '0.875rem',
  fontSizeMd: '1rem',
  fontSizeLg: '1.125rem',
  fontSizeXl: '1.25rem',
  fontSize2xl: '1.5rem',

  // Shadows
  shadowSm: '0 1px 2px 0 rgba(0,0,0,0.05)',
  shadowMd: '0 4px 6px -1px rgba(0,0,0,0.1)',
  shadowLg: '0 10px 15px -3px rgba(0,0,0,0.1)',
} as const;

// ─── Semantic Tokens (Light) ─────────────────────────────────
export const lightTokens = {
  colorBackground: primitives.white,
  colorSurface: primitives.gray50,
  colorText: primitives.gray900,
  colorTextSecondary: primitives.gray600,
  colorTextDisabled: primitives.gray400,
  colorBorder: primitives.gray300,
  colorBorderHover: primitives.gray400,

  colorPrimary: primitives.blue700,
  colorPrimaryHover: primitives.blue600,
  colorPrimaryText: primitives.white,

  colorError: primitives.red700,
  colorErrorBg: primitives.red50,
  colorSuccess: primitives.green700,
  colorSuccessBg: primitives.green50,
  colorWarning: primitives.amber700,
  colorWarningBg: primitives.amber50,
  colorInfo: primitives.blue700,
  colorInfoBg: primitives.blue50,

  colorOverlay: 'rgba(0,0,0,0.5)',
  shadow: primitives.shadowMd,
} as const;

// ─── Semantic Tokens (Dark) ──────────────────────────────────
export const darkTokens: typeof lightTokens = {
  colorBackground: primitives.gray900,
  colorSurface: primitives.gray800,
  colorText: primitives.gray100,
  colorTextSecondary: primitives.gray400,
  colorTextDisabled: primitives.gray600,
  colorBorder: primitives.gray700,
  colorBorderHover: primitives.gray600,

  colorPrimary: primitives.blue500,
  colorPrimaryHover: primitives.blue600,
  colorPrimaryText: primitives.white,

  colorError: primitives.red500,
  colorErrorBg: '#2c1517',
  colorSuccess: primitives.green500,
  colorSuccessBg: '#152c17',
  colorWarning: primitives.amber500,
  colorWarningBg: '#2c2415',
  colorInfo: primitives.blue500,
  colorInfoBg: '#15202c',

  colorOverlay: 'rgba(0,0,0,0.7)',
  shadow: '0 4px 6px -1px rgba(0,0,0,0.3)',
};

export type SemanticTokens = typeof lightTokens;
export type ThemeMode = 'light' | 'dark';
