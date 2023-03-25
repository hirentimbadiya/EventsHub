import Image from 'next/image'

const EventsCatPage = ({ data }) => {
    return (
        <div>
            {/* <h1>Events in Bengaluru</h1> */}
            {data.map((cat) => {
                return (
                    <a href={`/events/${cat.city}/${cat.id}`}>
                        <h2>{cat.title}</h2>
                        <Image src={cat.image} alt={cat.title} width={200} height={200} />
                        <p>{cat.description}</p>
                    </a>
                )
            })}
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
        props: { data }
    };
}
