import React from 'react'
import Link from 'next/link';

const HomePage = ({ data }) => (
    <div className='flex flex-col mmd:items-center mmd:justify-center '>
        <h1 className='font-bold text-[18px] max-h-[700px] mb-5 sm:pl-5 font-ubuntu py-2 text-gradient sm:text-[29px]'>Dicover Events , Meetups , Conferences happening in Bengaluru, Hyderabad and Delhi</h1>
        <main className='alt-div' >
            <div className='card'>
                {data.map((cat) => {
                    return (
                        <div key={cat.id} className="home_div">
                            <Link className='card' href={`/events/${cat.id}`} legacyBehavior >
                                <a className="home_Link">
                                    <div className='image flex'>
                                        <img src={cat.image} alt={cat.title} />
                                    </div>
                                    <div className='content'>
                                        <h2>{cat.title}</h2>
                                        <p>{cat.description}</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </main>
    </div>
)

export default HomePage;