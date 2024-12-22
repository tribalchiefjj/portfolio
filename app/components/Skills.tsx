export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Next.js', level: 'Intermediate' },
    { name: 'Database', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Kotlin', level: 'Beginner' },
    { name: 'Spring Boot', level: 'Intermediate' },
    { name: 'Java', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
  ];

  return (
    <section
      id="skills"
      className="bg-[url('/images/back.png')] bg-cover bg-center py-16 px-8 relative min-h-[500px] sm:min-h-[600px] lg:min-h-[900px] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Dark overlay */}
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 dark:text-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
