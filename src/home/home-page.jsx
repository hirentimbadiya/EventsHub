import React from 'react'
import Link from 'next/link';

const HomePage = ({ data }) => (
    <>
        <h1 className='font-bold text-[29px] max-h-[700px] pl-5 font-ubuntu py-2 text-gradient'>Dicover Events , Meetups , Conferences happening in Bengaluru, Hyderabad and Delhi</h1>
        <main>
            {data.map((cat) => {
                return (
                    <Link key={cat.id} href={`/events/${cat.id}`} legacyBehavior>
                        <a>
                            <h2>{cat.title}</h2>
                            <img src={cat.image} alt={cat.title}  />
                            <p>{cat.description}</p>
                        </a>
                    </Link>
                )
            })}
        </main>
    </>
)

export default HomePage;