import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../../../styles';

/**
 * Theme toggle button — switches between light and dark mode.
 * Must be used inside a ThemeProvider.
 */
const ThemeToggle = () => {
  const { mode, toggleMode } = useThemeMode();
  const label = mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <Tooltip title={label}>
      <IconButton onClick={toggleMode} aria-label={label} color="inherit">
        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
