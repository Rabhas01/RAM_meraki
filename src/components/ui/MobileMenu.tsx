import React, { useEffect, useRef, useState } from 'react';
import Slideout from 'slideout';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import './MobileMenu.css';

interface MobileMenuProps {
  panelRef: React.RefObject<HTMLDivElement>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ panelRef }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slideoutInstance = useRef<Slideout | null>(null);

  useEffect(() => {
    if (panelRef.current && menuRef.current) {
      slideoutInstance.current = new Slideout({
        panel: panelRef.current,
        menu: menuRef.current,
        tolerance: 70,
        side: 'right',
        touch: true,
      });

      let touchStartX: number;
      let touchEndX: number;

      const handleTouchStart = (e: TouchEvent) => {
        touchStartX = e.touches[0].clientX;
      };

      const handleTouchMove = (e: TouchEvent) => {
        touchEndX = e.touches[0].clientX;
        e.preventDefault(); // This line needs passive: false to work
      };

      const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 100) {
          slideoutInstance.current?.open();
        }
      };

      // Attach touch event listeners with { passive: false }
      panelRef.current.addEventListener('touchstart', handleTouchStart, { passive: false });
      panelRef.current.addEventListener('touchmove', handleTouchMove, { passive: false });
      panelRef.current.addEventListener('touchend', handleTouchEnd);

      // Clean up
      return () => {
        panelRef.current?.removeEventListener('touchstart', handleTouchStart);
        panelRef.current?.removeEventListener('touchmove', handleTouchMove);
        panelRef.current?.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [panelRef]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      slideoutInstance.current?.close();
    } else {
      slideoutInstance.current?.open();
    }
  };

  return (
    <>
      <div className="panel-content">
        <button className="text-3xl focus:outline-none text-white" onClick={toggleMenu}>
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <nav ref={menuRef} id="menu" className="menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
