import Page from '@/components/side-effects/Page'
import withAuth from '@/components/side-effects/withAuth'
import Head from 'next/head'

const Settings = () => (
  <Page>
    <Head>
      <title>Settings</title>
    </Head>
    <div
      className="flex h-[60px] flex-row items-center justify-between border-b border-gray-800 px-6"
      role="banner"
    >
      <h1 className="text-20 font-medium">Settings</h1>
    </div>
  </Page>
)

export default withAuth(Settings)
