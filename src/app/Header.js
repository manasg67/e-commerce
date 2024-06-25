import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div >
      <header className="bg-white">
  <div className="mx-auto w-screen px-4 sm:px-6 lg:px-8">
    <div className="flex h-20 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <Image
          src="/logo_2.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-lg">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> New & Featured </a>
            </li>

            {/* <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Men</a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Women</a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Kids</a>
            </li> */}

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Your Orders</a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Support </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <a href='/Cartcard'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-9">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg>

</a>
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/Login"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black"
              href="/Signup"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}
