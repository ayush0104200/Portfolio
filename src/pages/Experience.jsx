import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2023 - Present',
      location: 'Remote',
      description: 'Led the development of multiple React-based projects, improved performance by 40%, and mentored junior developers.',
      achievements: [
        'Developed and maintained 5+ production React applications',
        'Improved application performance by 40% through optimization',
        'Mentored 3 junior developers on best practices'
      ]
    },
    {
      id: 2,
      position: 'Frontend Developer',
      company: 'Digital Agency Pro',
      duration: 'Jun 2021 - Dec 2022',
      location: 'Hybrid',
      description: 'Built responsive websites and web applications for various clients using React and modern web technologies.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Implemented responsive designs across all projects',
        'Collaborated with designers and backend developers'
      ]
    },
    {
      id: 3,
      position: 'Junior Web Developer',
      company: 'StartUp Hub',
      duration: 'Jan 2020 - May 2021',
      location: 'On-site',
      description: 'Started my career building web pages and components, learning best practices and industry standards.',
      achievements: [
        'Learned React fundamentals and modern JavaScript',
        'Contributed to 10+ web projects',
        'Improved code quality through peer reviews'
      ]
    }
  ]

  return (
    <div className="experience-page">
      <section className="experience-section py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold">My Experience</h2>
              <div className="underline mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
              <p className="lead mt-3 text-muted">
                My professional journey and key achievements.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="mb-5">
                  <div className="d-flex align-items-start mb-3">
                    <div className="timeline-dot bg-primary rounded-circle me-4" style={{ width: '16px', height: '16px', marginTop: '8px', flexShrink: 0 }}></div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h4 className="mb-1 fw-bold">{exp.position}</h4>
                          <p className="text-primary mb-1">{exp.company}</p>
                        </div>
                        <div className="text-end">
                          <small className="badge bg-light text-dark">{exp.duration}</small>
                        </div>
                      </div>
                      <p className="text-muted small mb-2">{exp.location}</p>
                      <p className="mb-3">{exp.description}</p>
                      <ul className="list-unstyled">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted small mb-2">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="ps-4 ps-md-5">
                      <div className="border-start border-3 border-primary" style={{ height: '40px' }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
