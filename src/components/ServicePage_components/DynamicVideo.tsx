import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import MobileVideoModal from '@/components/ui/MobileVideoModal'; // Import the new MobileVideoModal component

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface DynamicVideoProps {
  previewVideoSrc: string;
  fullVideoSrc: string;
  initialWidth?: number;
  maxWidth?: number;
  initialHeight?: number;
  maxHeight?: number;
}

const DynamicVideo: React.FC<DynamicVideoProps> = ({
  previewVideoSrc,
  fullVideoSrc,
  initialWidth = 1,
  maxWidth = 95,
  initialHeight = 20,
  maxHeight = 100,
}) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPreview, setIsPreview] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const videoElement = videoContainerRef.current;

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLazyLoaded(true);
            observer.disconnect();
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    if (videoElement) {
      ScrollTrigger.create({
        trigger: videoElement,
        start: 'top bottom',
        end: 'center center',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const widthValue = initialWidth + progress * (maxWidth - initialWidth);
          const heightValue = initialHeight + progress * (maxHeight - initialHeight);
          const yValue = -progress * 20;

          gsap.set(videoElement, {
            width: `${widthValue}%`,
            height: `${heightValue}vh`,
            y: yValue,
            ease: 'power2.out',
          });
        },
      });
    }

    return () => {
      window.removeEventListener('resize', checkIfMobile);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [initialWidth, maxWidth, initialHeight, maxHeight]);

  const playFullVideo = () => {
    if (isMobile) {
      setIsModalOpen(true); // Open modal on mobile when play is clicked
    } else {
      setIsPreview(false);
      setIsPlaying(true);
      setIsMuted(false);
      if (videoElementRef.current) {
        videoElementRef.current.src = fullVideoSrc;
        videoElementRef.current.muted = false;
        videoElementRef.current.play();
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setIsPlaying(false); // Stop playing when modal is closed
  };

  const toggleMute = () => {
    if (videoElementRef.current) {
      videoElementRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isMobile) {
      const videoBounds = videoContainerRef.current?.getBoundingClientRect();
      if (videoBounds) {
        const x = event.clientX - videoBounds.left;
        const y = event.clientY - videoBounds.top;
        setCursorPosition({ x, y });
      }
    }
  };

  return (
    <div
      ref={videoContainerRef}
      className="relative mx-auto overflow-hidden cursor-pointer"
      style={{
        width: `${initialWidth}%`,
        height: `${initialHeight}vh`,
      }}
      onMouseMove={handleMouseMove}
      onClick={isPreview ? playFullVideo : toggleMute}
    >
      {/* Custom cursor for desktop, simple text for mobile */}
      {isMobile ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          {!isPlaying && <span className="text-white bg-black bg-opacity-50 p-2 rounded-lg text-lg">play</span>}
        </div>
      ) : (
        <div
          className="absolute pointer-events-none z-10"
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span className="text-white bg-black bg-opacity-50 p-2 rounded-lg text-lg">
            {isPlaying ? 'pause' : 'play'}
          </span>
        </div>
      )}

      <video
        ref={videoElementRef}
        className="object-cover rounded-lg cursor-none"
        style={{ width: '100%', height: '100%' }}
        src={isLazyLoaded && !isPreview ? fullVideoSrc : previewVideoSrc}
        autoPlay
        loop={isPreview}
        muted={isPreview || isMuted}
        playsInline
      />

      {/* Mute button (only visible during full video playback) */}
      {isPlaying && !isPreview && (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
          <button
            className="text-white bg-black bg-opacity-50 p-2 rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
          >
            {isMuted ? (
              <FontAwesomeIcon icon={faVolumeMute} className="h-6 w-6 text-white" />
            ) : (
              <FontAwesomeIcon icon={faVolumeUp} className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      )}

      {/* Mobile Video Modal */}
      {isMobile && (
        <MobileVideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoSrc={fullVideoSrc}
        />
      )}
    </div>
  );
};

export default DynamicVideo;
