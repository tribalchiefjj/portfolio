import React from 'react';

const ResumeDownload: React.FC = () => {
  return (
    <section id="resume" className="bg-white py-4 px-4">
      <div className="container mx-auto max-w-xs text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Download My Resume</h2>
        <p className="text-gray-600 mb-4 text-xs">
          Feel free to download my resume if you&quot;d like to learn more about my experience and skills.
        </p>
        <a
          href="/resume.pdf" 
          download="Jafar_Resume" 
          className="bg-blue-600 text-white py-1 px-4 rounded-md text-sm hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeDownload;
