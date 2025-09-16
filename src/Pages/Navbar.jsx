import CardNav from '../components/CardNav'
import logo from '/assets/PortfolioWhiteLogo.png'

const NavBar = () => {
  // Define main navigation items
  const items = [
    {
      label: 'Home',
      bgColor: '#0D0716',
      textColor: '#fff',
      links: [
        {
          label: 'Home',
          ariaLabel: 'Portfolio Page',
          href: '/',
        },
      ],
    },
    {
      label: 'About',
      bgColor: '#0D0716',
      textColor: '#fff',
      links: [
        {
          label: 'About Me',
          ariaLabel: 'Learn more about me',
          href: '/about',
        },
      ],
    },
    {
      label: 'Projects',
      bgColor: '#170D27',
      textColor: '#fff',
      links: [
        {
          label: 'My Projects',
          ariaLabel: 'Explore my projects',
          href: '/projects',
        },
      ],
    },
    {
      label: 'Contact',
      bgColor: '#271E37',
      textColor: '#fff',
      links: [
        {
          label: 'Get in Touch',
          ariaLabel: 'Contact me directly',
          href: '/contact',
        },
      ],
    },
  ]

  return (
    <CardNav
      logo={logo}
      logoAlt='Bashanta Tiwari Logo'
      items={items}
      baseColor='#fff'
      menuColor='#000'
      ease='power3.out'
    />
  )
}

export default NavBar
