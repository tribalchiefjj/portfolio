"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [headingText, setHeadingText] = useState(""); // Set initial state as an empty string
  const [isModalOpen, setModalOpen] = useState(false); // State for modal open/close

  const fullHeading = "Who's Jafar? 🤔"; // The full text to type

  useEffect(() => {
    let i = 0;
    const typingEffect = () => {
      if (i <= fullHeading.length) {
        setHeadingText(fullHeading.slice(0, i)); // Use `slice` to set the correct portion of the string
        i++;
        setTimeout(typingEffect, 150); // Add delay between each character
      }
    };

    typingEffect(); // Start typing immediately after component mounts
  }, []); // Empty dependency array ensures this only runs once when the component is mounted

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        setModalOpen(false); // Close the modal when Esc key is pressed
      }
    };
    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]); // Effect depends on the modal open state

  const handleModal = () => setModalOpen((prev) => !prev);

  return (
    <section id="about" className="bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-8">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Dynamically typed heading */}
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">{headingText}</h2>

        {/* Profile Image */}
        <div className="relative mx-auto w-40 h-40 mb-6">
          <Image
            src="/profile-pic.png"
            alt="Jafar"
            width={160}
            height={160}
            className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* About Me Paragraph */}
        <div className="overflow-y-auto max-h-60 px-4 md:px-0 mb-6">
          <p className="text-lg text-gray-800">
            Hello! I&apos;m <span className="font-bold text-teal-600">Jafar</span>, but you know some people can&apos;t seem to control themselves from calling me
            <span className="font-bold text-blue-500"> &quot;The Codefather&quot; 🕶️</span>.
            Probably because I make offers no bugs can refuse and also Googling &quot;how to exit Vim.&quot;🤣 I spend my days writing code (ctrl C, V), refactoring it, and then convincing myself it was genius all along.
            Ahh, hobbies? Well, they include fixing one bug and accidentally creating three more, pretending I understand recursion, and wondering why semicolons exist.
            I&apos;m always learning because, let&apos;s face it, the tech world evolves faster than my Wi-Fi speed (1mbps or 2). Stick around—there&apos;s a 99.9% chance I&apos;ll deploy something cool, and a 0.1% chance I&apos;ll break everything. 🚀
            This portfolio reflects my journey, and it&apos;s a work in progress just like me. 🚀
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 animate__animated animate__fadeInUp">
          <button
            onClick={handleModal}
            className="px-8 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            Let&apos;s Connect
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleModal} // Close modal when clicking outside
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Modal Header */}
            <h3 className="text-xl font-bold text-blue-600 mb-4">Contact Me(<span className="font-bold text-teal-400">under construction, reach me through social media platforms listed on the footer for now</span>,)</h3>

            {/* Modal Form */}
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Close Modal Button */}
            <button
              onClick={handleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
