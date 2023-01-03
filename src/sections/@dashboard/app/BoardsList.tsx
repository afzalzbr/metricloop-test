// @mui
import { Grid } from '@mui/material';
import { BoardProps } from '../../../components/Common/BoardCard/BoardCard';

// ----------------------------------------------------------------------

interface BoardsListProps {
  boards: BoardProps[];
  [key: string | number | symbol]: any
}

export default function ProductList({ boards, ...other }: BoardsListProps) {
  return (
    <Grid container spacing={3} {...other}>
      {boards.map((board) => (
        <Grid key={board?.id || board} item xs={12} sm={6} md={3}>
          Hello boards
        </Grid>
      ))}
    </Grid>
  );
}
