import React from 'react';
import Home from './components/home'
import Project from './components/projects'
import Footer from './components/footer';
import Skill from './components/skill';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    // <div className="font-sans bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
    //   <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
    //     <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">
    //       Hi, I'm Afzal
    //     </h1>
    //     <p className="text-2xl md:text-3xl mb-8 font-light">
    //       MERN Stack Developer & Frontend Enthusiast
    //     </p>
    //     <div className="space-x-4">
    //       <a
    //         href="#projects"
    //         className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-100 transition"
    //       >
    //         My Projects
    //       </a>
    //       <a
    //         href="#contact"
    //         className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
    //       >
    //         Contact Me
    //       </a>
    //     </div>
    //   </section>

    //   <section className="py-24 px-6 bg-white dark:bg-gray-900">
    //     <h2 className="text-4xl font-bold text-center mb-12">Skills & Tools</h2>
    //     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
    //       {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'MongoDB', 'Express.js', 'Node.js', 'Git & GitHub', 'REST API'].map(skill => (
    //         <div
    //           key={skill}
    //           className="bg-gradient-to-tr from-blue-200 to-indigo-200 dark:from-gray-700 dark:to-gray-800 py-6 px-4 rounded-xl text-center shadow-lg"
    //         >
    //           <span className="block text-lg font-semibold">{skill}</span>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    //   <section id="projects" className="py-24 px-6 bg-gradient-to-tr from-gray-100 to-blue-50 dark:from-gray-800 dark:to-gray-700">
    //     <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
    //     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    //       {[
    //         {
    //           title: 'EcoWear E-Commerce',
    //           desc: 'Sustainable store built using React, Tailwind, Node.js, MongoDB. Includes cart, checkout, and dark mode.',
    //         },
    //         {
    //           title: 'Task Manager API',
    //           desc: 'Node.js + MongoDB REST API with JWT authentication and user/task management dashboard.',
    //         },
    //         {
    //           title: 'Responsive Portfolio',
    //           desc: 'Modern portfolio built with Tailwind CSS, React, and dark/light theme support.',
    //         }
    //       ].map((project, idx) => (
    //         <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform">
    //           <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
    //           <p className="text-gray-600 dark:text-gray-300 text-sm">{project.desc}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    //   <section className="py-24 px-6 bg-white dark:bg-gray-900 text-center">
    //     <div className="max-w-4xl mx-auto">
    //       <h2 className="text-4xl font-bold mb-6">Who Am I?</h2>
    //       <p className="text-lg text-gray-700 dark:text-gray-300">
    //         I'm a dedicated web developer passionate about creating beautiful, functional, and accessible digital experiences. With a strong foundation in frontend technologies and the complete MERN stack, I build websites and applications that solve real-world problems with modern, scalable solutions.
    //       </p>
    //     </div>
    //   </section>

    //   <footer id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
    //     <div className="max-w-xl mx-auto text-center">
    //       <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
    //       <p className="mb-6 text-lg">I'm available for freelance projects and full-time roles.</p>
    //       <a
    //         href="mailto:yourmail@example.com"
    //         className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
    //       >
    //         Say Hello
    //       </a>
    //     </div>
    //     <p className="mt-10 text-center text-sm">© 2025 Afzal Qureshi. Built with React & Tailwind CSS.</p>
    //   </footer>
    // </div>

    <>
    <Home/>
    <Skill/>
    <Project/>
    <AboutMe/>
    <Footer/>
    </>
  );
};

export default App;
