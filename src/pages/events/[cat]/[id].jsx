import SingleEvent from "@/components/events/SingleEvent";
import Head from "next/head";
const EventPage = ({ eventData }) => {
    return (
        <>
            <Head>
                <title>{eventData[0].title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <SingleEvent eventData={eventData} />
        </>
    );
}

export default EventPage;

export const getStaticPaths = async () => {
    const data = await import("/data/data.json");
    const allEvents = data.allEvents;

    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city.charAt(0).toLowerCase() + path.city.slice(1),
                // we will used id because we have used it in the file name
                id: path.id,
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    };
}

export const getStaticProps = async (context) => {
    const { allEvents } = await import("/data/data.json");
    const id = context.params.id;
    const eventData = allEvents.filter((event) => event.id === id);

    return {
        props: { eventData },
    };
}