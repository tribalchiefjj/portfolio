"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; // Optimized Image component

const TechStack = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const techStack = ["JavaScript", "React", "Node.js", "Kotlin", "Spring Boot", "Tailwind CSS", "Java"];
    let i = 0;

    const typing = () => {
      if (i < techStack.length) {
        setText((prev) => prev + techStack[i] + " ");
        i++;
        setTimeout(typing, 500);
      }
    };

    typing();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-extrabold text-teal-600 mb-4">Currently obsessed with:</h3>
      <p className="text-lg text-gray-800 mb-4">
        <span className="font-bold text-teal-600">{text}</span>
      </p>

      {/* Tech Stack Icons */}
      <div className="flex justify-center gap-8 mt-6">
        <div className="text-center transform hover:scale-110 transition-transform duration-300">
          <Image
            src="/images/react-icon.png"
            alt="React"
            width={64}
            height={64}
            className="mb-2"
          />
          <p className="text-sm text-gray-600">React</p>
        </div>
        <div className="text-center transform hover:scale-110 transition-transform duration-300">
          <Image
            src="/images/node-icon.png"
            alt="Node.js"
            width={64}
            height={64}
            className="mb-2"
          />
          <p className="text-sm text-gray-600">Node.js</p>
        </div>
        <div className="text-center transform hover:scale-110 transition-transform duration-300">
          <Image
            src="/images/java-icon.png"
            alt="Java"
            width={64}
            height={64}
            className="mb-2"
          />
          <p className="text-sm text-gray-600">Java</p>
        </div>
        <div className="text-center transform hover:scale-110 transition-transform duration-300">
          <Image
            src="/images/kotlin-icon.png"
            alt="Kotlin"
            width={64}
            height={64}
            className="mb-2"
          />
          <p className="text-sm text-gray-600">Kotlin</p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
