import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  imageSrc: string;
  title: string;
  link: string;
  cardClassName?: string;
  imageClassName?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, link, cardClassName = '', imageClassName = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let gyroscope: Gyroscope | null = null;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma === null || event.beta === null) return;

      const tiltX = event.gamma / 45; // Normalize gamma (-90 to 90 degrees)
      const tiltY = event.beta / 45;  // Normalize beta (-180 to 180 degrees)

      card.style.transform = `perspective(1000px) rotateY(${tiltX * 10}deg) rotateX(${-tiltY * 10}deg)`;
    };

    const handleMotion = (event: DeviceMotionEvent) => {
      if (!event.accelerationIncludingGravity) return;

      const { x, y } = event.accelerationIncludingGravity;
      if (x === null || y === null) return;

      const tiltX = x / 10; // Scale down acceleration
      const tiltY = y / 10;

      card.style.transform = `perspective(1000px) rotateY(${tiltX * 5}deg) rotateX(${-tiltY * 5}deg)`;
    };

    if ('DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    if ('DeviceMotionEvent' in window) {
      window.addEventListener('devicemotion', handleMotion);
    }

    // Check for gyroscope support
    if ('Gyroscope' in window) {
      gyroscope = new Gyroscope({ frequency: 60 });
      gyroscope.addEventListener('reading', () => {
        if (gyroscope && card) {
          const tiltX = gyroscope.x || 0; // Handle undefined values safely
          const tiltY = gyroscope.y || 0;
          card.style.transform = `perspective(1000px) rotateY(${tiltX * 5}deg) rotateX(${-tiltY * 5}deg)`;
        }
      });
      gyroscope.start();
    }

    return () => {
      if ('DeviceOrientationEvent' in window) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
      if ('DeviceMotionEvent' in window) {
        window.removeEventListener('devicemotion', handleMotion);
      }
      if (gyroscope) {
        gyroscope.stop();
      }
    };
  }, []);

  return (
    <Link to={link} className={`block ${cardClassName}`}>
      <div ref={cardRef} className="relative h-full transition-transform duration-300 ease-out">
        <img src={imageSrc} alt={title} className={`w-full h-full object-cover ${imageClassName}`} />
        <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 group-hover:opacity-20"></div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-white text-xl font-extrabold text-center px-4">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
