import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const TextMovement: React.FC = () => {
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement1 = textRef1.current;
    const textElement2 = textRef2.current;

    // Ensure the text elements have sufficient width to create a seamless loop
    const updateTextWidth = () => {
      if (textElement1 && textElement2) {
        const textWidth1 = textElement1.scrollWidth;
        const textWidth2 = textElement2.scrollWidth;

        gsap.to(textElement1, {
          x: `-${textWidth1}px`,
          repeat: -1,
          duration: 30,
          ease: 'linear',
        });

        gsap.to(textElement2, {
          x: `${textWidth2}px`,
          repeat: -1,
          duration: 30,
          ease: 'linear',
        });
      }
    };

    updateTextWidth();

    // Make texts draggable
    Draggable.create(textElement1, {
      type: 'x',
      inertia: true,
      onDrag: function() {
        if (this.endX > 0) {
          this.endX = 0;
        }
      },
    });

    Draggable.create(textElement2, {
      type: 'x',
      inertia: true,
      onDrag: function() {
        if (this.endX < 0) {
          this.endX = 0;
        }
      },
    });

    return () => {
      gsap.killTweensOf([textElement1, textElement2]);
    };
  }, []);

  return (
    <>
      <div className="relative overflow-hidden py-8">
        <div className="absolute top-0 left-0 w-full whitespace-nowrap flex" ref={textRef1}>
          <div className="flex-shrink-0 px-8 text-6xl font-bold text-white tracking-wider">
            Digital Growth, Delivered. Digital Growth, Delivered. Digital Growth, Delivered.
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden py-8">
        <div className="absolute top-0 right-0 w-full whitespace-nowrap flex" ref={textRef2}>
          <div className="flex-shrink-0 px-8 text-6xl font-bold text-white tracking-wider">
            Innovative Solutions, Measurable Results. Innovative Solutions, Measurable Results.
          </div>
        </div>
      </div>
    </>
  );
};

export default TextMovement;
