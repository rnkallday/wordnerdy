const About = () => {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript',
    'HTML5', 'CSS3', 'TailwindCSS', 'Node.js',
    'UI/UX Design', 'Responsive Design', 'Git'
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              I'm a passionate multimedia creator and developer with a keen eye for design
              and a love for creating engaging digital experiences. With expertise in both
              front-end development and creative design, I bring ideas to life through
              clean code and intuitive user interfaces.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              My journey in web development started with a curiosity for creating
              beautiful and functional websites. Today, I specialize in building
              modern, responsive web applications using the latest technologies
              and best practices.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 