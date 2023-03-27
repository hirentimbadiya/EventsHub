import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Header = () =>
(
    <>
        <header className='w-full flex'>
            <Link href='/'>
                <Image src={"/images/logo.png"} alt="image" width={150} height={20} className="pl-5" />
            </Link>
            <nav className='w-full flex justify-end items-center'>
                <Link href='/' className='header_link'> Home </Link>
                <Link href='/events' className='header_link'> Events </Link>
                <Link href='/about-us' className='header_link'> About Us </Link>
            </nav>

        </header>
    </>
)


export default Header;