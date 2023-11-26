'use client';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

function SidebarMobile() {
    return(
        <div className='fixed z-50 top-0 left-0 w-4/6 transition-all duration-300 ease-in-out h-full bg-gray-800 overflow-hidden p-6'>
            <Link href="/"> <Image src="/nord-web-duo.svg" width="290" height="80" alt='Nord Web Duo'></Image></Link>
        <ul className="flex flex-col gap-3 text-md mt-10 pb-6 mb-6 border-b border-b-gray-600">
        <li className='active'><Link href="/">Home</Link></li>
        <li><Link href="/">About Us</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/">Services</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/">Contact Us</Link></li>
    </ul>
    <div className='contact-list flex flex-wrap gap-2 text-sm'>
        <div><Link className='inline-flex gap-2' href="tel:+354 785 9001"><PhoneIcon className='w-4 h-4' /> +354 785 9001</Link></div>
        <div><Link className='inline-flex gap-2' href="tel:+354 785 9001"><EnvelopeIcon className='w-4 h-4' /> contact@nordwebduo.com</Link></div>
        </div>
    </div>
    )
}

export default SidebarMobile;