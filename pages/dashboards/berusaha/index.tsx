import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageHeader from '@/content/Dashboards/Berusaha/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';

import AccountBalance from '@/content/Dashboards/Berusaha/AccountBalance';
import DailyInformation from '@/content/Dashboards/Berusaha/DailyInformation';
import AccountSecurity from '@/content/Dashboards/Berusaha/AccountSecurity';
import WatchList from '@/content/Dashboards/Berusaha/WatchList';
import DailyActivity from '@/content/Dashboards/Berusaha/DailyActivity';
import GrowthSecion from '@/content/Dashboards/Berusaha/GrowthSection';

function DashboardBerusaha() {
  return (
    <>
      <Head>
        <title>Berusaha cool</title>
      </Head>
      <PageTitleWrapper>
        <DailyInformation />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <DailyActivity />
          </Grid>
          <Grid item xs={12}>
            <GrowthSecion />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardBerusaha.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardBerusaha;
