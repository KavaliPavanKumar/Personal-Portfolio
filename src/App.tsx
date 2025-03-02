import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, BookOpen, Briefcase, Award, FileText, Brain, Link, Phone, Menu, X, GraduationCap, Home, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black via-[#03045e] to-black z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold text-white font-sans tracking-tight">
              <span className="text-[#ff006e]">{'<'}</span>
              Pavan Kumar
              <span className="text-[#ff006e]">{'/>'}</span>
            </a>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#ff006e]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-200 hover:text-[#ff006e] transition-colors">Home</a>
              <a href="#education" className="text-gray-200 hover:text-[#ff006e] transition-colors">Education</a>
              <a href="#skills" className="text-gray-200 hover:text-[#ff006e] transition-colors">Skills</a>
              <a href="#experience" className="text-gray-200 hover:text-[#ff006e] transition-colors">Experience</a>
              <a href="#projects" className="text-gray-200 hover:text-[#ff006e] transition-colors">Projects</a>
              <a href="#connect" className="text-gray-200 hover:text-[#ff006e] transition-colors">Connect</a>
              <a href="#contact" className="px-6 py-2 bg-[#ff006e] text-white rounded hover:bg-[#ff006e]/80 transition-colors shadow-md">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-6`}>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-200 hover:text-[#ff006e]" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#education" className="text-gray-200 hover:text-[#ff006e]" onClick={() => setIsMenuOpen(false)}>Education</a>
              <a href="#skills" className="text-gray-200 hover:text-[#ff006e]" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#experience" className="text-gray-200 hover:text-[#ff006e]" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#projects" className="text-gray-200 hover:text-[#ff006e]" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#connect" className="text-gray-200 hover:text-[#ff006e]" onClick={() => setIsMenuOpen(false)}>Connect</a>
              <a href="#contact" className="px-6 py-2 bg-[#ff006e] text-white rounded hover:bg-[#ff006e]/80 inline-block text-center" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen pt-20 bg-gradient-to-br from-black via-[#03045e] to-black text-white" id="home">
        <div className="container mx-auto px-4 h-[calc(100vh-5rem)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff006e]">
                  Hello, I'm
                </span>
                <br />
                Kavali Pavan Kumar
              </h1>
              <p className="text-2xl text-[#ff006e]">Software Developer | Data Analyst | AI Enthusiast</p>
              <p className="text-lg text-gray-200 max-w-2xl">
                Passionate about creating innovative solutions using cutting-edge technologies in software development, 
                machine learning, and artificial intelligence.
              </p>
              <div className="flex gap-6 mb-8">
                <a href="https://github.com/KavaliPavanKumar" target="_blank" rel="noopener noreferrer" 
                  className="text-white hover:text-[#ff006e] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/Kavali-Pavan-Kumar" target="_blank" rel="noopener noreferrer" 
                  className="text-white hover:text-[#ff006e] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://leetcode.com/u/Kavali_Pavan_Kumar/" target="_blank" rel="noopener noreferrer" 
                  className="text-white hover:text-[#ff006e] transition-colors">
                  <Code className="w-6 h-6" />
                </a>
                <a href="https://www.hackerrank.com/profile/pavankumarkaval1" target="_blank" rel="noopener noreferrer" 
                  className="text-white hover:text-[#ff006e] transition-colors">
                  <Award className="w-6 h-6" />
                </a>
                <a href="mailto:pavankumarkavali846@gmail.com" 
                  className="text-white hover:text-[#ff006e] transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://salmon-jeri-55.tiiny.site" 
                  className="px-8 py-3 bg-[#ff006e] text-white font-semibold rounded hover:bg-[#ff006e]/80 transition-colors shadow-md inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  download>
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <a href="#contact" 
                  className="px-8 py-3 bg-transparent border-2 border-[#ff006e] text-white font-semibold rounded hover:bg-[#ff006e]/10 transition-colors inline-flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </a>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff006e] to-[#03045e] rounded-full blur-md opacity-75"></div>
                <img 
                  src="https://i.ibb.co/PpxX8Ft/1.png"
                  alt="Kavali Pavan Kumar"
                  className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Timeline Flow Section */}
      <div className="relative">
        {/* Education Section */}
        <section className="py-20 bg-white" id="education">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <GraduationCap className="w-8 h-8 text-[#ff006e] mr-3" />
              <h2 className="text-3xl font-bold text-center">Education Journey</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#03045e] to-[#ff006e] rounded-full"></div>
                
                {/* Timeline Items */}
                <div className="space-y-16">
                  {/* KEC */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-[#ff006e] border-4 border-white shadow-lg z-10"></div>
                    <div className="ml-auto mr-auto md:ml-0 md:mr-[calc(50%+2rem)] md:pr-8 md:w-[calc(50%-2rem)] p-6 bg-white rounded-lg shadow-lg border border-[#ff006e]/20 md:text-right">
                      <div className="mb-2">
                        <h3 className="text-xl font-semibold text-[#ff006e]">Kuppam Engineering College (KEC)</h3>
                        <p className="text-gray-600">B.Tech in Computer Science and Engineering</p>
                      </div>
                      <p className="text-gray-600">CGPA: 8.3</p>
                      <span className="block mt-2 text-gray-500">2020 - 2024</span>
                    </div>
                  </div>
                  
                  {/* JNV */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-[#03045e] border-4 border-white shadow-lg z-10"></div>
                    <div className="ml-auto mr-auto md:mr-0 md:ml-[calc(50%+2rem)] md:pl-8 md:w-[calc(50%-2rem)] p-6 bg-white rounded-lg shadow-lg border border-[#03045e]/20">
                      <div className="mb-2">
                        <h3 className="text-xl font-semibold text-[#03045e]">Jawahar Navodaya Vidyalaya (JNV)</h3>
                        <p className="text-gray-600">Higher Secondary Certificate (HSC) - CBSE</p>
                      </div>
                      <p className="text-gray-600">CGPA: 9.0</p>
                      <span className="block mt-2 text-gray-500">2018 - 2020</span>
                    </div>
                  </div>
                  
                  {/* High School */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-[#ff006e] border-4 border-white shadow-lg z-10"></div>
                    <div className="ml-auto mr-auto md:ml-0 md:mr-[calc(50%+2rem)] md:pr-8 md:w-[calc(50%-2rem)] p-6 bg-white rounded-lg shadow-lg border border-[#ff006e]/20 md:text-right">
                      <div className="mb-2">
                        <h3 className="text-xl font-semibold text-[#ff006e]">Vijaya Bharathy EM High School</h3>
                        <p className="text-gray-600">Secondary School Certificate (SSC) - BSE-AP</p>
                      </div>
                      <p className="text-gray-600">CGPA: 10.0</p>
                      <span className="block mt-2 text-gray-500">2017 - 2018</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Next Section Arrow */}
            <div className="flex justify-center mt-16">
              <a href="#skills" className="p-3 bg-[#03045e] text-white rounded-full shadow-lg hover:bg-[#ff006e] transition-colors">
                <ChevronRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50" id="skills">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <Brain className="w-8 h-8 text-[#ff006e] mr-3" />
              <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-t-[#ff006e] hover:transform hover:-translate-y-2 transition-transform duration-300">
                <Code className="w-8 h-8 text-[#ff006e] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">C, Python, Java</p>
                  <p className="text-gray-600">SQL, JavaScript, PHP</p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-t-[#03045e] hover:transform hover:-translate-y-2 transition-transform duration-300">
                <Brain className="w-8 h-8 text-[#03045e] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">React, Node.js, AWS, Azure</p>
                  <p className="text-gray-600">MySQL, HTML, CSS, Bootstrap</p>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border-t-4 border-t-[#ff006e] hover:transform hover:-translate-y-2 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-[#ff006e] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Git, GitHub</p>
                  <p className="text-gray-600">TensorFlow, Flask</p>
                </div>
              </div>
            </div>
            
            {/* Next Section Arrow */}
            <div className="flex justify-center mt-16">
              <a href="#experience" className="p-3 bg-[#03045e] text-white rounded-full shadow-lg hover:bg-[#ff006e] transition-colors">
                <ChevronRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-white" id="experience">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <Briefcase className="w-8 h-8 text-[#ff006e] mr-3" />
              <h2 className="text-3xl font-bold text-center">Professional Experience</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ff006e] to-[#03045e] rounded-full"></div>
                
                {/* Timeline Items */}
                <div className="space-y-16">
                  {/* Machine Learning Intern */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-[#ff006e] border-4 border-white shadow-lg z-10"></div>
                    <div className="ml-auto mr-auto md:ml-0 md:mr-[calc(50%+2rem)] md:pr-8 md:w-[calc(50%-2rem)] p-6 bg-white rounded-lg shadow-lg border border-[#ff006e]/20 md:text-right">
                      <div className="mb-2">
                        <h3 className="text-xl font-semibold text-[#ff006e]">Machine Learning Intern</h3>
                        <p className="text-gray-600">Skill Dzire</p>
                      </div>
                      <p className="text-gray-600">
                        Implemented ML models including CNN for Cats vs. Dogs classification, Diabetes Detection, and Gmail Spam Detection.
                      </p>
                      <span className="block mt-2 text-gray-500">Feb 2024 – May 2024</span>
                    </div>
                  </div>
                  
                  {/* Frontend Developer */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-[#03045e] border-4 border-white shadow-lg z-10"></div>
                    <div className="ml-auto mr-auto md:mr-0 md:ml-[calc(50%+2rem)] md:pl-8 md:w-[calc(50%-2rem)] p-6 bg-white rounded-lg shadow-lg border border-[#03045e]/20">
                      <div className="mb-2">
                        <h3 className="text-xl font-semibold text-[#03045e]">Frontend Developer</h3>
                        <p className="text-gray-600">Future Ready Talent</p>
                      </div>
                      <p className="text-gray-600">
                        Developed real-time web applications using Azure, HTML, CSS, JavaScript, and Bootstrap.
                      </p>
                      <span className="block mt-2 text-gray-500">June 2022 – January 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Next Section Arrow */}
            <div className="flex justify-center mt-16">
              <a href="#projects" className="p-3 bg-[#03045e] text-white rounded-full shadow-lg hover:bg-[#ff006e] transition-colors">
                <ChevronRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#ff006e]/20 hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src="https://i.ibb.co/zrjQ44Y/datascence.jpg" 
                  alt="Brain Tumor Detection"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-semibold p-4 text-white">Brain Tumor Detection</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Built a web application for detecting brain tumors using CNN and DenseNet, implemented with Python, 
                  TensorFlow, and Flask.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/KavaliPavanKumar/Brain_Tumour_Detection" target="_blank" rel="noopener noreferrer" 
                    className="text-[#03045e] hover:text-[#ff006e] inline-flex items-center font-medium">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#ff006e]/20 hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src="https://i.ibb.co/0hFt5m4/work-3.png" 
                  alt="Amazon Clone"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-semibold p-4 text-white">Amazon Clone</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Developed a responsive e-commerce website with features like product listing, cart functionality, 
                  and user authentication.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/KavaliPavanKumar/Amazon-Clone" target="_blank" rel="noopener noreferrer" 
                    className="text-[#03045e] hover:text-[#ff006e] inline-flex items-center font-medium">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Next Section Arrow */}
          <div className="flex justify-center mt-16">
            <a href="#connect" className="p-3 bg-[#03045e] text-white rounded-full shadow-lg hover:bg-[#ff006e] transition-colors">
              <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 bg-gradient-to-r from-[#03045e] to-black text-white" id="connect">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Connect With Me</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect Online</h3>
                <p className="text-gray-300 mb-8">
                  I'm always open to connecting with fellow developers, potential collaborators, and employers. 
                  Feel free to reach out through any of these platforms.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <a href="https://github.com/KavaliPavanKumar" target="_blank" rel="noopener noreferrer" 
                    className="flex flex-col items-center md:items-start p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Github className="w-8 h-8 text-[#ff006e] mb-2" />
                    <span className="font-semibold">GitHub</span>
                    <span className="text-sm text-gray-300">@KavaliPavanKumar</span>
                  </a>
                  
                  <a href="https://linkedin.com/in/Kavali-Pavan-Kumar" target="_blank" rel="noopener noreferrer" 
                    className="flex flex-col items-center md:items-start p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Linkedin className="w-8 h-8 text-[#ff006e] mb-2" />
                    <span className="font-semibold">LinkedIn</span>
                    <span className="text-sm text-gray-300">Kavali Pavan Kumar</span>
                  </a>
                  
                  <a href="https://leetcode.com/u/Kavali_Pavan_Kumar/" target="_blank" rel="noopener noreferrer" 
                    className="flex flex-col items-center md:items-start p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Code className="w-8 h-8 text-[#ff006e] mb-2" />
                    <span className="font-semibold">LeetCode</span>
                    <span className="text-sm text-gray-300">@KavaliPavanKumar</span>
                  </a>
                  
                  <a href="https://www.hackerrank.com/profile/pavankumarkaval1" target="_blank" rel="noopener noreferrer" 
                    className="flex flex-col items-center md:items-start p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Award className="w-8 h-8 text-[#ff006e] mb-2" />
                    <span className="font-semibold">HackerRank</span>
                    <span className="text-sm text-gray-300">@KavaliPavanKumar</span>
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#ff006e] to-[#03045e] rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <div className="relative bg-[#03045e] p-1 rounded-full border-2 border-[#ff006e]">
                    <img 
                      src="https://i.ibb.co/PpxX8Ft/1.png"
                      alt="Kavali Pavan Kumar"
                      className="w-64 h-64 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-[#ff006e] text-white p-4 rounded-full shadow-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Next Section Arrow */}
          <div className="flex justify-center mt-16">
            <a href="#contact" className="p-3 bg-white text-[#03045e] rounded-full shadow-lg hover:bg-[#ff006e] hover:text-white transition-colors">
              <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a href="mailto:pavankumarkavali846@gmail.com" 
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Mail className="w-8 h-8 text-[#ff006e] mb-2" />
                <span className="text-gray-800 font-semibold">Email</span>
                <span className="text-gray-600 text-sm">pavankumarkavali846@gmail.com</span>
              </a>
              <a href="tel:+918179543523" 
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Phone className="w-8 h-8 text-[#ff006e] mb-2" />
                <span className="text-gray-800 font-semibold">Phone</span>
                <span className="text-gray-600 text-sm">+91 8179543523</span>
              </a>
              <a href="https://linkedin.com/in/Kavali-Pavan-Kumar" target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Linkedin className="w-8 h-8 text-[#ff006e] mb-2" />
                <span className="text-gray-800 font-semibold">LinkedIn</span>
                <span className="text-gray-600 text-sm">Connect with me</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#ff006e]">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#ff006e] flex items-center">
                  <Home className="w-4 h-4 mr-2" />Home
                </a></li>
                <li><a href="#education" className="text-gray-400 hover:text-[#ff006e]">Education</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-[#ff006e]">Skills</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-[#ff006e]">Experience</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-[#ff006e]">Projects</a></li>
                <li><a href="#connect" className="text-gray-400 hover:text-[#ff006e]">Connect</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#ff006e]">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <Mail className="w-4 h-4 inline-block mr-2" />
                  pavankumarkavali846@gmail.com
                </li>
                <li className="text-gray-400">
                  <Phone className="w-4 h-4 inline-block mr-2" />
                  +91 8179543523
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#ff006e]">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/KavaliPavanKumar" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#ff006e]">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/Kavali-Pavan-Kumar" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#ff006e]">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://leetcode.com/u/Kavali_Pavan_Kumar/" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#ff006e]">
                  <Code className="w-6 h-6" />
                </a>
                <a href="https://www.hackerrank.com/profile/pavankumarkaval1" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#ff006e]">
                  <Award className="w-6 h-6" />
                </a>
                <a href="mailto:pavankumarkavali846@gmail.com" 
                  className="text-gray-400 hover:text-[#ff006e]">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 Kavali Pavan Kumar. All rights reserved.</p>
            <a href="#" className="inline-flex items-center justify-center mt-4 p-3 bg-[#03045e] text-white rounded-full shadow-lg hover:bg-[#ff006e] transition-colors">
              <Home className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;