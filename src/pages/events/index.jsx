import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const EventsPage = ({ data }) => {
    return <>
        <Head>
            <title>Events Page</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <h1 className='font-bold text-[25px] max-h-[700px] 
            pl-5 font-ubuntu py-2'>Explore Events</h1>
            <div>
                {data.map((cat) => {
                    return (
                        <Link key={cat.id} href={`/events/${cat.id}`}>
                            <h2>{cat.title}</h2>
                            <Image src={cat.image} alt={cat.title} width={280} height={500} />
                        </Link>
                    )
                })}
            </div>
        </div>
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


