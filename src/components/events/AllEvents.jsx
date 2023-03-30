import React from 'react'
import Link from 'next/link'

const AllEvents = ({data , pageName}) => {
    return (
        <div>
            <h1 className='text-[28px] font-bold text-center text-gradient pt-5'>Events in {pageName}</h1>
            <div className='grid grid-cols-3 mlg:grid-cols-2 msm:grid-cols-1 gap-4 items-center justify-center p-5'>
                {data.map((cat) => (
                    <div key={cat.id}  className='flex flex-col p-3 justify-center items-center'>
                        <h2 className='text-[22px] msm:text-[20px] mt-5 mb-3 font-ubuntu tracking-wide evt-grd'>{cat.title}</h2>
                        <Link href={`/events/${cat.city.charAt(0).toLowerCase() + cat.city.slice(1)}/${cat.id}`} legacyBehavior>
                            <a className='flex flex-col  mmd:items-center mmd:justify-center'>
                                <img src={cat.image} alt={cat.title} width={200} height={200} className="rounded-2xl city-e-img" />
                            </a>
                        </Link>
                    </div>
                )
                )}
            </div >
        </div>
    )
}

export default AllEvents