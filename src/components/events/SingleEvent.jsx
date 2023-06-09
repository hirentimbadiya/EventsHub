import { useRouter } from 'next/router';
import React from 'react'
import { useRef, useState } from 'react';
const SingleEvent = ({ eventData }) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState("");

    const submitResponse = async (e) => {
        e.preventDefault();
        // * get the email value and path
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(emailValue)) {
            alert("Please Enter Correct Email");
        }

        try {
            // ! POST request using fetch with async/await
            const response = await fetch('/api/email-reg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: emailValue, eventId })
            });

            if (!response.ok) {
                throw new Error(`Error : ${response.status}`);
            }

            const data = await response.json();
            setMessage(data.message);
            inputEmail.current.value = "";
        } catch (error) {
            console.log('Error', error);
        }
    };

    return (
        <div>
            {eventData.map((event) => {
                return (
                    <div key={event.id} className="pt-5 pl-5 flex flex-col items-center justify-center">
                        <img src={event.image} alt={event.title} className="w-[50%] h-[25%] rounded-2xl mb-4 solo-img" />
                        <h1 className="font-bold text-[36px] text-[#00ff00] text-grd mxs:text-[16px]">{event.title}</h1>
                        <p className="text-[#fde800] max-w-[550px] mxs:text-[12px]">{event.description}</p>
                        <form action="" onSubmit={submitResponse}>
                            <label htmlFor="" className='text-[24px] msm:text-[18px] py-1 tracking-wider 
                            card-grd font-ubuntu font-semibold'>Get Registered for Event!!</label>
                            <div className="flex flex-row mmd:flex-col gap-2 pb-4 items-center justify-center">
                                <label htmlFor="" className="font-semibold text-[18px] mmd:hidden">Email:</label>
                                <input ref={inputEmail} type="email" name="" id="" className="rounded-md mt-1 p-2 text-primary border-none"
                                    placeholder='tony3000@email.com' />
                                <button type="submit" className="rounded-md border-[1px] p-2 border-[#000000] bg-[#55ebe9]
                                 text-primary hover:text-[#00ff00] hover:bg-[#250803] 
                                 font-semibold solo-img font-ubuntu">Submit</button>
                            </div>
                        </form>
                        <p className="text-[18px] max-w-[500px] mxs:text-[14px] font-sans text-[#00ff00]">{message}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SingleEvent