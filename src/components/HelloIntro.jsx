import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HelloIntro = () => {
  return (
    <div className='flex flex-col justify-between items-start px-8 md:px-16  text-white py-4'>
      {/* Greeting Section */}
      <div className='mb-2'>
        <div className='flex items-center text-lg md:text-xl font-light text-gray-300'>
          <span className='mr-2 text-xl md:text-2xl animate-bounce'>👋</span>
          <span className='font-mono'>Hello, I'm</span>
        </div>
      </div>

      {/* Name Section */}
      <div className='mb-3'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight'>
          <span className='bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
            Bashanta Tiwari
          </span>
        </h1>
      </div>

      {/* Role/Type Animation Section */}
      <div className='mb-3'>
        <div className='flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-medium text-gray-300'>
          <span>I'm a</span>
          <TypeAnimation
            sequence={['Full Stack Developer', 1000, '', 500]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent'
          />
        </div>
      </div>

      {/* Subtitle/Description */}
      <div className='max-w-2xl'>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed font-light'>
          As a developer, I build projects I’m passionate about — but the same
          code that excites me often challenges and “breaks” me, and I grow
          stronger by fixing it
        </p>
      </div>
    </div>
  )
}

export default HelloIntro
