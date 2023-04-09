import Head from 'next/head';
import AllEvents from '@/components/events/AllEvents';

const EventsCatPage = ({ data, pageName }) => {
    return (
        <>
            <Head>
                <title>Events in {pageName}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <AllEvents data={data} pageName={pageName} />
        </>
    );
}

export default EventsCatPage;


export const getStaticPaths = async () => {
    const { events_categories } = await import("/data/data.json");
    const allPaths = events_categories.map((ct) => {
        return {
            params: {
                cat: ct.id.toString(),
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.cat;
    console.log(id);
    const { allEvents } = await import("/data/data.json");
    const data = allEvents.filter(cat => cat.city === id.charAt(0).toUpperCase() + id.slice(1));
    return {
        props: {
            data,
            pageName: id.charAt(0).toUpperCase() + id.slice(1)
        }
    };
}
