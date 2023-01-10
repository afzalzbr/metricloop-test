import { forwardRef } from 'react';
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

// ----------------------------------------------------------------------

interface IconifyProps {
  icon: any;
  sx?: { [key: string | number | symbol]: any };
  width?: string | number;
  color?: string;
  [key: string | number | symbol]: any;
}

const Iconify = forwardRef(({ icon, width = 20, sx, ...other }: IconifyProps, ref) => (
  <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
));

Iconify.defaultProps = {
  width: 20,
  color: 'white'
}


export default Iconify;
