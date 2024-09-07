import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-16 mt-16 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Digital Presence?</h2>
        <p className="text-xl mb-8">Let's create a tailored strategy for your business today!</p>
        <Button variant="secondary" size="lg">
          Get Your Free Consultation
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;