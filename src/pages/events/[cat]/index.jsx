import Image from 'next/image'
import Link from 'next/link';

const EventsCatPage = ({ data  , pageName}) => {
    return (
        <div>
            <h1>Events in {pageName}</h1>
            {data.map((cat) => (
                <Link key={cat.id} href={`/events/${cat.city.charAt(0).toLowerCase() + cat.city.slice(1)}/${cat.id}`} passHref>
                    <h2>{cat.title}</h2>
                    <Image src={cat.image} alt={cat.title} width={200} height={200} />
                    <p>{cat.description}</p>
                </Link>
            )
            )}
        </div >
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
    const { allEvents } = await import("/data/data.json");
    const data = allEvents.filter(cat => cat.city === id.charAt(0).toUpperCase() + id.slice(1));
    return {
        props: { 
            data , 
            pageName : id.charAt(0).toUpperCase() + id.slice(1)
        }
    };
}
