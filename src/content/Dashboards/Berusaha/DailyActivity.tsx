import AltRouteIcon from '@mui/icons-material/AltRoute';
import { Box, Card, Grid, Typography } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

function DailyActivity() {
  const [count, setCount] = useState<number>(0);
  const [elapsed, setElapsed] = useState<number>(0);
  
  const onAction = (event?: Event) => {
    setCount(count + 1);
  };

  const { getElapsedTime } = useIdleTimer({
    onAction,
    timeout: 10_000,
    throttle: 500
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.ceil(getElapsedTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Grid spacing={3} container>
        <Grid xs={12} sm={6} md={4} item>
          <Card>
            <Typography
              sx={{ padding: '20px 20px 0px 20px' }}
              variant="h3"
              component="h3"
              gutterBottom
            >
              Weekly Activity
            </Typography>
            <Box
              sx={{
                paddingX: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography sx={{ fontSize: 50, marginLeft: 2 }}>
                100 %
              </Typography>
              <Box>
                <AltRouteIcon
                  sx={{
                    background: '#f5f5f7',
                    borderRadius: 3,
                    marginY: 'auto',
                    width: 130,
                    height: 130
                  }}
                />
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card>
            <Typography
              sx={{ padding: '20px 20px 0px 20px' }}
              variant="h3"
              component="h3"
              gutterBottom
            >
              Worked This Week
            </Typography>
            <Box
              sx={{
                paddingX: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography sx={{ fontSize: 50, marginLeft: 2 }}>
                {elapsed}
              </Typography>
              <Box>
                <HistoryIcon
                  sx={{
                    background: '#f5f5f7',
                    borderRadius: 3,
                    marginY: 'auto',
                    width: 130,
                    height: 130
                  }}
                />
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card>
            <Typography
              sx={{ padding: '20px 20px 0px 20px' }}
              variant="h3"
              component="h3"
              gutterBottom
            >
              Project Worked
            </Typography>
            <Box
              sx={{
                paddingX: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography sx={{ fontSize: 50, marginLeft: 2 }}>02</Typography>
              <Box>
                <FolderOpenIcon
                  sx={{
                    background: '#f5f5f7',
                    borderRadius: 3,
                    marginY: 'auto',
                    width: 130,
                    height: 130
                  }}
                />
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default DailyActivity;
