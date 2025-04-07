import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full px-6 pt-16 space-y-6 text-center md:pt-28 bg-gradient-to-b from-cyan-100/70'>
      {/* Heading */}
      <h1 className='relative max-w-3xl mx-auto font-bold text-gray-800 text-[24px] leading-[32px] md:text-[48px] md:leading-[56px]'>
        Empower your future with the courses designed to{' '}
        <span className='text-blue-600'>fit your choice.</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className='absolute right-0 hidden md:block -bottom-10'
        />
      </h1>

      {/* Desktop Paragraph */}
      <p className='hidden max-w-2xl mx-auto text-gray-600 md:block text-[18px] leading-[28px]'>
        We bring you the best courses from the best instructors around the world,
        and you will be able to learn from the best to become the best.
      </p>

      {/* Mobile Paragraph */}
      <p className='max-w-sm mx-auto text-gray-500 md:hidden text-[14px] leading-[22px]'>
        We bring together world-class instructors to help you achieve
        your goals and pursue your personal and professional dreams.
      </p>
      <SearchBar/>
    </div>
  );
};

export default Hero;
