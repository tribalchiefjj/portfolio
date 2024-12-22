import React from 'react';
import { FaRocket, FaLaptopCode } from 'react-icons/fa';

const Timeline = () => {
  const events = [
    {
      year: "2021",
      title: "Little boy, had no idea what's going on",
      description: "Nonetheless, still had the computer-related passion.",
      icon: <FaRocket />,
    },
    {
      year: "2022",
      title: "Got into College for Computer Science",
      description: "Ooh boy, it all made sense! This path was always meant for me.",
      icon: <FaLaptopCode />,
    },
    {
      year: "...To Date",
      title: "I am Who I Think I Am (The Greatest Of All Time—or NOT🤣)",
      description: "I put my heart and soul into my work, and boy, did I lose my mind in the process.",
      icon: <FaRocket />,
    },
    {
      year: "",
      title: "That was just a brief thing, still under construction. Download my CV below... will be updated...",
      description: "Stay with me!",
      icon: <FaRocket />,
    },
  ];

  return (
    <section id="timeline" className="py-16 px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          THE journey (just a brief thing yk)
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>

          {events.map((event, index) => (
            <div key={index} className="relative flex items-center mb-12">
              {/* Icon Circle */}
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300">
                {event.icon}
              </div>

              {/* Event Card */}
              <div className="ml-16 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{event.year}</h3>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-2">{event.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
