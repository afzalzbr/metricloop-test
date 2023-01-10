// @mui
import { Grid } from '@mui/material';
import BoardCard, { BoardProps } from '../../../components/Common/BoardCard/BoardCard';

// ----------------------------------------------------------------------

interface BoardsListProps {
  boards: BoardProps[];
  [key: string | number | symbol]: any
}

export default function BoardsList({ boards, ...other }: BoardsListProps) {
  return (
    <Grid container spacing={16} {...other}>
      {boards.map((board) => (
        <Grid key={board?.id || board} item xs={3} sm={6} md={3}>
          <BoardCard
            board={board}
          />
        </Grid>
      ))}
    </Grid>
  );
}
