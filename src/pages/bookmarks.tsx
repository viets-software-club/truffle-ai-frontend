import ProjectsTable from '@/components/pure/ProjectsTable'
import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import Head from 'next/head'

const Bookmarks = () => (
  <Page>
    <Head>
      <title>Bookmarks</title>
    </Head>
    <ProjectsTable />
  </Page>
)
export default withAuth(Bookmarks)
