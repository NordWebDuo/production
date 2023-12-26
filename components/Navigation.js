'use client';

import Image from 'next/image';
import Link from 'next/link';
import SidebarMobile from './SidebarMenu';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


function Header() {

  const router = useRouter();

  const isLinkActive = (href) => {
    return router.pathname === href ? 'active' : 'link';
  };
 
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {  
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full ${isSticky ? 'fixed z-20 top-0 start-0  sticky-nav px-6 max-md:px-0 max-md:py-2 py-3 mt-0 bg-slate-700 bg-opacity-50 border-opacity-10' : 'top-5'}`}>
    <div className='container flex max-lg:px-5 items-center justify-between mx-auto '>
    <div className='brand'>
       <Link href="/"> <Image src="/nord-web-duo.svg" width={`${isSticky ? '180' : '280'}`} height="80" className="max-md:w-48 transition-all" alt='Nord Web Duo'></Image></Link>
        </div>
        <div className='lg:order-2 flex gap-2'>
         <button type='button' className='text-stone-900 inline-flex items-center gap-1 bg-emerald-400 hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-md:text-xs px-6 py-3 max-md:px-3 max-md:py-2'>

         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>    Let's talk</button>

<SidebarMobile />

        </div>
      
      <ul className="lg:flex gap-6 md:hidden max-lg:hidden">
      <li className={isLinkActive('/')}>
        <Link href="/">Home</Link>
      </li>
      <li className={isLinkActive('/about')}>
        <Link href="/about">About Us</Link>
      </li>
      <li className={isLinkActive('/portfolio')}>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li className={isLinkActive('/services')}>
        <Link href="/services">Services</Link>
      </li>
      <li className={isLinkActive('/blog')}>
        <Link href="/blog">Blog</Link>
      </li>
      <li className={isLinkActive('/contact')}>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>


   </div>
   </nav>
  );
}

export default Header;