import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HomePage = ({ data }) => (
    <>
        <h1 className='font-bold text-[25px] max-h-[700px] pl-5 font-ubuntu py-2'>Dicover Events , Meetups , Conferences happening in Bengaluru, Hyderabad and Delhi</h1>
        <main>
            {data.map((cat) => {
                return (
                    <Link key={cat.id} href={`/events/${cat.id}`}>
                        <h2>{cat.title}</h2>
                        <Image src={cat.image} alt={cat.title} width={200} height={200} />
                        <p>{cat.description}</p>
                    </Link>
                )
            })}
        </main>
    </>
)

export default HomePage;