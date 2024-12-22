'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Submitting...');

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_USER_ID;

    if (!serviceID || !templateID || !userID) {
      setIsSubmitting(false);
      setStatus('Missing configuration. Please contact the administrator.');
      return;
    }

    emailjs
      .sendForm(serviceID, templateID, e.target as HTMLFormElement, userID)
      .then(
        () => {
          setIsSubmitting(false);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setShowThankYou(true);

          // Hide "Thank You" message after 5 seconds
          setTimeout(() => setShowThankYou(false), 5000);
        },
        (error) => {
          console.error('Error:', error);
          setIsSubmitting(false);
          setStatus('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-8 bg-gradient-to-r from-blue-500 to-teal-400 dark:bg-gradient-to-r dark:from-blue-700 dark:to-teal-600">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-300 dark:bg-gray-800 dark:border-gray-600 mb-10">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
            Have a question or want to work together? Fill out the form below, and I&apos;ll get back to you! (still under development, reach me through the social media platforms listed below for now)
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 rounded-xl shadow-lg border-2 border-gray-300 dark:bg-gray-700 dark:border-gray-600 transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="mb-5">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform duration-300 ease-in-out hover:scale-105 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100 dark:focus:ring-blue-400"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform duration-300 ease-in-out hover:scale-105 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100 dark:focus:ring-blue-400"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform duration-300 ease-in-out hover:scale-105 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-100 dark:focus:ring-blue-400"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform duration-300 ease-in-out hover:scale-105 disabled:bg-gray-400"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
            {status && (
              <div
                className={`mt-4 text-center ${
                  status === 'Message sent successfully!' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {status}
              </div>
            )}
            {/* Animated Thank You Message */}
            {showThankYou && (
              <div className="mt-4 text-center text-green-600 text-xl font-bold">
                Thank you for your message! I&apos;ll get back to you soon.
              </div>
            )}
          </form>
        </div>
        {/* Resume Download Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-300 dark:bg-gray-800 dark:border-gray-600 mb-10">
          <h2 className="text-xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">Download My Resume</h2>
          <p className="text-gray-600 text-center mb-4 dark:text-gray-300">
            Feel free to download my resume to learn more about my experience and skills.
          </p>
          <div className="flex justify-center items-center">
            <a
              href="/resume.pdf"
              download="Jafar_Resume"
              className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
