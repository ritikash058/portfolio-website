"use client"
import { useState, useEffect } from 'react';
import { NavLink, MobileNavLink } from '@/components/Navbar';
import ContactInfoItem from '@/components/ContactInfo';
import SkillBar from '@/components/Skillbar';
import ProjectCard from '@/components/ProjectCard';
import { getSkillEmoji } from '@/utils/getEmoji';
import { MenuIcon, CloseIcon, GitHubIcon, LinkedInIcon, EmailIcon } from '@/utils/icon';
import { projects } from '@/utils/data';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl text-indigo-600">Ritika Shrestha</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#home" active={activeSection === 'home'}>Home</NavLink>
              <NavLink href="#about" active={activeSection === 'about'}>About</NavLink>
              <NavLink href="#skills" active={activeSection === 'skills'}>Skills</NavLink>
              <NavLink href="#projects" active={activeSection === 'projects'}>Projects</NavLink>
              <NavLink href="#contact" active={activeSection === 'contact'}>Contact</NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="#home" active={activeSection === 'home'} onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#about" active={activeSection === 'about'} onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="#skills" active={activeSection === 'skills'} onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
              <MobileNavLink href="#projects" active={activeSection === 'projects'} onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink href="#contact" active={activeSection === 'contact'} onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-100"></div>
          <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTk5OWYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PHBhdGggZD0iTTEwIDEwIDQwIDMwIDEwIDUwIiBzdHJva2U9IiM5OTk5OWYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          
          <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
            <div className="md mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hi, I'm Ritika Shrestha</h1>
              <h2 className="text-2xl md:text-3xl text-indigo-600 mb-6">Software Engineer | Web Developer</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Passionate about creating elegant solutions to complex problems. Building responsive, scalable web applications with modern technologies.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
                  Get in Touch
                </a>
                <a href="#projects" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-300">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                I'm a passionate software engineer with experience building web applications and solving complex technical challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Background</h3>
                <p className="text-gray-600 mb-4">
                  With over 2 years of experience in software development, I've worked on diverse projects ranging from enterprise applications to innovative startups. My journey began with a strong foundation in computer science fundamentals, which has allowed me to adapt to new technologies and methodologies throughout my career.
                </p>
                <p className="text-gray-600 mb-4">
                  I specialize in full-stack development with a focus on React, Node.js, and cloud technologies. I enjoy turning complex problems into simple, elegant solutions that provide real value to users.
                </p>
                <p className="text-gray-600">
                  When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  <SkillBar label="JavaScript" percentage="95" />
                  <SkillBar label="React / Next.js" percentage="90" />
                  <SkillBar label="Node.js / Express" percentage="85" />
                  <SkillBar label="HTML / CSS" percentage="95" />
                  <SkillBar label="Python" percentage="60" />
                  <SkillBar label="Cloud (AWS)" percentage="30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Expertise</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Technologies and tools I work with regularly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {["JavaScript", "TypeScript", "React", "Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "GraphQL"].map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
                  <div className="text-4xl mb-4">{getSkillEmoji(skill)}</div>
                  <h4 className="font-semibold text-gray-800">{skill}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Some of my recent works that showcase my skills and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <ContactInfoItem icon={<EmailIcon />} title="Email" value="ritikashrestha05@gmail.com" link="mailto:ritikashrestha058@gmail.com" />
                  <ContactInfoItem icon={<GitHubIcon />} title="GitHub" value="github.com/ritikash058" link="https://github.com/ritikash058" />
                  <ContactInfoItem icon={<LinkedInIcon />} title="LinkedIn" value="linkedin.com/in/ritika-shresth" link="https://linkedin.com/in/ritika-shresth" />
                </div>
              </div>
              <div>
                <form className="bg-white p-8 rounded-lg shadow-md">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your email" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your message"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-600">&copy; 2025 Ritika Shrestha. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com" className="text-gray-500 hover:text-indigo-600 transition duration-300">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-indigo-600 transition duration-300">
                <LinkedInIcon />
              </a>
              <a href="mailto:example@example.com" className="text-gray-500 hover:text-indigo-600 transition duration-300">
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}









