import React from 'react'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-section py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold">About Me</h2>
              <div className="underline mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <p className="lead">
                I'm a front-end developer who crafts fast, responsive, and accessible interfaces.
                I obsess over clean UI, intuitive interactions, and performance that feels effortless.
              </p>
              <p>
                My journey started with a curiosity for how pixels move on the web, and it grew into
                a career focused on translating designs into reliable, maintainable code that works on
                every device.
              </p>
              <p className="mt-4">
                I specialize in modern front-end tools and patterns, keeping design systems consistent
                while experimenting with tasteful motion and micro-interactions. The goal: interfaces
                that look great and feel natural.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center p-4">
                      <div className="display-4 text-primary mb-3">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <h5 className="card-title">Clean Code</h5>
                      <p className="card-text text-muted">
                        Writing maintainable and efficient code
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center p-4">
                      <div className="display-4 text-primary mb-3">
                        <i className="bi bi-phone"></i>
                      </div>
                      <h5 className="card-title">Responsive</h5>
                      <p className="card-text text-muted">
                        Mobile-first design approach
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center p-4">
                      <div className="display-4 text-primary mb-3">
                        <i className="bi bi-lightning"></i>
                      </div>
                      <h5 className="card-title">Fast</h5>
                      <p className="card-text text-muted">
                        Optimized for performance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center p-4">
                      <div className="display-4 text-primary mb-3">
                        <i className="bi bi-palette"></i>
                      </div>
                      <h5 className="card-title">Creative</h5>
                      <p className="card-text text-muted">
                        Innovative design solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Experience & Education</h2>
              <div className="underline mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h4 className="card-title mb-3">
                    <i className="bi bi-briefcase text-primary me-2"></i>
                    Work Experience
                  </h4>
                  <div className="timeline">
                    <div className="mb-4">
                      <h5>Front-End Developer</h5>
                      <p className="text-muted">NR CREW | 2026 - Present</p>
                      <p>Built responsive UI with React and Bootstrap, improving performance and accessibility.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h4 className="card-title mb-3">
                    <i className="bi bi-mortarboard text-primary me-2"></i>
                    Education
                  </h4>
                  <div className="timeline">
                    <div className="mb-4">
                      <h5>Bachelor's in Information Technology</h5>
                      <p className="text-muted">Silver Oak University | 2026 - present</p>
                      <p>focuse on front-end web development.</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
