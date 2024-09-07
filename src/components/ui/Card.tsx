import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './test.css'
interface CardProps {
  imageSrc: string;
  title: string;
  link?: string;
  description?: string; 
}

const Card: React.FC<CardProps> = ({ imageSrc, title, link }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const imgElement = imgRef.current;

    if (cardElement && imgElement) {
      const onEnter = () => {
        gsap.to([cardElement, imgElement], { scale: 1.1, duration: 0.3, ease: "power3.out" });
      };

      const onLeave = () => {
        gsap.to([cardElement, imgElement], { scale: 1, duration: 0.3, ease: "power3.out" });
      };

      cardElement.addEventListener('mouseenter', onEnter);
      cardElement.addEventListener('mouseleave', onLeave);

      return () => {
        cardElement.removeEventListener('mouseenter', onEnter);
        cardElement.removeEventListener('mouseleave', onLeave);
      };
    }
  }, []);

  return (
    <a
      href={link}
      ref={cardRef}
      className="block max-w-sm rounded overflow-hidden shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <div className="relative overflow-hidden">
        <img
          ref={imgRef}
          className="stretched-image"
          src={imageSrc}
          alt={title}
          style={{ objectFit: 'fill' }}
        />
        <div className="absolute bottom-0 left-0 w-full text-white text-center p-4">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </a>
  );
};

export default Card;
