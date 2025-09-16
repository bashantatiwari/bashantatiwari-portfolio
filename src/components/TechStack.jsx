'use client'
import React from 'react'
import { AnimatedTooltip } from '../components/ui/animated-tooltip'
import { SiTailwindcss, SiReact, SiDjango, SiPostgresql } from 'react-icons/si'

const techstack = [
  {
    id: 1,
    name: 'Tailwind CSS',
    designation: 'Frontend',
    image: <SiTailwindcss className='w-6 h-6 sm:w-12 sm:h-12 text-sky-400' />,
  },
  {
    id: 2,
    name: 'React',
    designation: 'Frontend',
    image: <SiReact className='w-6 h-6 sm:w-12 sm:h-12 text-cyan-400' />,
  },
  {
    id: 3,
    name: 'Django',
    designation: 'Backend',
    image: <SiDjango className='w-6 h-6 sm:w-12 sm:h-12 text-green-400' />,
  },
  {
    id: 4,
    name: 'PostgreSQL',
    designation: 'Database',
    image: <SiPostgresql className='w-6 h-6 sm:w-12 sm:h-12 text-blue-400' />,
  },
]

const TechStack = () => {
  return (
    <div className='flex flex-row items-center justify-around w-auto max-w-[80%] p-2 mx-8 md:mx-16 mb-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/30'>
      <AnimatedTooltip items={techstack} />
    </div>
  )
}

export default TechStack
