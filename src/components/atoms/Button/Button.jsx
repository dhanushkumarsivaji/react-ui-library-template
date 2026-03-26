import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * Primary UI button component built on MUI.
 * Supports all MUI Button variants plus loading state.
 */
const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  fullWidth = false,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  ...rest
}) => (
  <MuiButton
    variant={variant}
    color={color}
    size={size}
    disabled={disabled || loading}
    startIcon={loading ? <CircularProgress size={16} color="inherit" /> : startIcon}
    endIcon={endIcon}
    fullWidth={fullWidth}
    onClick={onClick}
    type={type}
    aria-label={ariaLabel}
    aria-busy={loading}
    {...rest}
  >
    {children}
  </MuiButton>
);

Button.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  /** MUI button variant */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /** MUI color */
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info']),
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Shows loading spinner and disables interaction */
  loading: PropTypes.bool,
  /** Icon before the label */
  startIcon: PropTypes.node,
  /** Icon after the label */
  endIcon: PropTypes.node,
  /** Stretch to fill container width */
  fullWidth: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
  /** HTML button type */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Accessible label */
  'aria-label': PropTypes.string,
};

export default Button;
