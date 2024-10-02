import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ContactModal({ isOpen, onOpenChange }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-left fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 z-50 flex justify-end"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full w-4/5 md:w-2/5 bg-gray-900 text-white shadow-lg p-6 relative overflow-y-auto"
          >
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 bg-gray-700 text-white hover:bg-gray-600 rounded-full p-2"
            >
              <FiX size={24} />
            </button>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-2">Hi! Let's work together</h2>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                      <div className="sm:flex-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="sm:flex-1">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                        <input
                          id="company"
                          type="text"
                          required
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-1">About Your Project</label>
                      <textarea
                        id="project"
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white h-32"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="flex items-center justify-center bg-yellow-500 hover:bg-white text-black font-bold py-3 px-6 rounded-full transition-colors duration-300"
                      >
                        Submit the request <FiArrowRight className="ml-2" />
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="flex flex-col items-center justify-center space-y-4 py-12"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 360],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </motion.div>
                    <h2 className="text-2xl font-bold">Thank You!</h2>
                    <p className="text-center">
                      We've received your submission and will be in touch soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}