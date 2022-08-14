import {
  Box, Grid, IconButton, Paper, Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TicketCard = () => (
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
        <Typography variant='h6'>Bus Ticket</Typography>
        <Typography>From: Kaunas</Typography>
        <Typography>To: Vilnius</Typography>
        <Typography>Price: 10.99€</Typography>
      </Grid>
      <Grid
        xs={6}
        item
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={1}
      >
        <IconButton color='warning' sx={{ border: 1 }}>
          <EditIcon />
        </IconButton>
        <IconButton color='error' sx={{ border: 1 }}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Box
      component='img'
      src='https://www.sustainable-bus.com/wp-content/uploads/2019/12/scania-bus4.jpg'
      height={200}
      pt={0}
    />
  </Paper>
);

export default TicketCard;
