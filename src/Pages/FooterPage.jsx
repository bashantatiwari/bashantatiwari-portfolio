import { mySocials } from '../constants'
import logo from '/assets/PortfolioWhiteLogo.png'

const Footer = () => {
  return (
    <footer className='relative z-10 w-full'>
      {/* Top Divider */}
      <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-4' />

      <div
        className='c-space flex flex-col items-center gap-4 text-neutral-400 text-sm 
                      lg:flex-row lg:justify-between lg:items-center'
      >
        <div className='flex gap-4'>
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors'
            >
              <img src={social.icon} alt={social.name} className='w-5 h-5' />
            </a>
          ))}
        </div>

        {/* Left: Logo */}
        <div className='flex-shrink-0'>
          {/* Replace with your logo */}
          <img src={logo} alt='Logo' className='h-6 w-auto md:h-8' />
        </div>

        {/* Right: Quick Links */}
        <div className='flex gap-3 md:text-xs'>
          <span>Kathmandu | Nepal</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-4 text-center text-xs text-neutral-500 space-y-1'>
        <p>© 2025 Bashanta Tiwari. All rights reserved.</p>
        <p className='bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-medium'>
          Just the Beginning…
        </p>
      </div>
    </footer>
  )
}

export default Footer
