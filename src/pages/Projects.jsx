import React from 'react'
import e from '../images/e-commerce-app.png'
import m from '../images/movie-search-app.png'
import t from '../images/to-do-list-app.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with payment integration and admin dashboard.',
      image: e,
      technologies: ['React'],
      link: 'https://github.com/ayush0104200/E-Commerce-React'
    },
    {
      id: 2,
      title: 'Movie-Search App',
      description: 'A movie search application with real-time updates and team features.',
      image: m,
      technologies: ['React'],
      link: 'https://github.com/ayush0104200/Movie-Seacrh-App'
    },
    {
      id: 3,
      title: 'To-Do List',
      description: 'A simple to-do list application with drag-and-drop functionality.',
      image: t,
      technologies: ['React'],
      link: 'https://github.com/ayush0104200/To-Do-list'
    }
  ]

  return (
    <div className="projects-page">
      <section className="projects-section py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold">My Projects</h2>
              <div className="underline mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
              <p className="lead mt-3 text-muted">
                Here are some of my recent projects that showcase my skills and experience.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 project-card">
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{project.description}</p>
                    <div className="technologies mb-3">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-primary me-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a href={project.link} className="btn btn-primary btn-sm flex-grow-1">
                        <i className="bi bi-eye me-1"></i>
                        View Project
                      </a>
                      <a href={project.link} className="btn btn-outline-primary btn-sm">
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
