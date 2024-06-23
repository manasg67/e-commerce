import React from 'react';
import Image from 'next/image';
import Header from './Header';
import Announcements from './Announcements';
import Footer from './Footer';
import Featuresb from './Featuresb';

export default function Page() {
  return (
    <div className='bg-white'>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <Header />
        <Announcements />
      </div>

      <div className='pt-36 flex flex-col items-center'>
        <Image
          src="/nikelogo.jpeg"
          width={1000}
          height={200}
          alt="Picture of the author"
        />
        <h2 className='text-neutral-950 text-2xl mt-8'>Raaalpha Runner 204</h2>
        <h1 className='text-black text-5xl font-extrabold font-sans mt-5 subpixel-antialiased '>DON’T WASTE YOUR ENERGY</h1>
        <a
            className="rounded-md bg-black px-5 py-2.5 text-lg font-medium mt-6 text-white shadow"
            href="#"
          >
            Shop
         </a>
      </div>

    <div>
      < Featuresb/>
    </div>
      <div className='mt-10'>
        <Footer />
      </div>
    </div>
  );
}
