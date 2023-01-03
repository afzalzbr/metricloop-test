import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// mock
import account from '../../../_mock/account';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import NavSection from '../../../components/nav-section';
//
import navConfig from './config';
import Logo from '../../../components/Common/Logo';
import { HEADER_DESKTOP } from '../header';

// ----------------------------------------------------------------------

const NAV_WIDTH = 80;

// const StyledAccount = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(2, 2.5),
//   borderRadius: Number(theme.shape.borderRadius) * 1.5,
//   backgroundColor: alpha(theme.palette.grey[500], 0.12),
// }));

// ----------------------------------------------------------------------

interface NavType {
  openNav: boolean;
  onCloseNav: () => void,
}

Nav.defaultProps = {
  openNav: false,
  onCloseNav: () => { },
};

export default function Nav({ openNav, onCloseNav }: NavType) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <>
      {/* <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
      </Box> */}
      {/* <Logo disabledLink={false} /> */}

      <NavSection sxData={{}} data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.sideNav',
              borderRightStyle: 'dashed',
              top: HEADER_DESKTOP,
              borderRadius: '0px 18px 18px 0px',
              height: `calc(100vh - ${HEADER_DESKTOP}px)`
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
