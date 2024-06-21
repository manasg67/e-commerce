import React from 'react'

export default function Announcements() {
  return (
    <div>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

<div className="bg-gray-100 px-4 py-3">
  <div className="mx-auto flex max-w-3xl items-center justify-center">
    <button
      className="swiper-prev-button hidden hover:text-gray-500 sm:block sm:rounded sm:text-gray-700 sm:transition"
      aria-label="Previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 rtl:rotate-180"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>

    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <p className="text-center text-sm font-medium text-gray-900">
            Love Alpine JS?
            <a href="#" className="block underline sm:inline-block"> Check out this new course! </a>
          </p>
        </div>

        <div className="swiper-slide">
          <p className="text-center text-sm font-medium text-gray-900">
            Love Tailwind CSS?
            <a href="#" className="block underline sm:inline-block"> Check out this new course! </a>
          </p>
        </div>

        <div className="swiper-slide">
          <p className="text-center text-sm font-medium text-gray-900">
            Love Laravel?
            <a href="#" className="block underline sm:inline-block"> Check out this new course! </a>
          </p>
        </div>
      </div>
    </div>

    <button
      className="swiper-next-button hidden hover:text-gray-500 sm:block sm:rounded sm:text-gray-700 sm:transition"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 rtl:rotate-180"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
</div>

{/* <script>
   new Swiper('.swiper', {
    effect: {'fade'}
    loop: true,
    autoplay: {
      delay: 5000,
    },
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      prevEl: '.swiper-prev-button',
      nextEl: '.swiper-next-button',
    },
  })
</script> */}
    </div>
  )
}
