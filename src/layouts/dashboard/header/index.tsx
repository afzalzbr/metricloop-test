import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
import { HEADER_GRADIENT } from '../../../theme/palette';

// ----------------------------------------------------------------------

const NAV_WIDTH = 0;

const HEADER_MOBILE = 64;

export const HEADER_DESKTOP = 78;

const StyledRoot = styled(AppBar)(({ theme }: any) => ({
  // ...bgBlur({ color: theme?.palette?.background?.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 0}px)`,
  },
  background: HEADER_GRADIENT[0],
  zIndex: 1201,
}));

const StyledToolbar = styled(Toolbar)(({ theme }: any) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

// Header.propTypes = {
//   onOpenNav: PropTypes.func,
// };

interface HeaderProps {
  onOpenNav: () => void;
}

export default function Header({ onOpenNav }: HeaderProps) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        {/* <Searchbar /> */}
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover /> */}
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
