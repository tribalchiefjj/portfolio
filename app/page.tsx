import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import TestimonialSection from './components/Testimonial';
import EasterEgg from './components/EasterEgg';
import Timeline from './components/Timeline';
import TechStack from './components/TechStack';
import Image from 'next/image';
import GitHubStats from './components/GitHubStats';
export default function Home() {
  return (
    <main className="min-h-screen text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
    {/* Hero Section */}
<section
  id="home"
  className="relative flex flex-col items-center justify-center text-center p-6 md:p-10 pt-32 md:pt-36 lg:pt-40 xl:pt-48 bg-gradient-to-r from-teal-400 to-blue-600 text-white dark:from-teal-800 dark:to-blue-900 dark:text-gray-100 transition-all duration-300"
>
  {/* Background Image */}
  <div
    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
    style={{ backgroundImage: 'url(/set.jpg)' }}
  ></div>

  {/* Hero Content */}
  <div className="flex flex-col items-center lg:items-start lg:w-1/3 w-full space-y-6">
  {/* Avatar with Glassmorphism Effect */}
  <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto border-4 border-white overflow-hidden bg-white/30 backdrop-blur-lg shadow-xl">
  <Image
      src="/pic.jpg"
      alt="Your Avatar"
      className="w-full h-full object-cover"
    />
  </div>

    {/* Greeting Text */}
    <p className="text-base md:text-lg mb-2 animate__animated animate__fadeIn">Hi!😃😎</p>
    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInUp">
      Welcome to My Portfolio
    </h1>
    <p className="text-base md:text-lg mb-6 animate__animated animate__fadeInUp">
      It&apos;s currently under construction, but stay tuned for something amazing!
    </p>

    {/* Call to Action Button */}
    <button className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:scale-110 transform transition-all duration-300 animate__animated animate__fadeInUp">
      Click here🤫
    </button>
  </div>

  {/* Social Icons */}
  <div className="absolute bottom-10 flex gap-6 z-10 animate__animated animate__fadeInUp">
    <a href="https://twitter.com" className="text-white hover:text-teal-300 transition-colors">
      <i className="fab fa-twitter text-2xl"></i>
    </a>
    <a href="https://github.com" className="text-white hover:text-teal-300 transition-colors">
      <i className="fab fa-github text-2xl"></i>
    </a>
    <a href="https://linkedin.com" className="text-white hover:text-teal-300 transition-colors">
      <i className="fab fa-linkedin text-2xl"></i>
    </a>
  </div>

  {/* GitHub Stats */}
  {/* <div className="relative z-10 mt-10 w-full max-w-4xl">
    <GitHubStats />
  </div> */} 
</section>

<section id="github-stats" className="py-16 px-8">
        <GitHubStats />
      </section>


      {/* About and Easter Egg Section */}
      <section id="about-easter-egg" className="bg-white dark:bg-gray-800 py-16 px-8">
        <div className="container mx-auto max-w-6xl flex flex-wrap">
          {/* About Section */}
          <div className="w-full sm:w-1/2 p-4">
            <About />
          </div>

          {/* Easter Egg Section */}
          <div className="w-full sm:w-1/2 p-4 text-center">
            <EasterEgg />
          </div>
        </div>
      </section>

      {/* Tech Stack and Dynamic Stats Section */}
      <section id="tech-stack-stats" className="bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-8">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row gap-12">
          {/* Tech Stack Section */}
          <div className="flex-1 w-full sm:w-1/2">
            <TechStack />
          </div>

          {/* Dynamic Stats Section */}
          <div className="flex-1 w-full sm:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 animate__animated animate__fadeInUp">
              <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</h3>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">5,000+</h3>
                <p className="text-gray-600 dark:text-gray-400">Cups of Coffee</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">∞</h3>
                <p className="text-gray-600 dark:text-gray-400">Lines of Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
     
      {/* Skills Section */}
      <section id="skills" className="bg-white dark:bg-gray-800 py-16 px-8 mt-10">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-16 px-8 mt-10">
        <Projects />
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="bg-white dark:bg-gray-800 py-16 px-8 mt-10">
        <TestimonialSection />
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="bg-gray-50 dark:bg-gray-900 py-16 px-8 mt-10">
        <Timeline />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white dark:bg-gray-800 py-16 px-8 mt-10">
        <Contact />
      </section>
    </main>
  );
}
