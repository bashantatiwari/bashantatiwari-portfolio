import { useState } from 'react'
import { projects } from '../constants/index.js'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 1

    return (
      <div className='rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out relative overflow-hidden'>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
            isEven ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Image / Video */}
          <div
            className={`relative rounded-2xl overflow-hidden h-56 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg ${
              isEven ? 'lg:col-start-2' : ''
            }`}
          >
            {project.video ? (
              <video
                ref={(el) => {
                  if (el) {
                    el.onmouseenter = () => el.play()
                    el.onmouseleave = () => el.pause()
                  }
                }}
                src={project.video}
                muted
                loop
                playsInline
                poster={project.image}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg'
              />
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg'
              />
            ) : (
              <div className='w-full h-full flex items-center justify-center text-5xl text-gray-400'>
                🖼️
              </div>
            )}
          </div>

          {/* Content */}
          <div
            className={`space-y-6 ${
              isEven ? 'lg:text-right lg:col-start-1' : ''
            }`}
          >
            <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
              {project.title}
            </h3>

            <div
              className={`flex flex-wrap gap-3 ${
                isEven ? 'lg:justify-end' : 'justify-start'
              }`}
            >
              {project.tools.map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className='flex items-center gap-2 px-3 py-2 rounded-md border border-white text-sm font-medium text-white hover:-translate-y-1 transition-all duration-300 hover:shadow-md hover:bg-white hover:text-black hover:cursor-pointer'
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className='w-5 h-5 object-contain'
                  />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => openModal(project)}
              className='text-white bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-lg border border-white font-semibold hover:-translate-y-2 hover:shadow-lg transition-all duration-300 shadow-md hover:cursor-pointer'
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    )
  }

  const Modal = ({ project, onClose }) => {
    if (!project) return null

    return (
      <div
        className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
        onClick={onClose}
      >
        <div
          className='bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/30 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto mt-20 m-4'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image / Video */}
          <div className='relative h-56 sm:h-60 rounded-t-2xl overflow-hidden'>
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                poster={project.image}
                className='w-full h-full object-cover'
              />
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover'
              />
            ) : (
              <div className='w-full h-full flex items-center justify-center text-5xl text-gray-400'>
                🖼️
              </div>
            )}
            <button
              onClick={onClose}
              className='absolute top-4 right-4 bg-black/50 hover:bg-red-500 hover:cursor-pointer text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors duration-200'
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className='p-6 sm:p-8'>
            <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4'>
              {project.title}
            </h3>

            <p className='text-white text-base sm:text-lg leading-relaxed mb-8'>
              {project.description}
            </p>

            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6'>
              {project.liveUrl && project.liveUrl.trim() !== '' && (
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z'></path>
                    <path d='M5 5h5V3H3v7h2V5zm0 14v-5H3v7h7v-2H5zm14-5v5h-5v2h7v-7h-2z'></path>
                  </svg>
                  Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2'
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>{' '}
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
            My Projects
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-white/80'>
            Showcasing my latest work and creative solutions
          </p>
        </div>

        <div className='space-y-10 sm:space-y-12 lg:space-y-16 lg:mx-10'>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <Modal project={selectedProject} onClose={closeModal} />
    </div>
  )
}

export default ProjectsSection
