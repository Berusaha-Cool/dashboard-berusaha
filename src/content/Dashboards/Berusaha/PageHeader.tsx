import { DarkMode } from '@mui/icons-material';
import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(12),
            height: theme.spacing(12)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Hello {user.name}!
        </Typography>
        <Typography variant="subtitle2">Udah Malem bro!</Typography>
        <Box sx={{ display: 'flex', gap:1 }}>
          <DarkMode sx={{width:32, height:32, marginY:'auto'}}/>
          <Box>
            <Typography variant="subtitle2">13 &#8451;</Typography>
            Sukarame, Bandar Lampung
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
