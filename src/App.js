import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef();

  // Smooth scrolling for navigation
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // EmailJS configuration
    const serviceId = 'service_portfolio'; // 나중에 실제 서비스 ID로 변경
    const templateId = 'template_portfolio'; // 나중에 실제 템플릿 ID로 변경
    const publicKey = 'YOUR_PUBLIC_KEY'; // 나중에 실제 퍼블릭 키로 변경

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setSubmitMessage('메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.');
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        setSubmitMessage('메시지 전송에 실패했습니다. 다시 시도해주세요.');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage(''), 5000);
      });
  };

  // Projects data based on GitHub repositories
  const projects = [
    {
      id: 1,
      title: "First Team Project",
      description: "A collaborative team project built with React, demonstrating modern web development practices and team collaboration. Features include user interface components, state management, and responsive design.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=Team+Project",
      github: "https://github.com/KJW-623/First-teamProject.git",
      live: "#"
    },
    {
      id: 2,
      title: "Scout Application",
             description: "A comprehensive Java-based application with database integration. Built using Java with SQL for database operations and modern CSS for user interface design.",
             technologies: ["Java", "SQL", "CSS", "Database Design"],
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Scout+App",
      github: "https://github.com/minahK/Scout.git",
      live: "#"
    }
  ];

  // Skills data
  const skills = {
    frontend: ["React", "JavaScript", "HTML", "CSS"],
    backend: ["Java", "Node.js"],
    database: ["SQL"],
    tools: ["Docker", "Git", "GitHub"]
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
                     <div className="nav-logo">
             <span>Ingyun Moon</span>
           </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
            <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
            <a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a>
            <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
                         <h1 className="hero-title">
               Hi, I'm <span className="highlight">Ingyun Moon</span>
             </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
                           <p className="hero-description">
                 Passionate about creating innovative web applications and learning new technologies.
                 Specialized in React, Java, Node.js, and modern web development practices.
               </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                View My Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <span>IM</span>
              </div>
                             <h3>Ingyun Moon</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a dedicated Full Stack Developer with a passion for creating 
                user-friendly and efficient web applications. My journey in software 
                development began with a curiosity for how things work on the web, 
                and it has evolved into a professional pursuit of excellence in coding.
              </p>
                             <p>
                 I specialize in modern web technologies including React, Java, Node.js, 
                 and database management. I enjoy working on both frontend and backend development, 
                 and I'm always eager to learn new technologies and best practices.
               </p>
              <p>
                My experience includes collaborative team projects and individual applications,
                where I've developed skills in version control, agile methodologies, and 
                cross-functional team collaboration.
              </p>
            </div>
                         <div className="about-stats">
               <div className="stat-item">
                 <h3>3</h3>
                 <p>Projects Completed</p>
               </div>
               <div className="stat-item">
                 <h3>8</h3>
                 <p>Technologies Mastered</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skill-items">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skill-items">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Database & SQL</h3>
              <div className="skill-items">
                {skills.database.map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Development Tools</h3>
              <div className="skill-items">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                      <a href={project.live} className="project-link">Live Demo</a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-details">
                                 <div className="contact-item">
                   <span className="contact-icon">📧</span>
                   <span>m86683470@gmail.com</span>
                 </div>
                                 <div className="contact-item">
                   <span className="contact-icon">📱</span>
                   <span>+82 10-8668-3470</span>
                 </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Seoul, South Korea</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="from_name"
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="from_email"
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows="5" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitMessage && (
                  <div className={`submit-message ${submitMessage.includes('성공') ? 'success' : 'error'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
                         <p>&copy; 2024 Ingyun Moon. All rights reserved.</p>
                         <div className="social-links">
               <a href="https://github.com/WaPleINworld" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
