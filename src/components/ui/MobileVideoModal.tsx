import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface MobileVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const MobileVideoModal: React.FC<MobileVideoModalProps> = ({ isOpen, onClose, videoSrc }) => {
  const playerRef = useRef<ReactPlayer>(null);

  // Attach click event to the internal HTML5 video element for play/pause functionality
  useEffect(() => {
    const videoElement = playerRef.current?.getInternalPlayer() as HTMLVideoElement;
    
    if (videoElement) {
      const togglePlayPause = () => {
        if (videoElement.paused) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      };

      // Add the click event listener for play/pause
      videoElement.addEventListener('click', togglePlayPause);

      // Cleanup: Remove the event listener when the component unmounts or modal closes
      return () => {
        videoElement.removeEventListener('click', togglePlayPause);
      };
    }
  }, [isOpen]); // Re-run when modal opens/closes

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="relative">
        <ReactPlayer
          ref={playerRef}
          url={videoSrc}
          playing={isOpen}
          controls
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload', // Disable download button
              },
            },
          }}
        />
        {/* Cross (X) button to close the modal */}
        <button
          className="absolute top-4 right-4 text-white bg-gray-500 bg-opacity-50 p-2 rounded-full"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click event from propagating to the video
            onClose();
          }}
        >
          <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
        </button>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          position: relative;
          background: white;
          width: 100%;
          max-width: 90vw;
          max-height: 80vh;
          padding: 0;
        }
      `}</style>
    </Modal>
  );
};

export default MobileVideoModal;
