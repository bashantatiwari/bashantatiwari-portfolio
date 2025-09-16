import React from 'react'
import { GraduationCap } from 'lucide-react'
import sunwayImg from '/assets/sunwaycollege.jpeg' // adjust path if needed

// Single card
const QualificationCard = ({
  title,
  degree,
  institution,
  year,
  description,
  image,
  icon: Icon,
  color,
}) => {
  return (
    <div
      className='group relative w-full h-full
                 rounded-2xl overflow-hidden cursor-pointer
                 transform transition-all duration-500
                 hover:scale-105 hover:shadow-2xl hover:shadow-orange-600/20
                 bg-transparent' // <- transparent, so it matches outer bg
    >
      {/* Background tint (subtle gradient overlay) */}

      {/* Foreground text (default visible) */}
      <div
        className='absolute inset-0 z-10 p-4 flex flex-col justify-between text-white 
                   transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4'
      >
        <div>
          <div className='flex items-center gap-4 mb-2'>
            <div
              className={`p-2 rounded-lg bg-gradient-to-r ${color} shadow-lg`}
            >
              <Icon size={24} className='text-white' />
            </div>
            <span className='text-lg text-gray-300 font-medium'>{year}</span>
          </div>

          <h3 className='text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
            {title}
          </h3>

          <div className='space-y-2'>
            <p className='text-lg font-semibold text-orange-600'>{degree}</p>
            <p className='text-md text-gray-300'>{institution}</p>
            <p className='text-sm text-orange-500 italic leading-relaxed'>
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Hover image overlay */}
      <div className='absolute inset-0 z-20 transition-all duration-500 opacity-0 group-hover:opacity-100'>
        <img
          src={image}
          alt={`${title} background`}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
          <div className='text-center text-white p-4'>
            <Icon size={48} className='mx-auto mb-3 text-orange-600' />
            <h4 className='text-2xl font-bold mb-2'>{title}</h4>
            <p className='text-white'>{degree}</p>
          </div>
        </div>
      </div>

      {/* Hover border */}
      <div className='absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/50 transition-all duration-500' />

      {/* Shine sweep */}
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
      </div>
    </div>
  )
}

// Wrapper example
const EducationCard = () => {
  const qualifications = [
    {
      title: 'Computer Science in AI',
      degree: "Bachelor's Degree",
      institution: 'Birmingham City University',
      year: '2024-Present',
      description:
        'Specializing in Web Development, Machine Learning, and Data Science.',
      image: sunwayImg,
      icon: GraduationCap,
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <div className='grid-black-color grid-2'>
      {qualifications.map((qual, i) => (
        <QualificationCard key={i} {...qual} />
      ))}
    </div>
  )
}

export default EducationCard
