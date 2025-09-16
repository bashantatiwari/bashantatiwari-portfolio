import LogoLoop from './LogoLoop'
import { imageLogos } from '../constants/index.js'

const TechStackCard = () => {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction='left'
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor='grid-black-color'
        ariaLabel='Technology partners'
      />
    </div>
  )
}

export default TechStackCard
