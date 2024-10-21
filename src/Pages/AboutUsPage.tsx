import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Users, Star, Zap, } from 'lucide-react';

interface ExpandableItemProps {
  title: string;
  content: string;
}

const ExpandableItem: React.FC<ExpandableItemProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-200 hover:text-teal-400 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isExpanded && <p className="pb-4 text-gray-400">{content}</p>}
    </div>
  );
};

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#010b19] to-gray-900 text-gray-300">
      <header className="bg-[#01132b] py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-teal-400">About Rising Above Marketing (RAM)</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xl mb-8">
              RAM is a digital marketing agency based in Montreal, specializing in delivering innovative solutions in social media management, web design, and digital development. Our mission is to empower businesses by providing cutting-edge services that drive growth and position you above the competition in the digital landscape.
            </p>
            <div className="space-y-6">
              <ExpandableItem
                title="Our Skilled Team"
                content="Our team consists of passionate experts in various fields of digital marketing. From creative designers to data-driven analysts, we bring diverse skills together to craft comprehensive strategies for our clients."
              />
              <ExpandableItem
                title="Captivating Designs"
                content="We believe in the power of visual storytelling. Our design team creates stunning, user-centric designs that not only look great but also drive engagement and conversions."
              />
              <ExpandableItem
                title="AI-Powered Innovation"
                content="We leverage AI technology to optimize strategies, streamline processes, and offer smarter solutions to give your business a competitive edge in the market."
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-[#01132b] bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#1e3a5f]">
              <h2 className="text-2xl font-semibold text-teal-400 mb-4">Meet Our CEO</h2>
              <div className="flex items-center space-x-4">
                <img
                  src="/placeholder.svg"
                  alt="CEO Portrait"
                  className="w-24 h-24 rounded-full"
                />
                <div>
                  <p className="text-gray-200 font-semibold">Rabhas Vashisht</p>
                  <p className="text-gray-400">Visionary leader with 15+ years of experience in digital marketing</p>
                </div>
              </div>
            </div>
            <div className="bg-[#01132b] bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#1e3a5f]">
              <h2 className="text-2xl font-semibold text-teal-400 mb-4">Our Cosmic Coordinates</h2>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span>1234 Digital Avenue, Montreal, QC H3A 2A5, Canada</span>
              </div>
              <p className="mt-2 text-gray-400">Nestled in the heart of Montreal's tech hub, our office is a creative space where innovation meets strategy.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-teal-400 mb-8">Why Choose RAM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#01132b] bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#1e3a5f]">
              <Users className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Expert Team</h3>
              <p className="text-gray-400">Our diverse team brings a wealth of experience and innovative ideas to every project.</p>
            </div>
            <div className="bg-[#01132b] bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#1e3a5f]">
              <Star className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Proven Success</h3>
              <p className="text-gray-400">Our track record speaks for itself, with numerous success stories and satisfied clients.</p>
            </div>
            <div className="bg-[#01132b] bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#1e3a5f]">
              <Zap className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Cutting-edge Tech</h3>
              <p className="text-gray-400">We stay ahead of the curve, utilizing the latest technologies and strategies in digital marketing.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;
