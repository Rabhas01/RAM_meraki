// Import necessary libraries and types
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Define the props interface for the DynamicVideo component
interface DynamicVideoProps {
  videoSrc: string;        // Source URL of the video
  initialWidth?: number;   // Optional initial width percentage
  maxWidth?: number;       // Optional maximum width percentage
  initialHeight?: number;  // Optional initial height in viewport height units
  maxHeight?: number;      // Optional maximum height in viewport height units
}

// Define the DynamicVideo functional component
const DynamicVideo: React.FC<DynamicVideoProps> = ({
  videoSrc,
  initialWidth = 20,   // Default initial width is 20%
  maxWidth = 95,       // Default maximum width is 95%
  initialHeight = 30,  // Default initial height is 30vh
  maxHeight = 100,     // Default maximum height is 100vh
}) => {
  // Create a ref to access the video container DOM element
  const videoRef = useRef<HTMLDivElement>(null);

  // useEffect hook to set up the animations after the component mounts
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // First ScrollTrigger: Handles the expansion and parallax effect until the video reaches the center
      ScrollTrigger.create({
        trigger: videoElement,
        start: 'top 90%',        // Animation starts when the top of the video is at 90% of the viewport height
        end: 'center center',    // Animation ends when the video is centered in the viewport
        scrub: true,             // Synchronizes the animation with the scrollbar position
        onUpdate: (self) => {
          const progress = self.progress;  // Progress of the animation from 0 to 1

          // Calculate the width and height based on the progress
          const widthValue = initialWidth + progress * (maxWidth - initialWidth);
          const heightValue = initialHeight + progress * (maxHeight - initialHeight);

          // Parallax effect: Move the video upward slightly
          const yValue = -progress * 20;  // Adjust the multiplier to control the parallax intensity

          // Apply the calculated styles to the video element
          gsap.set(videoElement, {
            width: `${widthValue}%`,
            height: `${heightValue}vh`,
            y: yValue,
            ease: 'power2.out',
          });
        },
      });

      // Second ScrollTrigger: Maintains the full size and stops further upward movement
      ScrollTrigger.create({
        trigger: videoElement,
        start: 'center center',   // Starts when the video is centered in the viewport
        end: 'bottom top',        // Ends when the bottom of the video exits the top of the viewport
        scrub: true,
        onUpdate: () => {
          // Keep the width and height at maximum values
          gsap.set(videoElement, {
            width: `${maxWidth}%`,
            height: `${maxHeight}vh`,
            y: -20,  // Fixed y-value to maintain the position
            ease: 'power2.out',
          });
        },
      });
    }

    // Clean up function to kill the ScrollTriggers when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [initialWidth, maxWidth, initialHeight, maxHeight]); // Dependencies array includes the props

  // Render the video container and the video element
  return (
    <div
      ref={videoRef}                  // Attach the ref to the container div
      className="relative mx-auto overflow-hidden"
      style={{
        width: `${initialWidth}%`,    // Set the initial width
        height: `${initialHeight}vh`, // Set the initial height
      }}
    >
      <video
        className="object-cover rounded-lg"
        style={{ width: '100%', height: '100%' }} // Ensure the video fills its container
        src={videoSrc}       // Video source URL
        autoPlay             // Automatically start playing
        loop                 // Loop the video
        muted                // Mute the video
        playsInline          // Allow inline playback on mobile devices
      />
    </div>
  );
};

export default DynamicVideo;
