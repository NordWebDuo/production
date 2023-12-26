'use client';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

function SidebarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(<Bars3BottomLeftIcon className="h-6 w-6" />);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Schimbăm iconița butonului la fiecare clic
    if (isOpen) {
      setButtonIcon(<Bars3BottomLeftIcon className="h-6 w-6" />);
    } else {
      setButtonIcon(<XMarkIcon className="h-6 w-6 z-50" />);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setButtonIcon(<Bars3BottomLeftIcon className="h-6 w-6" />);
  };

  return (
    <div className='relative'>
      {/* Butonul pentru deschiderea/închiderea meniului cu iconițe */}
      <button onClick={toggleMenu} className=" lg:hidden mt-2 flex items-center justify-center">
        {buttonIcon}
      </button>

      {/* Meniul mobil */}
      <div className={`fixed top-0 left-0 w-4/6 h-full bg-gray-800 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 z-50' : '-translate-x-full'}`} ref={menuRef}>
        {/* Exemple de link-uri */}
        <div className='p-5'>
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
      </div>

      {/* Zonă transparentă pentru închiderea meniului la click în afara meniului */}
      {isOpen && (
        <div className='fixed inset-0 black bg-opacity-50 backdrop-blur-sm z-40' onClick={closeMenu}></div>
      )}
    </div>
  );
}

export default SidebarMobile;