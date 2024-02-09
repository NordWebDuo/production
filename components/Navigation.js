'use client';

import Image from 'next/image';
import Link from 'next/link';
import SidebarMobile from './SidebarMenu';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DefaultButton from './widgets/buttons/DefaultButton';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';


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
    <nav className={`fixed w-full px-5 ${isSticky ? 'fixed z-50 top-0 start-0  sticky-nav max-md:py-2 py-3 mt-0 bg-slate-900 shadow-xl bg-opacity-50 border-opacity-10' : 'top-5 z-50'}`}>
    <div className='container flex  items-center justify-between mx-auto '>
    <div className='brand'>
       <Link href="/"> <Image src="/nord-web-duo.svg" sizes='100vw' width={`${isSticky ? '160' : '286'}`} height="107" className="max-md:w-48 aspect-auto h-full transition-all" alt="Nord Web Duo" priority /></Link>
        </div>
        <div className='lg:order-2 xl:order-1 flex items-center gap-4 lg:gap-0'>
    <div className='call-to-action-desktop hidden sm:block'>
        <DefaultButton
                Source={"/contact"}
                Title={"Let's Talk"}
                Icon={ChatBubbleOvalLeftEllipsisIcon}
                
                iconPosition="left"
              />
              </div>

<SidebarMobile />

        </div>
      
      <ul className="lg:flex gap-6 md:hidden max-lg:hidden">
      <li className={isLinkActive('/')}>
        <Link href="/">Home</Link>
      </li>
      <li className={isLinkActive('/about-us')}>
        <Link href="/about-us">About Us</Link>
      </li>
      <li className={isLinkActive('/portfolio')}>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li className={isLinkActive('/#packages')}>
        <Link href="/#packages">Packages</Link>
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