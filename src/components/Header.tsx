import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import ServicesHoverAccordion from './ui/ServiceHoverAccordion'

interface HeaderProps {
  handleToggleMenu: () => void
  isMenuOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ handleToggleMenu, isMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(true)
  const scrollThreshold = 200
  const location = useLocation()

  useEffect(() => {
    let prevScrollPos = window.scrollY

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setIsScrolled(currentScrollPos < scrollThreshold || currentScrollPos <= prevScrollPos)
      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`bg-neutral-900 text-white h-20 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-opacity duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="logo">
        {location.pathname === '/' ? (
          <ScrollLink to="home" smooth={true} duration={800} className="hover:text-gray-400 cursor-pointer">
            <motion.img
              src="src/assets/Brand-images/ram_logo_desktop.png"
              alt="SMMA Logo"
              className="logo_brand"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </ScrollLink>
        ) : (
          <Link to="/" className="hover:text-gray-400 cursor-pointer">
            <img
              src="src/assets/Brand-images/ram_logo_desktop.png"
              alt="SMMA Logo"
              className="logo_brand"
            />
          </Link>
        )}
      </div>

      <nav className="hidden lg:block">
        <ul className="container flex space-x-8">
          <li>
            {location.pathname === '/' ? (
              <ScrollLink to="home" smooth={true} duration={800} className="nav-item">
                Home
              </ScrollLink>
            ) : (
              <Link to="/" className="nav-item">
                Home
              </Link>
            )}
          </li>
          <li>
            <ServicesHoverAccordion />
          </li>
          <li>
            {location.pathname === '/' ? (
              <ScrollLink to="about" smooth={true} duration={800} className="nav-item">
                About
              </ScrollLink>
            ) : (
              <Link to="/#about" className="nav-item">
                About
              </Link>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <ScrollLink to="contact" smooth={true} duration={800} className="nav-item">
                Become a client
              </ScrollLink>
            ) : (
              <Link to="/contact-us" className="nav-item">
                Contact
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      {!isMenuOpen && (
        <div className="lg:hidden">
          <button onClick={handleToggleMenu} className="text-3xl text-white">
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      )}
    </header>
  )
}

export default Header