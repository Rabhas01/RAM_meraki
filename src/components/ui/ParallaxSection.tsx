import React from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children?: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ backgroundImage, children }) => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: "fixed" }}
    >
      {children}
    </section>
  );
};

export default ParallaxSection;
