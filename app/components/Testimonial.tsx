import React from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image: string; // Path to image (optional)
}

const testimonials: Testimonial[] = [
  {
    name: 'Tribalchief',
    role: 'CEO, Example Corp',
    company: 'Example Corp',
    text: 'Jafar is an exceptional software engineer. His attention to detail and dedication are unmatched!',
    image: '/images/testimonial1.png', // Optional image
  },
  {
    name: 'Tribalchiefjj',
    role: 'Lead Developer, Tech Solutions',
    company: 'Tech Solutions',
    text: 'Working with Jafar was a pleasure. His problem-solving skills and creativity are outstanding.',
    image: '/images/testimonial2.png', // Optional image
  },
  // Add more testimonials as needed
];

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          What People Say
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="flex items-center mb-4">
                {testimonial.image && (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48} // Adjusted to match `w-12`
                    height={48} // Adjusted to match `h-12`
                    className="rounded-full mr-4"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
