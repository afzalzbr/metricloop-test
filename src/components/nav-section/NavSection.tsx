import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

interface NavSectionProps {
  data: any[];
  [key: string | number | symbol]: any;
  sxData: { [key: string | number | symbol]: any }
};

export default function NavSection({ data = [], sxData, ...other }: NavSectionProps) {
  return (
    <Box sx={sxData} {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} onlyIcon />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------


interface NavItemProps {
  item: {
    title: string;
    path: string;
    icon: string;
    info: string;
  },
  onlyIcon?: boolean;
}

function NavItem({ item, onlyIcon }: NavItemProps) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        color: 'text.white',
        '&.active': {
          color: 'text.white',
          bgcolor: 'action.selectedNav',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon}</StyledNavItemIcon>

      {onlyIcon ? null : <ListItemText disableTypography primary={title} />}

      {info && info}
    </StyledNavItem>
  );
}
