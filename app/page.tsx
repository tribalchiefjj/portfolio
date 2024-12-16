import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import TestimonialSection from './components/Testimonial'; // Import Testimonial Section
import EasterEgg from './components/EasterEgg';
import Timeline from './components/Timeline'; // Import the Timeline Component

export default function Home() {
  return (
    <main className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <section
  id="home"
  className="flex flex-col items-center justify-center text-center p-10 pt-36 bg-gradient-to-r from-teal-400 to-blue-600 text-white"
>
  {/* Add pt-36 or any padding-top value depending on your navbar height */}
  <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">
    Welcome
  </h1>
  <p className="text-lg mb-6">
    This is a placeholder for my amazing portfolio. Stay tuned!
  </p>
  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:scale-105 transform transition duration-300">
    Learn More
  </button>
</section>


      {/* About and Easter Egg Section */}
      <section id="about-easter-egg" className="bg-white py-16 px-8">
        <div className="container mx-auto max-w-6xl flex flex-wrap">
          {/* About Section */}
          <div className="w-full md:w-1/2 p-4">
            <About />
          </div>

          {/* Easter Egg Section */}
          <div className="w-full md:w-1/2 p-4 text-center">
            <EasterEgg />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-10">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-10">
        <Projects />
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="mt-10">
        <TestimonialSection />
      </section>
      <section id="timeline" className="mt-10">
      <Timeline /> 
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-10">
        <Contact />
      </section>
    </main>
  );
}
