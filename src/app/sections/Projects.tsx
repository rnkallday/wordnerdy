import Image from 'next/image'

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with Next.js and TailwindCSS.',
    image: '/project1.jpg',
    tags: ['Next.js', 'React', 'TailwindCSS'],
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'An interactive multimedia experience showcasing creative design.',
    image: '/project2.jpg',
    tags: ['TypeScript', 'Framer Motion', 'UI/UX'],
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'A responsive portfolio website with modern animations.',
    image: '/project3.jpg',
    tags: ['React', 'CSS', 'Animation'],
    link: '#'
  }
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Projects section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <p className="text-white text-lg">Project Image</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 