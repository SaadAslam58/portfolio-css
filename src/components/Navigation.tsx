"use client";
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Transition from './Transition';

const Navigation = () => {
    const [isRouting, setRouting] = useState(false)
    const path = usePathname();
    const [prevPath, setPrevPath] = useState('/');

useEffect(() => {
    if (prevPath !== path) {
      setRouting(true);
    }
},[path, prevPath])

useEffect(() => {
if (isRouting) {
 setPrevPath(path);
 const timeout = setTimeout(() => {
    setRouting(false);
 },1200 );

 return () => clearTimeout(timeout);
}


},[isRouting, path])

return (
    <div
     className='navigation'
    >
        {isRouting && <Transition/>}
      {NavLinks.map((nav) => (
        <Link 
        key={nav.name} 
        href={nav.link} 
        className='navigation-link'
        >
        <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text-[#ff69b4]" : 'text-white'}`}/>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;