import React from 'react'
import { Github, Linkedin, Download } from 'lucide-react'
import Particles from '../components/Particles'
import Profile from '../components/Profile'
import TechStack from '../components/TechStack'
import HelloWave from '../components/HelloIntro'

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a')
    link.href = '/assets/CVofBashanta.pdf'
    link.download = 'Bashanta_Tiwari_CV.pdf'
    link.click()
  }

  const handleGithubClick = () => {
    window.open('https://github.com/bashantatiwari', '_blank') // Replace with your GitHub
  }

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/bashantatiwari/', '_blank') // Replace with your LinkedIn
  }

  return (
    <div className='relative w-full min-h-screen'>
      {/* Background Particles */}
      <div className='fixed inset-0 z-0'>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={800}
          particleSpread={8}
          speed={0.1}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className='relative z-10 min-h-screen pt-10 text-white'>
        {/* Main Layout - Left Content + Right Profile */}
        <div className='flex flex-col lg:flex-row items-start gap-8'>
          {/* Left Column - All Content */}
          <div className='flex-1 w-full  lg:max-w-3xl'>
            {/* Hero Introduction */}
            <div className='pointer-events-none'>
              <HelloWave />
            </div>

            {/* Tech Stack Section */}
            <TechStack />

            {/* CTA Section - Download CV + Social Links */}
            <div className='px-8 md:px-16 '>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6'>
                {/* Download CV Button */}
                <button
                  onClick={handleDownloadCV}
                  className='pointer-events-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 hover:cursor-pointer'
                >
                  <Download size={20} />
                  Download CV
                </button>

                {/* Social Links */}
                <div className='flex items-center gap-4'>
                  {/* GitHub Link */}
                  <button
                    onClick={handleGithubClick}
                    className='pointer-events-auto p-3 border border-gray-600 rounded-lg hover:border-white hover:bg-white hover:text-black transition-all duration-300 group'
                    aria-label='Visit GitHub Profile'
                  >
                    <Github
                      size={24}
                      className='group-hover:scale-110 transition-transform duration-200'
                    />
                  </button>

                  {/* LinkedIn Link */}
                  <button
                    onClick={handleLinkedinClick}
                    className='pointer-events-auto p-3 border border-gray-600 rounded-lg hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 group'
                    aria-label='Visit LinkedIn Profile'
                  >
                    <Linkedin
                      size={24}
                      className='group-hover:scale-110 transition-transform duration-200'
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Card (Properly Centered) */}
          <div className='flex-1 flex items-center justify-center h-full w-full px-8 md:px-16'>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
