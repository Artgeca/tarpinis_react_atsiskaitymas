import {
  Box, Grid, IconButton, Paper, Tooltip, Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TicketCard = ({
  id, from, to, price, type, onDelete, onEdit,
}) => (
  <Paper sx={{
    p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
  }}
  >
    <Grid container pb={1}>
      <Grid
        item
        xs={6}
        display='flex'
        flexDirection='column'
        gap={1}
      >
        <Typography variant='h6'>
          {type.title}
          {' '}
          Ticket
        </Typography>
        <Typography>
          From:
          {' '}
          {from}
        </Typography>
        <Typography>
          To:
          {' '}
          {to}
        </Typography>
        <Typography>
          Price
          :
          {' '}
          {price}
          €
        </Typography>
      </Grid>
      <Grid
        xs={6}
        item
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={1}
      >
        <Tooltip title='Edit'>
          <IconButton color='warning' sx={{ border: 1 }} onClick={() => onEdit(id)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Delete'>
          <IconButton color='error' sx={{ border: 1 }} onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
    <Box
      component='img'
      src={type.img}
      height={200}
      width={300}
      sx={{
        objectFit: 'cover',
      }}
    />
  </Paper>
);

export default TicketCard;
