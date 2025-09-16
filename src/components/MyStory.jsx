import React from 'react'
import { motion } from 'framer-motion'
import profilepic from '/assets/profilepicture.jpg'
import { TypeAnimation } from 'react-type-animation'

const StoryCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='
        grid-1
        relative 
        w-full 
        max-h-[100%]
        rounded-2xl 
        grid-black-color
        text-white shadow-xl 
        p-4 sm:p-6 md:p-8 lg:p-10
        overflow-y-scroll
        group
      '
    >
      {/* --- Hover Image Layer (desktop only) --- */}
      <div className='hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
        <img
          src={profilepic}
          alt='Bashanta Tiwari'
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 bg-black/40 rounded-2xl'></div>
      </div>

      {/* --- Text Content --- */}
      <div
        className='
    relative z-10 
    transition-opacity duration-500 
    md:group-hover:opacity-0
    space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7
    max-w-3xl
  '
      >
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white'>
          👋 Hi, I’m{' '}
          <TypeAnimation
            sequence={['Bashanta Tiwari', 1000, '', 500]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent'
          />
        </h2>

        <p className='text-base sm:text-lg md:text-xl text-gray-400 italic tracking-wide'>
          Where creativity meets technology to create impact.
        </p>

        <div className='space-y-4 sm:space-y-5'>
          <p className='text-base sm:text-lg md:text-xl leading-relaxed text-gray-300'>
            I’m a{' '}
            <span className='font-semibold italic text-white'>
              Computer Science student
            </span>{' '}
            passionate about{' '}
            <span className='font-semibold italic'>
              Artificial Intelligence
            </span>{' '}
            and <span className='font-semibold italic'>Web Development</span>.
            My stack includes{' '}
            <span className='font-semibold italic text-white'>
              React, Tailwind CSS, Django, and SQL
            </span>
            .
          </p>

          <p className='text-base sm:text-lg md:text-xl leading-relaxed text-gray-300'>
            Excited to connect with people who share the same passion for{' '}
            <span className='font-semibold italic'>technology</span>,{' '}
            <span className='font-semibold italic'>creativity</span>, and{' '}
            <span className='font-semibold italic'>innovation</span>.
          </p>

          <p className='text-base sm:text-lg md:text-xl leading-relaxed text-gray-300'>
            Rooted in <span className='font-semibold italic'>Nepal</span>,
            guided by my love for
            <span className='font-semibold italic'>
              {' '}
              coffee-fueled creativity
            </span>
            , my true desire is to
            <span className='font-semibold italic'> merge Web and AI</span> in
            ways that not only build innovative solutions but also contribute to
            a greater purpose — like
            <span className='font-semibold italic'>
              {' '}
              protecting animals
            </span>{' '}
            and creating technology that truly matters.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default StoryCard
