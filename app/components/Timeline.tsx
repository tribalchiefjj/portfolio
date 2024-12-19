import React from 'react';
import { FaRocket, FaLaptopCode } from 'react-icons/fa'; 

const Timeline = () => {
  const events = [
    {
      year: "2021",
      title: "little boy, had no idea th is going on ",
      description: "nonetheless still boy had the yk computer related things passion .",
      icon: <FaRocket />,
    },
    {
      year: "2022",
      title: "Got into Collage for Computer science",
      description: "oooh boy, it all made sense , this path bwoy ! was always meant for me ,it all added up and yes you are right thats where it all started .",
      icon: <FaLaptopCode />,
    },
    {
      year: "...To Date",
      title: "I am Who I Think I Am (The Greatest Of All Time(or NOT🤣))",
      description: "i did put my heart and my soul into my work and oh boy did i lose my mind in the process.",
      icon: <FaRocket />,
    },
    {
      year: "",
      title: "that was just a brief thing ,still under construction download my cv below.. will be updated...",
      description: "stay with me ",
      icon: <FaRocket />,
    },
  ];

  return (
    <section id="timeline" className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">THE journey(just a brief thing yk)</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

          {events.map((event, index) => (
            <div key={index} className="relative flex items-center mb-12">
              {/* Icon Circle */}
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300">
                {event.icon}
              </div>

              {/* Event Card */}
              <div className="ml-16 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-blue-600">{event.year}</h3>
                <h4 className="text-xl font-bold text-gray-800 mt-2">{event.title}</h4>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;