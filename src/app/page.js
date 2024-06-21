import React from 'react';
import Image from 'next/image';
import Header from './Header';
import Announcements from './Announcements';

export default function Page() {
  return (
    <div className='bg-white '>
     <div className='fixed mb-16'><Header/>
     <Announcements /></div> 

         
      <button className='flex justify-center w-screen pt-36'>
       <div>
        <Image
          src="/nikelogo.jpeg"
          width={1000}
          height={200}
          alt="Picture of the author"
        />
        <h2 className= 'text-neutral-950 text-2xl  mt-8'>Ralpha Runner 2004</h2>
        <h1 className='text-black text-5xl font-extrabold font-sans mt-5'>DON’T WASTE YOUR ENERGY</h1>
        <button className=' h-14 w-24 bg-black hover:bg-slate-500 mb-8 mt-5 rounded-lg'>shop</button>
        </div>
      </button>
      <div>
        <h1 className='text-black text-3xl font-medium font-sans mt-10 ml-5'>Featured</h1>
        
      </div>
    </div>
  );
}
 