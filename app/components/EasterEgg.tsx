'use client';

import { useState } from 'react';
import Image from 'next/image';

const EasterEgg: React.FC = () => {
  const [showEgg, setShowEgg] = useState(false);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (input.value.toLowerCase() === 'the codefather') {
      setShowEgg(true);
    }
  };

  return (
    <section className="relative bg-gray-200 dark:bg-gray-800 py-16 px-8 text-center">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Can you find the secret phrase? 😃🙃 hint (the c...)
        </h2>
        <input
          type="text"
          placeholder="Type the secret phrase..."
          onKeyUp={handleKeyUp}
          className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-md shadow-md border-2 border-gray-300 dark:border-gray-600"
        />

        {/* Hidden Easter Egg Content */}
        {showEgg && (
          <div className="mt-8 p-6 bg-yellow-300 dark:bg-yellow-500 rounded-md shadow-lg animate__animated animate__bounceIn">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-900 mb-4">🎉 Surprise! 🎉</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Congratulations, you found the secret phrase! &quot;The CodeFather&quot; strikes
              again! 😎
            </p>
            <Image
              src="/images/codefather.png"
              alt="CodeFather"
              width={128}
              height={128}
              className="mt-4 mx-auto rounded-full border-4 border-gray-800 dark:border-gray-200"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default EasterEgg;
