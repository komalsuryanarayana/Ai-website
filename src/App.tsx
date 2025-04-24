import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Terminal, Code2, Database, Server, Cpu, Menu, X, Phone } from 'lucide-react';
import { Scene3D } from './components/Scene3D';
import { ContactForm } from './components/ContactForm';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    { icon: <Terminal className="w-8 h-8" />, name: "Programming" },
    { icon: <Code2 className="w-8 h-8" />, name: "Software Development" },
    { icon: <Database className="w-8 h-8" />, name: "Data Structures" },
    { icon: <Server className="w-8 h-8" />, name: "System Design" },
    { icon: <Cpu className="w-8 h-8" />, name: "Computer Architecture" },
  ];

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-8 h-8" />, href: 'https://github.com/komalsuryanarayana', label: 'GitHub' },
    { icon: <Linkedin className="w-8 h-8" />, href: 'https://www.linkedin.com/in/komal-suryanarayana-gade-082b0b2a0/', label: 'LinkedIn' },
    { icon: <Mail className="w-8 h-8" />, href: 'mailto:komal.suryanarayana@gmail.com', label: 'Email' },
    { icon: <Phone className="w-8 h-8" />, href: 'tel:9347158648', label: 'Phone' },
  ];

  const education = [
    {
      school: "Vellore Institute of Technology, Chennai",
      degree: "B.Tech in Computer Science and Engineering",
      year: "2022-2026",
      url: "https://chennai.vit.ac.in/"
    },
    {
      school: "Narayana Junior College",
      degree: "Intermediate Education",
      year: "2020-2022",
      url: "https://www.narayanajuniorcolleges.com/"
    },
    {
      school: "Narayana E-Techno School",
      degree: "Secondary Education",
      year: "2019-2020",
      url: "https://www.narayanaschools.in/bengaluru/electronic-city/sr-secondary"
    }
  ];

  const projects = [
    {
      title: "Specto V",
      description: "A project focused on developing innovative solutions for real-world problems.",
      url: "https://www.linkedin.com/company/specto-v/posts/?feedView=all",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      title: "VIT Projects",
      description: "Various academic projects completed during my time at VIT Chennai.",
      url: "https://vit.ac.in/",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80"
    }
  ];

  const achievements = [
    "Dean's List Award for Academic Excellence",
    "First Prize in National Level Technical Symposium",
    "Active member of IEEE Student Branch",
    "Participant in various hackathons and coding competitions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              whileHover={{ scale: 1.05 }}
            >
              {isScrolled ? 'Komal Suryanarayana' : 'Welcome!'}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section with Profile Image */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="mb-8 rounded-full overflow-hidden w-48 h-48 mx-auto lg:mx-0 border-4 border-blue-500/50">
                <img
                  src="https://drive.google.com/uc?export=view&id=1C3zLA86HejeRdGNavv2z36IsluFOsM3V"
                  alt="Komal Suryanarayana"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Komal Suryanarayana
              </h1>
              <p className="text-xl text-gray-300 mb-8">Computer Science Student at VIT Chennai</p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#projects"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[400px] w-full"
            >
              <Scene3D />
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Education
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.a
                key={index}
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{edu.school}</h3>
                <p className="text-gray-300 mb-2">{edu.degree}</p>
                <p className="text-gray-400">{edu.year}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={ref} className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="container mx-auto px-4 relative">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4 text-blue-400">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50"
              >
                <p className="text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5" />
        <div className="container mx-auto px-4 relative">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-purple-500/5" />
        <div className="container mx-auto px-4 relative">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Get in Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">Contact Information</h3>
              <div className="grid grid-cols-1 gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-4 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;