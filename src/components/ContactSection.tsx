import React, { useState } from 'react';
import Map from './Map'; // Import your Map component

const ContactSection: React.FC = () => {
  const [message, setMessage] = useState('');
  const maxCharacters = 200;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxCharacters) {
      setMessage(e.target.value);
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-gray-200" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Connect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Find Us Here</h3>
            <div className="mb-8">
              <Map /> {/* Use the Map component */}
            </div>
            <h3 className="text-2xl font-semibold mb-4">Pitch Us Your Ideas</h3>
            <p>Have a project in mind? Send us your ideas, and let's collaborate to make them a reality.</p>
          </div>
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-gray-200" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-gray-200" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 font-bold mb-2">Message:</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-gray-200 h-32 resize-none" 
                maxLength={maxCharacters}
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
              <p className="text-gray-400 text-sm mt-1">{message.length}/{maxCharacters} characters</p>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
