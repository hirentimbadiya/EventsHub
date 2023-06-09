import EventsPageComponent from '@/components/events/events-page';
import Head from 'next/head'

const EventsPage = ({ data }) => {
    return <>
        <Head>
            <title>Events Page</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <EventsPageComponent data={data} />
    </>;
}

export default EventsPage;


export const getStaticProps = async (context) => {
    const { events_categories } = await import("/data/data.json");
    return {
        props: {
            data: events_categories
        }
    };
}


