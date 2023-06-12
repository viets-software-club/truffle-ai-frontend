import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import ProjectsTable from '@/components/pure/ProjectsTable'
import Head from 'next/head'

/**
 * Overview page with trending projects
 */
const Home = () => (
  <Page>
    <Head>
      <title>Overview</title>
    </Head>
    <ProjectsTable />
  </Page>
)

export default withAuth(Home)
