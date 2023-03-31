import React from 'react'
import Link from 'next/link';

const EventsPageComponent = ({ data }) => (
  <>
    <div className='flex flex-col items-center justify-center min-h-[81vh]'>
      <h1 className='font-bold sm:text-[45px] text-[32px] max-h-[700px] 
   font-ubuntu py-2 text-gradient tracking-wider mxs:text-[25px] '>Explore Events</h1>
      <div className='flex flex-col md:flex-row'>
        {data.map((cat) => {
          return (
            <div key={cat.id} className='flex w-full h-[30%] flex-row font-mono rounded-[14px] items-center justify-center'>
              <Link  href={`/events/${cat.id}`} legacyBehavior>
                <a className='relative flex flex-col items-center justify-center'>
                  <div className='border-2px flex mmd:w-[100%] border-[#a08686] rounded-[24px] object-cover event_img'>
                    <img src={cat.image} alt={cat.title} 
                    className=" rounded-[24px] p-2" />
                  </div>
                  <h2 className='text-[30px] md:absolute md:top-[220px] font-extrabold md:left-[20px] 
                  font-ubuntu card-grd mmd:text-[24px] mxs:text-[16px]'>{cat.title}</h2>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  </>
)

export default EventsPageComponent;