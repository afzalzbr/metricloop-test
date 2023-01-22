import React from 'react';
import { Link } from "react-router-dom";
// @mui
import { Box, Card, Typography, Stack } from '@mui/material';

import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import SvgColor from '../../../components/svg-color';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/boards/${name}.svg`} sx={{ width: 1, height: 1 }} />;


// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

export interface BoardProps {
  id: any;
  [key: string | number | symbol]: any
}

export interface BoardCardProps {
  board: BoardProps
}

const StyledCardHeader = styled(CardHeader)({
  '.MuiCardHeader-content': {
    '.MuiCardHeader-title': {
      color: '#575757',
      fontFamily: 'Sulphur Point',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '20px',
    }
  }
})

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  background: theme.palette.background.sideNav,
  padding: '10px 16px'
}))

const FooterTitle = styled(Typography)({
  fontFamily: 'Sulphur Point',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '16px',
  /* identical to box height */
  color: '#FFFFFF',
})

const FooterCreationTime = styled(Typography)({
  fontFamily: 'Sulphur Point',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '10px',
  /* identical to box height */
  color: '#FFFFFF',
})

const FooterUpdateTime = styled(Typography)({
  fontFamily: 'Sulphur Point',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '10px',
  /* identical to box height */
  color: '#EDDFDF',
})

const StyledFooterAvatar = styled(Avatar)({
  color: '#575757',
  height: '28px',
  width: '28px',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ":hover": {
    cursor: 'pointer',
  }
})


export default function BoardCard({ board }: BoardCardProps) {
  const { name, price, colors, status, priceSale } = board;

  return (
    <Link to={`${window.location.pathname}/board?id=${name}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ boxShadow: '0px 4px 22px rgba(0, 0, 0, 0.24)' }}>
        <StyledCardHeader
          avatar={
            <img src={'/assets/icons/boards/board_icon.svg'} alt='le' />
          }
          title="Rootpointers"
        />

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="boardTitle">
            {name}
          </Typography>
          <Typography variant='boardDescription'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography
            component="span"
            variant="body1"
            sx={{
              color: 'text.disabled',
              textDecoration: 'line-through',
            }}
          >
            {priceSale && fCurrency(priceSale)}
          </Typography>
          <CardMedia
            sx={{ height: 140 }}
            image="/assets/images/boards/board_image.svg"
            title="green iguana"
          />
        </Stack>
        <StyledCardActions>
          <Grid container  >
            <Grid xs={6} md={8}>
              <FooterTitle>Metricloop</FooterTitle>
              <Stack direction="row" spacing={2}>
                <FooterCreationTime>1/9/2023-11:32pm</FooterCreationTime>
                <FooterUpdateTime>Edited 1 hour ago</FooterUpdateTime>
              </Stack>
            </Grid>
            <Grid xs={6} md={4}>
              <Stack direction="row-reverse" spacing={2}>
                {['yellow', 'white'].map(item => (
                  <StyledFooterAvatar
                    sx={{ bgcolor: item }} aria-label="recipe"
                  >
                    {item[0].toUpperCase()}
                  </StyledFooterAvatar>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </StyledCardActions>
      </Card>
    </Link>
  );
}
