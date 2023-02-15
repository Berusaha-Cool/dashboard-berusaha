import TabsGrowth from '@/components/TabsGrowth';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
const CardCover = styled(Card)(
  ({ theme }) => `
      position: relative;
  
      .MuiCardMedia-root {
        height: ${theme.spacing(26)};
      }
  `
);

const CardCoverAction = styled(Box)(
  ({ theme }) => `
      position: absolute;
      right: ${theme.spacing(2)};
      bottom: ${theme.spacing(2)};
  `
);

function GrowthSecion() {
  return (
    <>
      <Grid spacing={0} container sx={{ gap: 2 }}>
        <Grid
          xs={12}
          sm={12}
          md={8}
          item
          sx={{ background: '#ffffff', borderRadius: 1 }}
        >
          <Box>
            <Typography
              sx={{ padding: '20px 20px 0px 20px' }}
              variant="h3"
              component="h3"
              gutterBottom
            >
              Suplement Berusaha
            </Typography>
          </Box>
          <TabsGrowth />
          <Box sx={{ marginY: 2 }}>
            <ScrollMenu>
              <CardItems />
              <CardItems />
              <CardItems />
              <CardItems />
              <CardItems />
              <CardItems />
              <CardItems />
              <CardItems />
              <CardItems />
            </ScrollMenu>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={3}>
          <Typography variant='h3'>
            Kamar Virtual
          </Typography>
          <Card>
            <CardCover>
              <CardMedia image={'/static/images/avatars/coverStoryMode.jpg'} />
              <CardCoverAction>
                <label htmlFor="change-cover">
                  <Button variant="contained" component="span">
                    Yuk Fokus Yuk !!
                  </Button>
                </label>
              </CardCoverAction>
            </CardCover>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

function CardItems() {
  return (
    <Card sx={{ width: 240, margin:2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/placeholders/covers/1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Startup Basics Playlist
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A masterclass on starting up. Learn about Accelerators. Building
            your team & more.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default GrowthSecion;
