import Image from 'next/image';
export default function Projects() {
    const projectList = [
      {
        title: 'Fursa mobile app ',
        description: 'An android mobile app that helps youth in whether its job, interns, bussiness, any opportunity.',
        image: '/images/project1.png', // Replace with your image path
        tags: ['react naive ', 'expo go', 'youths', 'API'],
        link: 'https://github.com/tribalchiefjj/Fursa-App', // GitHub or live demo link
      },
      {
        title: 'Project Two',
        description: 'a very simple blockchain .',
        image: '/images/project2.png',
        tags: ['pure java', 'simple', 'mining'],
        link: 'https://github.com/tribalchiefjj/BlockChain',
      },
      {
        title: 'Project Three',
        description: 'A unique project, a financial dashboard,invoices saved.',
        image: '/images/project3.png',
        tags: ['typscript', 'simple', ''],
        link: 'https://github.com/tribalchiefjj/financial-dashboard-',
      },
    ];




  
    return (
      <section id="projects" className="bg-white py-16 px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            My Projects
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                data-aos="fade-up" // Animation effect on scroll
                data-aos-duration="800" // Duration of animation
              >
                <Image
  src={project.image}
  alt={project.title}
  className="rounded-md mb-4 object-cover"
  width={400} // Example width
  height={200} // Example height
/>

                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  