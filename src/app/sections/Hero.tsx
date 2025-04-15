import Image from 'next/image'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">Rian Kochel</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            A passionate multimedia creator and developer crafting engaging digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-[500px] w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3"></div>
          <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl transform -rotate-3 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Add your profile image here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-slate-400 dark:text-slate-500">Profile Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 