import React from 'react'
import Image from 'next/image';
export default function Featuresb() {
  return (
    <div className='mt-10'>
    <h1 className='text-black text-3xl font-medium font-sans ml-9 mb-5'>Featured</h1>
    <div className='ml-6 overflow-x-scroll whitespace-nowrap flex gap-5'>
      <div className='flex-shrink-0 shadow-xl'>
        <a href='#'>
          <Image
            src="/sportswear.webp"
            width={500}
            height={600}
            alt="Picture of the author"
          />
        </a>
        <div className='text-center'>
          <a className='text-neutral-950 text-2xl mt-11 underline' href="#">Shop</a>
        </div>  
      </div>
      <div className='flex-shrink-0 shadow-xl'>
        <a href='#'>
          <Image
            src="/sportswear.webp"
            width={500}
            height={600}
            alt="Picture of the author"
          />
        </a>
        <div className='text-center'>
          <a className='text-neutral-950 text-2xl mt-11 underline' href="#">Shop</a>
        </div>  
      </div>
      <div className='flex-shrink-0 shadow-xl'>
        <a href='#'>
          <Image
            src="/sportswear.webp"
            width={500}
            height={600}
            alt="Picture of the author"
          />
        </a>
        <div className='text-center'>
          <a className='text-neutral-950 text-2xl mt-11 underline' href="#">Shop</a>
        </div>  
      </div>
      <div className='flex-shrink-0 shadow-xl'>
        <a href='#'>
          <Image
            src="/sportswear.webp"
            width={500}
            height={600}
            alt="Picture of the author"
          />
        </a>
        <div className='text-center'>
          <a className='text-neutral-950 text-2xl mt-11 underline' href="#">Shop</a>
        </div>  
      </div>
      <div className='flex-shrink-0 shadow-xl'>
        <a href='#'>
          <Image
            src="/sportswear.webp"
            width={500}
            height={600}
            alt="Picture of the author"
          />
        </a>
        <div className='text-center'>
          <a className='text-neutral-950 text-2xl mt-11 underline' href="#">Shop</a>
        </div>  
      </div>
      <div className='flex-shrink-0 shadow-xl'>
        <a href='#'>
          <Image
            src="/sportswear.webp"
            width={500}
            height={600}
            alt="Picture of the author"
          />
        </a>
        <div className='text-center'>
          <a className='text-neutral-950 text-2xl mt-11 underline' href="#">Shop</a>
        </div>  
      </div>
    </div>
  </div>

  )
}
