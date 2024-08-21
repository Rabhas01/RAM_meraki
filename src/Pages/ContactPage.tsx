import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send the data to a server
    console.log('Form submitted:', formData);
  };
  const [date, setDate] = React.useState<Date | undefined>(new Date())


  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="w-full h-screen relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            src="src/assets/video/your-background-video.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-left mb-12">
            <h1 className="text-5xl font-bold mb-4 max-w-sm pb-5">Contact Us</h1>
            <p className="text-lg text-center leading-relaxed pt-5">
              We would love to hear from you! Please fill out the form below and we'll get in touch with you as soon as possible.
            </p>
          </div>
        </div>
            <Calendar
            mode="single"
            selected={date}
                onSelect={setDate}
                className="rounded-md border container"
              />
      </div>
      <div className="container mx-auto px-4 mb-12">
        <form onSubmit={handleSubmit} className="bg-gray-700 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
