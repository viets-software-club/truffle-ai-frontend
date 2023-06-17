import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Page from '@/components/side-effects/Page'
import Details from '@/components/side-effects/Details'
import withAuth from '@/components/side-effects/withAuth'
import Head from 'next/head'

/**
 * Project detail page (displays GitHub data, top tweets, etc.)
 */
const DetailPage: NextPage = () => {
  // Get project id from URL
  const {
    query: { id }
  } = useRouter()

  return (
    <Page>
      <Head>
        <title>Details</title>
      </Head>
      <Details id={(typeof id === 'string' ? id : id?.join('')) || ''} />
    </Page>
  )
}

export default withAuth(DetailPage)
