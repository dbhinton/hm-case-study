import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import OrderTimeByHour from './OrderCountByHour';
import DriveThruScatterplot from './DriveThruScatterplot'
import AverageTotalTimeByStoreIdChart from './AverageTotalTimeByStoreIdChart'
import OrderPickupTimeScatterplot from './OrderPickupTimeScatterplot'
import AverageWaitTimeByStoreIdChart from './AverageWaitTimeByStoreIdChart'

interface DashboardProps {
  toggleDrawer: () => void;
}


const Root = styled('div')({
  flexGrow: 1,
  padding: '16px',
});

const Section = styled(Paper)(({ theme }) => ({
  padding: '16px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  '@media (max-width: 600px)': {
    padding: '8px',
  },
}));

const Dashboard = ({ toggleDrawer }: DashboardProps) => {
  return (
    <Root>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Section>
            <Typography variant="h6">Drive-Thru Times</Typography>
            {/* Add your Drive-Thru Times component here */}
          </Section>
        </Grid>

        <Grid item xs={12} md={6}>
        <Section>
            <AverageTotalTimeByStoreIdChart />
          </Section>
        </Grid>
        <Grid item xs={12} md={6}>
          <Section>
          <AverageWaitTimeByStoreIdChart />
          </Section>
        </Grid>
        <Grid item xs={12}>
          <Section>
          <OrderTimeByHour />
          </Section>
        </Grid>
        <Grid item xs={12}>
          <Section>
            <DriveThruScatterplot />
          </Section>
        </Grid>

        <Grid item xs={12}>
          <Section>
          <OrderPickupTimeScatterplot />
          </Section>
        </Grid>
      </Grid>
    </Root>
  );
};

export default Dashboard;
