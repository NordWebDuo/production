'use client';

import Image from 'next/image';
import Link from 'next/link';
import SidebarMobile from './SidebarMenu';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DefaultButton from './widgets/buttons/DefaultButton';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';


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
         
        <DefaultButton
                Source={"/contact"}
                Title={"Let's Talk"}
                Icon={ChatBubbleBottomCenterIcon}
         />

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