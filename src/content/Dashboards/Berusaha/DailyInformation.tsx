import { DarkMode } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';

function DailyInformation() {
  const [dateState, setDateState] = useState(new Date());
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
    setInterval(() => setDateState(new Date()), 30000);
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
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              px: 1
            }}
          >
            <CardContent>
              <Typography variant="inherit" noWrap>
                Sekarang jam
              </Typography>
              <Typography noWrap sx={{ fontSize: 50 }}>
                {dateState.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true
                })}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              px: 1
            }}
          >
            <CardContent>
              <Typography variant="inherit" noWrap>
                Friyay
              </Typography>
              <Typography noWrap sx={{ fontSize: 50 }}>
                {dateState.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={5} item>
          <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h4" component="h3" gutterBottom>
                  Hello Fandi!
                </Typography>
                <Typography variant="subtitle2">Udah Malem bro!</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <DarkMode sx={{ width: 44, height: 44, marginY: 'auto' }} />
                  <Box>
                    <Typography variant="subtitle2">13 &#8451;</Typography>
                    Sukarame, Bandar Lampung
                  </Box>
                </Box>
              </CardContent>
            </Box>
            <Avatar
              sx={{
                marginY: 'auto',
                width: 130,
                height: 130
              }}
              variant="rounded"
              alt="user"
              src="/static/images/avatars/1.jpg"
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default DailyInformation;
