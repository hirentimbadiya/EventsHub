import Head from 'next/head'
import HomePage from '@/home/home-page';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Events Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    }
  };
}
