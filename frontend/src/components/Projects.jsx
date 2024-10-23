import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform RESTful API Development',
    description:
      'Developed a RESTful API for an e-commerce platform enabling user authentication, product management, and order processing.',
    technologies: ['Python', 'JavaScript', 'Azure', 'Docker', 'Postman'],
    link: 'https://github.com/your-profile/project-1', // Update this with your actual link
  },
  {
    title: 'Mental Health and Wellness Website',
    description:
      'A platform that provides personalized mental health resources based on user quiz responses to improve emotional well-being.',
    technologies: ['Web Development', 'JavaScript'],
    link: 'https://github.com/your-profile/project-2', // Update this with your actual link
  },
  {
    title: 'Brain Tumor Detection and Segmentation using Deep Learning',
    description:
      'Utilized data cleaning and visualization techniques to detect and segment brain tumors using U-Net and ResU-Net models.',
    technologies: ['Deep Learning', 'U-Net', 'ResU-Net'],
    link: 'https://github.com/your-profile/project-3', // Update this with your actual link
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>My Projects</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
