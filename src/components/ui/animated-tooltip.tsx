'use client'

import React, { useState, useRef } from 'react'
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'motion/react'

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number
    name: string
    designation: string
    image: string | React.ReactNode // supports avatar URLs & icons
  }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 15 }
  const x = useMotionValue(0)
  const animationFrameRef = useRef<number | null>(null)

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  )
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  )

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2
      x.set(event.nativeEvent.offsetX - halfWidth)
    })
  }

  return (
    <>
      {items.map((item) => (
        <div
          className='group relative -mr-4'
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                }}
                className='absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-3 py-2 text-xs shadow-xl'
              >
                <div className='absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent' />
                <div className='absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                <div className='relative z-30 text-sm sm:text-base font-bold text-white'>
                  {item.name}
                </div>
                <div className='text-[10px] sm:text-xs text-white'>
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 👇 Flexible rendering: string URL → avatar, else React element (icon) */}
          {typeof item.image === 'string' ? (
            <img
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className='relative !m-0 h-10 w-10 sm:h-14 sm:w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105'
            />
          ) : (
            <div
              onMouseMove={handleMouseMove}
              className='relative !m-0 h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center rounded-full border-2 border-white overflow-hidden transition duration-500 group-hover:z-30 group-hover:scale-105'
            >
              {/* Outer circle background inherits from icon's tailwind color */}
              <div className='absolute inset-0 rounded-full bg-current' />

              {/* Scale down the icon */}
              <div className='relative z-10 w-2/3 h-2/3 sm:w-3/4 sm:h-3/4 flex items-center justify-center text-white'>
                {item.image}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}
