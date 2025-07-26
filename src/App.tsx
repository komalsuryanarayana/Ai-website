import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Terminal, Code2, Database, Server, Cpu, Menu, X, Phone } from 'lucide-react';
import { Scene3D } from './components/Scene3D';
import { ContactForm } from './components/ContactForm';

function App() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [eduRef, eduInView] = useInView({ triggerOnce: true, threshold: 0.1 }); // 🔁 NEW

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExplore = () => setShowPortfolio(true);

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
      title: "Vellore Institute Of Technology Research Intern",
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
          {/* Navigation bar remains unchanged here */}

          {/* Hero, Skills, Projects, Contact remain unchanged */}

          {/* ✅ Updated Education Section */}
          <section id="education" ref={eduRef} className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-4">
              <motion.h2
                initial="hidden"
                animate={eduInView ? "visible" : "hidden"}
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
                      animate={eduInView ? "visible" : "hidden"}
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
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
