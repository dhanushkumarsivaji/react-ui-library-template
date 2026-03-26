import { ReactNode, useCallback } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Called when the modal requests to close */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal body content */
  children: ReactNode;
  /** Action buttons at the bottom */
  actions?: ReactNode;
  /** Maximum dialog width */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  /** Whether the dialog takes up the full width of maxWidth */
  fullWidth?: boolean;
  /** Whether the dialog is full screen */
  fullScreen?: boolean;
  /** Disable closing on backdrop click */
  disableBackdropClose?: boolean;
  /** Disable closing on Escape key */
  disableEscapeClose?: boolean;
  /** Show dividers between title, content, and actions */
  dividers?: boolean;
  /** Accessible label for the dialog (required if no title) */
  'aria-label'?: string;
}

/**
 * Accessible modal dialog built on MUI Dialog.
 * Manages focus trapping, escape key handling, and ARIA attributes.
 */
const Modal = ({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = 'sm',
  fullWidth = true,
  fullScreen = false,
  disableBackdropClose = false,
  disableEscapeClose = false,
  dividers = false,
  'aria-label': ariaLabel,
}: ModalProps) => {
  const handleClose = useCallback(
    (_event: object, reason: string) => {
      if (reason === 'backdropClick' && disableBackdropClose) return;
      if (reason === 'escapeKeyDown' && disableEscapeClose) return;
      onClose();
    },
    [onClose, disableBackdropClose, disableEscapeClose],
  );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      aria-label={!title ? ariaLabel : undefined}
      aria-labelledby={title ? 'modal-dialog-title' : undefined}
    >
      {title && (
        <DialogTitle
          id="modal-dialog-title"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: 1 }}
        >
          {title}
          <IconButton aria-label="Close dialog" onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}
      {title && dividers && <Divider />}
      <DialogContent dividers={dividers}>{children}</DialogContent>
      {actions && (
        <>
          {dividers && <Divider />}
          <DialogActions>{actions}</DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default Modal;
