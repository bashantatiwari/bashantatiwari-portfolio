import { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/globe'
import CopyEmailButton from '../components/CopyEmailButton'
import StoryCard from '../components/MyStory'
import EducationCard from '../components/EducationCard'
import KathmanduTime from '../components/TimeCard'
import TechStackCard from '../components/TechStackCard'

const About = () => {
  const grid2Container = useRef()
  return (
    <div className='min-h-screen py-16 px-4 c-space'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-white mb-4 text-center'>
          About Me
        </h2>
        <p className='text-xl text-white/80 text-center'>
          A developer who loves solving problems and crafting clean, impactful
          digital experiences.
        </p>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
          {/* Grid 1 */}

          <StoryCard></StoryCard>

          {/* Grid 2 */}

          <EducationCard></EducationCard>

          {/* Grid 3 */}
          <div className='grid-black-color grid-3 flex flex-col'>
            <div className='z-10 w-[50%]'>
              <p className='headtext'>Time Zone</p>
              <KathmanduTime></KathmanduTime>
            </div>
            <figure className='absolute left-[50%] md:left-[15%] top-0 w-[80%] h-full opacity-100'>
              <Globe />
            </figure>
          </div>
          {/* Grid 4 */}
          <div className='grid-4 border-1 border-white rounded-lg'>
            <div className='flex flex-col items-center justify-center gap-4 size-full'>
              <p className='text-center headtext'>
                Do you want to start a project together?
              </p>
              <CopyEmailButton />
            </div>
          </div>
          {/* Grid 5 */}
          <div className='grid-black-color grid-5'>
            <div className='z-10 h-[60%] flex flex-col justify-evenly'>
              <p className='headText'>Tech Stack</p>
              <p className='subtext'>
                From frontend to backend, I design seamless digital experiences
                powered by AI-driven innovation.
              </p>
            </div>
            <div className=' h-[40%] mt-4 w-full'>
              <TechStackCard></TechStackCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
