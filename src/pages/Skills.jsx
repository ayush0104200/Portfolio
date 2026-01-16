import React from 'react'

const Skills = () => {
  return (
    <div className="skills-page">
      <section className="skills-section py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold">My Skills</h2>
              <div className="underline mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="skill-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="skill-icon mb-3 fs-1 text-primary">
                  <i className="bi bi-filetype-html"></i>
                </div>
                <h5>HTML</h5>
                <div className="progress mt-3" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="skill-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="skill-icon mb-3 fs-1 text-primary">
                  <i className="bi bi-filetype-css"></i>
                </div>
                <h5>CSS     </h5>
                <div className="progress mt-3" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="skill-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="skill-icon mb-3 fs-1 text-primary">
                  <i className="bi bi-filetype-js"></i>
                </div>
                <h5>JavaScript</h5>
                <div className="progress mt-3" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="skill-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="skill-icon mb-3 fs-1 text-primary">
                  <i className="bi bi-bootstrap"></i>
                </div>
                <h5>Bootstrap</h5>
                <div className="progress mt-3" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="skill-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="skill-icon mb-3 fs-1 text-primary">
                  <i className="bi bi-github"></i>
                </div>
                <h5>Git & GitHub</h5>
                <div className="progress mt-3" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '87%' }}></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="skill-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="skill-icon mb-3 fs-1 text-primary">
                  <i className="bi bi-filetype-css"></i>
                </div>
                <h5>Tailwind CSS</h5>
                <div className="progress mt-3" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="skill-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="skill-icon mb-3 fs-1 text-primary">
                  <i className="bi bi-filetype-tsx"></i>
                </div>
                <h5>Typescript</h5>
                <div className="progress mt-3" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '84%' }}></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="skill-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="skill-icon mb-3 fs-1 text-primary">
                  <i className="bi bi-code-square"></i>
                </div>
                <h5>React</h5>
                <div className="progress mt-3" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
