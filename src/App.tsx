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
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleExplore = () => {
    setShowPortfolio(true);
  };

  
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
    { icon: <Github className="w-8 h-8" />, href: 'https://github.com/komalsuryanarayana', label: 'GitHub', detail: 'komalsuryanarayana' },
    { icon: <Linkedin className="w-8 h-8" />, href: 'https://www.linkedin.com/in/komal-suryanarayana-gade-082b0b2a0/', label: 'LinkedIn', detail: 'komal-suryanarayana-gade' },
    { icon: <Mail className="w-8 h-8" />, href: 'mailto:komal.suryanarayana@gmail.com', label: 'Email', detail: 'komal.suryanarayana@gmail.com' },
    { icon: <Phone className="w-8 h-8" />, href: 'tel:9347158648', label: 'Phone', detail: '+91 93471 58648' },
  ];

  const education = [
    {
      school: "Vellore Institute of Technology, Chennai",
      degree: "B.Tech in Computer Science and Engineering",
      year: "2021 - 2025",
      url: "https://chennai.vit.ac.in/"
    },
    {
      school: "Narayana Junior College",
      degree: "Intermediate Education",
      year: "2019 - 2021",
      url: "https://www.narayanajuniorcolleges.com/"
    },
    {
      school: "Narayana E-Techno School",
      degree: "Secondary Education",
      year: "2018 - 2019",
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
      title: "Vellore Insitute Of Technology Research Intern",
      description: "Contributing in authoring a research paper on Post-Clinical Patient Safety Through Automated Therapeutic Reconciliation Using Large Language Model",
      url: "https://vit.ac.in/",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80"
    }
  ];

  const achievements = [
    "Co-Lead In Cultural-IT Culb, VIT-Chennai ",
    "Event Coordinator And Member in Sahayatha Culb, VIT-Chennai",
    "SalesForce developer",
    "Participant in various hackathons and coding competitions"
  ];

  return (
    <AnimatePresence>
      {!showPortfolio ? (
        // THEME REVERT: Back to dark landing page
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
              Welcome to Komal's Portfolio
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.95 }}
              className="text-gray-400 text-xl"
            >
              Exploring the world of technology and innovation
            </motion.div>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={handleExplore}
              className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore
            </motion.button>
          </div>
        </motion.div>
        
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16">
          {/* Navigation Bar */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-20">
                <motion.a
                  href="#"
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
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
                      className="text-gray-300 hover:text-white transition-colors text-lg"
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
                  {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
                        className="block py-3 text-gray-300 hover:text-white transition-colors text-lg"
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
            id="#"
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
                      src="https://drive.google.com/thumbnail?id=1pOfstP_BQraeVQPAD8ZumfXezaGOeN9E&sz=w1000"
                      alt="Komal Suryanarayana"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Komal Suryanarayana
                  </h1>
                  <p className="text-2xl text-gray-300 mb-8">Full Stack Developer</p>
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
                      whileHover={{ scale: 0.5 }}
                      whileTap={{ scale: 0.1 }}
                      href="#education"
                      className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                    >
                      View 
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
          {/* CHANGE: Redesigned this section to a vertical timeline format */}
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
              <div className="max-w-3xl mx-auto">
                <div className="relative border-l-2 border-gray-700 ml-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.5 }}
                      className="mb-10 ml-8"
                    >
                      <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full -left-[9px] ring-4 ring-gray-900"></span>
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-blue-400 hover:underline"
                      >
                        {edu.school}
                      </a>
                      <p className="block mb-2 text-md font-normal leading-none text-gray-400 mt-1">{edu.year}</p>
                      <p className="text-lg text-gray-300">{edu.degree}</p>
                    </motion.div>
                  ))}
                </div>
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

          {/* Internships Section */}
          <section id="projects" className="py-20 bg-gray-800 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5" />
            <div className="container mx-auto px-4 relative">
              <motion.h2
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              >
                Internships Experience
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
                  <h3 className="text-3xl font-semibold text-blue-400 mb-8">Contact Information</h3>
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
                        <div className="text-blue-400 group-hover:text-blue-300 transition-colors p-2 bg-gray-800 rounded-full">
                          {React.cloneElement(social.icon, { className: "w-6 h-6" })}
                        </div>
                        <div>
                          <p className="text-white group-hover:text-blue-400 transition-colors text-lg font-semibold">{social.label}</p>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{social.detail}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-3xl font-semibold text-blue-400 mb-8">Send a Message</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
