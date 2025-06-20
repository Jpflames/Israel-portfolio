'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNode, FaDatabase, FaServer, FaCode, FaTools } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker } from 'react-icons/si'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
      tech: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team workspace features.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered content generation tool that creates unique articles and social media posts.",
      tech: ["Next.js", "OpenAI API", "Vercel AI SDK", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    }
  ]

  const skills = [
    { name: "React", icon: <FaReact className="text-4xl text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
    { name: "Node.js", icon: <FaNode className="text-4xl text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-400" /> },
    { name: "Docker", icon: <SiDocker className="text-4xl text-blue-500" /> }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section id="home" className="section-padding flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="heading-gradient">JPCodes</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-dimWhite mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-dimWhite mb-8">
              I craft beautiful, responsive, and user-friendly web applications
              using modern technologies like React, Next.js, and Tailwind CSS.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </div>
            <div className="flex gap-6 mt-8">
              <a href="https://github.com/jpcodes" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-primary dark:text-dimWhite dark:hover:text-primary transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/jpcodes" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-primary dark:text-dimWhite dark:hover:text-primary transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/jpcodes" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-primary dark:text-dimWhite dark:hover:text-primary transition-colors">
                <FaTwitter />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="JPCodes Profile"
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 768px) 300px, 400px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding section-bg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-dimWhite mb-6">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create seamless,
              user-centric solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-dimWhite">
              My journey in web development started with a curiosity for creating beautiful interfaces,
              and has evolved into a deep understanding of the entire web development ecosystem.
            </p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center heading-gradient">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="skill-card"
                >
                  {skill.icon}
                  <span className="mt-4 text-gray-600 dark:text-dimWhite">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding section-bg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center heading-gradient">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="project-card"
                >
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 dark:text-dimWhite mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.demoLink} className="text-primary hover:text-blue-400 transition-colors">Demo</a>
                    <a href={project.codeLink} className="text-primary hover:text-blue-400 transition-colors">Code</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-dimWhite mb-8">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out if you'd like to work together!
            </p>
            <a
              href="mailto:contact@jpcodes.com"
              className="btn-primary inline-block"
            >
              Send Message
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="section-bg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-2xl font-bold heading-gradient">
                JPCodes
              </a>
              <p className="text-gray-600 dark:text-dimWhite mt-2">Building the web, one line at a time.</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/jpcodes" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-primary dark:text-dimWhite dark:hover:text-primary transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/jpcodes" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-primary dark:text-dimWhite dark:hover:text-primary transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/jpcodes" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-primary dark:text-dimWhite dark:hover:text-primary transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600 dark:text-dimWhite">
            <p>© {new Date().getFullYear()} JPCodes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
} 