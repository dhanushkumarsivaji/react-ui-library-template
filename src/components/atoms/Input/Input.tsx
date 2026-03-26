import { forwardRef, InputHTMLAttributes } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
  /** Input label */
  label?: string;
  /** Helper text below the input */
  helperText?: string;
  /** Error state */
  error?: boolean;
  /** MUI variant */
  variant?: 'outlined' | 'filled' | 'standard';
  /** MUI size */
  size?: 'small' | 'medium';
  /** Full width */
  fullWidth?: boolean;
  /** Start adornment (icon/text) */
  startAdornment?: React.ReactNode;
  /** End adornment (icon/text) */
  endAdornment?: React.ReactNode;
}

/**
 * Accessible text input built on MUI TextField.
 * Forwards ref for form library integration (react-hook-form, formik).
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error = false,
      variant = 'outlined',
      size = 'medium',
      fullWidth = false,
      startAdornment,
      endAdornment,
      id,
      ...rest
    },
    ref,
  ) => (
    <TextField
      inputRef={ref}
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      slotProps={{
        input: {
          startAdornment: startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : undefined,
          endAdornment: endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : undefined,
        },
      }}
      {...rest}
    />
  ),
);

Input.displayName = 'Input';

export default Input;
