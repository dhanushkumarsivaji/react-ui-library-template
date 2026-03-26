import { useState, useCallback, ReactNode } from 'react';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface AlertProps {
  /** Alert severity/color */
  severity?: 'success' | 'info' | 'warning' | 'error';
  /** MUI variant */
  variant?: 'filled' | 'outlined' | 'standard';
  /** Optional title */
  title?: string;
  /** Alert message content */
  children: ReactNode;
  /** Whether the alert can be dismissed */
  dismissible?: boolean;
  /** Called when the alert is dismissed */
  onDismiss?: () => void;
  /** Custom icon (pass false to hide) */
  icon?: ReactNode | false;
  /** Custom action area */
  action?: ReactNode;
}

/**
 * Feedback alert component built on MUI Alert.
 * Supports dismiss animation via Collapse.
 */
const Alert = ({
  severity = 'info',
  variant = 'standard',
  title,
  children,
  dismissible = false,
  onDismiss,
  icon,
  action,
}: AlertProps) => {
  const [open, setOpen] = useState(true);

  const handleDismiss = useCallback(() => {
    setOpen(false);
    onDismiss?.();
  }, [onDismiss]);

  const dismissAction = dismissible ? (
    <IconButton aria-label="Dismiss alert" color="inherit" size="small" onClick={handleDismiss}>
      <CloseIcon fontSize="inherit" />
    </IconButton>
  ) : undefined;

  return (
    <Collapse in={open}>
      <MuiAlert
        severity={severity}
        variant={variant}
        icon={icon === false ? false : icon}
        action={action || dismissAction}
        role="alert"
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </MuiAlert>
    </Collapse>
  );
};

export default Alert;
