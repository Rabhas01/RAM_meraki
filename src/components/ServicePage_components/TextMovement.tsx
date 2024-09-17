import React, { useRef, useEffect } from 'react';

const TextMovement: React.FC = () => {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line1ContentRef = useRef<HTMLDivElement>(null);

  const line2Ref = useRef<HTMLDivElement>(null);
  const line2ContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupScrolling = (
      container: HTMLDivElement | null,
      content: HTMLDivElement | null,
      direction: number
    ) => {
      if (!container || !content) return;

      let isDragging = false;
      let startX = 0;
      let animationId: number;
      const speed = 1 * direction; // Adjust the speed as needed

      // Duplicate content multiple times for seamless looping
      content.innerHTML += content.innerHTML + content.innerHTML; // Duplicate more times if needed

      // Get the content width (since we duplicated 3 times)
      const contentWidth = content.scrollWidth / 3;

      // Set initial position
      content.style.transform = `translateX(0px)`;

      const startAnimation = () => {
        cancelAnimationFrame(animationId);
        const animate = () => {
          const style = getComputedStyle(content);
          const matrix = new DOMMatrix(style.transform);
          let transformX = matrix.m41;

          // Update position
          transformX += speed;

          // Wrap the transformX value
          transformX = ((transformX % contentWidth) + contentWidth) % contentWidth - contentWidth;

          content.style.transform = `translateX(${transformX}px)`;

          animationId = requestAnimationFrame(animate);
        };
        animationId = requestAnimationFrame(animate);
      };

      const stopAnimation = () => {
        cancelAnimationFrame(animationId);
      };

      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        const style = getComputedStyle(content);
        const matrix = new DOMMatrix(style.transform);
        const transformX = matrix.m41;
        startX = e.pageX - transformX;
        stopAnimation();
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        let x = e.pageX - startX;

        // Wrap the x value
        x = ((x % contentWidth) + contentWidth) % contentWidth - contentWidth;

        content.style.transform = `translateX(${x}px)`;
      };

      const onMouseUp = () => {
        if (!isDragging) return;
        isDragging = false;
        startAnimation();
      };

      const onTouchStart = (e: TouchEvent) => {
        isDragging = true;
        const style = getComputedStyle(content);
        const matrix = new DOMMatrix(style.transform);
        const transformX = matrix.m41;
        startX = e.touches[0].pageX - transformX;
        stopAnimation();
      };

      const onTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        let x = e.touches[0].pageX - startX;

        // Wrap the x value
        x = ((x % contentWidth) + contentWidth) % contentWidth - contentWidth;

        content.style.transform = `translateX(${x}px)`;
      };

      const onTouchEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        startAnimation();
      };

      container.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);

      container.addEventListener('touchstart', onTouchStart);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);

      startAnimation();

      // Cleanup event listeners on unmount
      return () => {
        stopAnimation();
        container.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);

        container.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
      };
    };

    const cleanup1 = setupScrolling(
      line1Ref.current,
      line1ContentRef.current,
      -1
    );
    const cleanup2 = setupScrolling(line2Ref.current, line2ContentRef.current, 1);

    // Cleanup on unmount
    return () => {
      cleanup1 && cleanup1();
      cleanup2 && cleanup2();
    };
  }, []);

  return (
    <>
      {/* First Text Line */}
      <div
        className="relative overflow-hidden py-8 mb-8 h-28 cursor-grab"
        ref={line1Ref}
      >
        <div
          className="absolute top-0 left-0 whitespace-nowrap flex"
          ref={line1ContentRef}
          style={{ willChange: 'transform' }}
        >
          {/* Text Content */}
          <div className="flex-shrink-0 px-8 text-8xl text-white tracking-wider">
            Digital Growth, Delivered.&nbsp;
          </div>
        </div>
      </div>

      {/* Second Text Line */}
      <div
        className="relative overflow-hidden py-8 h-24 cursor-grab"
        ref={line2Ref}
      >
        <div
          className="absolute top-0 left-0 whitespace-nowrap flex"
          ref={line2ContentRef}
          style={{ willChange: 'transform' }}
        >
          {/* Text Content */}
          <div className="flex-shrink-0 px-8 text-8xl text-white tracking-wider">
            Innovative Solutions, Measurable Results.&nbsp;
          </div>
        </div>
      </div>
    </>
  );
};

export default TextMovement;
