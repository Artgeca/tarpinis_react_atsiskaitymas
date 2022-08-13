import { Box, Paper, Typography } from '@mui/material';
import React from 'react'

const TicketCard = () => {
  return (
    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Typography variant='h6' gutterBottom>Bus Ticket</Typography>
      <Typography gutterBottom>Kaunas - Vilnius</Typography>
      <Typography gutterBottom>Price: 10.99€</Typography>
      <Box component='img'
        src='https://www.sustainable-bus.com/wp-content/uploads/2019/12/scania-bus4.jpg'
        height={200}
        pt={0}/>
    </Paper>
  )
}

export default TicketCard