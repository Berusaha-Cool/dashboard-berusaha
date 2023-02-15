import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

export default function TabsGrowth() {
  return (
    <>
      <Grid spacing={0} container sx={{gap:1, margin:2}}>
        <Grid
          xs={12}
          sm={12}
          md={4}
          sx={{
            padding: 2,
            border: 1,
            borderRadius: 2,
            textAlign: 'center'
          }}
        >
          <Typography variant="h5">Concept Validation & MVP</Typography>
          <Typography variant="subtitle2" color={'primary'}>
            12 sugested steps
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          sx={{
            padding: 2,
            border: 1,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5">Raising Capital</Typography>
          <Typography variant="subtitle2" color={'primary'}>
            12 sugested steps
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={3}
          sx={{
            padding: 2,
            border: 1,
            borderRadius: 2,
            textAlign: 'center'
          }}
        >
          <Typography variant="h5">Growth & Scalling</Typography>
          <Typography variant="subtitle2" color={'primary'}>
            9 sugested steps
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
