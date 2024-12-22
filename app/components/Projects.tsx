import Image from 'next/image';

export default function Projects() {
  const projectList = [
    {
      title: 'Fursa mobile app',
      description: 'An Android mobile app that helps youth find opportunities like jobs, internships, and businesses.',
      image: '/images/project1.png',
      tags: ['React Native', 'Expo Go', 'Youths', 'API'],
      link: 'https://github.com/tribalchiefjj/Fursa-App',
    },
    {
      title: 'Project Two',
      description: 'A very simple blockchain.',
      image: '/images/project2.png',
      tags: ['Pure Java', 'Simple', 'Mining'],
      link: 'https://github.com/tribalchiefjj/BlockChain',
    },
    {
      title: 'Project Three',
      description: 'A unique project: a financial dashboard with invoice saving.',
      image: '/images/project3.png',
      tags: ['TypeScript', 'Dashboard', 'Finance'],
      link: 'https://github.com/tribalchiefjj/financial-dashboard-',
    },
  ];

  return (
    <section id="projects" className="bg-white dark:bg-gray-800 py-16 px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          My Projects
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="rounded-md mb-4 object-cover"
                width={400}
                height={200}
              />
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 text-sm px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
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
