import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const satellite = "/assets/Parallax_images/Satellite_RAM.png";

const SatelliteMotion: React.FC = () => {
  const satelliteRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const satelliteElement = satelliteRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (satelliteElement) {
        gsap.fromTo(
          satelliteElement,
          { scale: 0.1, x: -500, y: -300, rotation: 0 },
          {
            duration: 3,
            scale: 0.7,
            x: 0,
            y: 0,
            ease: 'power2.out',
            onComplete: () => {
              gsap.to(satelliteElement, {
                delay: 1,
                duration: 20,
                repeat: -1,
                ease: 'power1.inOut',
                motionPath: {
                  path: [
                    { x: 400, y: -100, scale: 0.5 },
                    { x: 500, y: 300, scale: 0.7 },
                    { x: 300, y: 400, scale: 0.8 },
                    { x: 100, y: 500, scale: 0.7 },
                    { x: -200, y: 400, scale: 0.6 },
                    { x: -300, y: 100, scale: 0.5 },
                  ],
                  curviness: 1.5,
                  autoRotate: false,
                },
              });
            }
          }
        );
      }
    });

    mm.add("(max-width: 1023px)", () => {
      if (satelliteElement) {
        gsap.fromTo(
          satelliteElement,
          { scale: 0.05, x: -400, y: -200, rotation: 0 },
          {
            duration: 3,
            scale: 0.5,
            x: 0,
            y: 0,
            ease: 'power2.out',
            onComplete: () => {
              gsap.to(satelliteElement, {
                delay: 1,
                duration: 20,
                repeat: -1,
                ease: 'power1.inOut',
                motionPath: {
                  path: [
                    { x: 300, y: -100, scale: 0.4 },
                    { x: 400, y: 200, scale: 0.5 },
                    { x: 200, y: 300, scale: 0.6 },
                    { x: 50, y: 400, scale: 0.5 },
                    { x: -150, y: 300, scale: 0.4 },
                    { x: -250, y: 100, scale: 0.3 },
                  ],
                  curviness: 1.5,
                  autoRotate: false,
                },
              });
            }
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <img
      ref={satelliteRef}
      src={satellite}
      alt="satellite"
      className="absolute z-20 h-72"
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    />
  );
};

export default SatelliteMotion;
