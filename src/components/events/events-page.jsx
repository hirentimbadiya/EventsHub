import React from 'react'
import Link from 'next/link';

const EventsPageComponent = ({ data }) => (
  <>
    <div className='flex flex-col items-center justify-center min-h-[81vh]'>
      <h1 className='font-bold sm:text-[45px] text-[32px] max-h-[700px] 
   font-ubuntu py-2 text-gradient tracking-wider mxs:text-[25px] '>Explore Events</h1>
      <div className='flex'>
        {data.map((cat) => {
          return (
            <div key={cat.id} className='flex flex-row font-mono rounded-[14px] items-center justify-center'>
              <Link  href={`/events/${cat.id}`} legacyBehavior>
                <a className='relative'>
                  <div className='border-2px border-[#a08686] rounded-[24px] object-cover event_img'>
                    <img src={cat.image} alt={cat.title} width={280} height={500} className="
                           rounded-[24px] w-[100%] h-[100%] p-2" />
                  </div>
                  <h2 className='text-[30px] absolute top-[220px] font-extrabold left-[20px] font-ubuntu card-grd'>{cat.title}</h2>
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