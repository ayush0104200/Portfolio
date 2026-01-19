import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Tech Innovations',
      testimonial: 'Aayush delivered exceptional work on our React project. His attention to detail and problem-solving skills were outstanding. Highly recommended!',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Digital Solutions',
      testimonial: 'Working with Aayush was a game-changer for our team. He not only delivered quality code but also mentored our junior developers effectively.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      company: 'Creative Studio',
      testimonial: 'Aayush\'s ability to translate designs into responsive, functional interfaces is impressive. Great communication and collaborative spirit!',
      avatar: '👩‍🎨',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Startup Founder',
      company: 'Tech Startup XYZ',
      testimonial: 'From concept to deployment, Aayush handled everything professionally. The website he built increased our conversion rate by 35%.',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Project Manager',
      company: 'Enterprise Co.',
      testimonial: 'Reliable, skilled, and always willing to go the extra mile. Aayush is a valuable addition to any development team.',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Lead Developer',
      company: 'Software House',
      testimonial: 'Great frontend skills and a collaborative approach. Aayush brings fresh ideas and maintains high code quality standards.',
      avatar: '👨‍💻',
      rating: 5
    }
  ]

  return (
    <div className="testimonials-page">
      <section className="testimonials-section py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold">What Clients Say</h2>
              <div className="underline mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
              <p className="lead mt-3 text-muted">
                Testimonials from clients and colleagues I've worked with.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 testimonial-card">
                  <div className="card-body d-flex flex-column">
                    <div className="mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning"></i>
                      ))}
                    </div>
                    <p className="card-text mb-4 flex-grow-1 text-muted">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="d-flex align-items-center mt-auto">
                      <div className="me-3" style={{ fontSize: '2.5rem' }}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                        <small className="text-muted">
                          {testimonial.role} at {testimonial.company}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="text-muted mb-3">Working on amazing projects together</p>
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                <div className="text-center">
                  <div className="display-6 fw-bold text-primary">50+</div>
                  <small className="text-muted">Happy Clients</small>
                </div>
                <div className="text-center">
                  <div className="display-6 fw-bold text-primary">100+</div>
                  <small className="text-muted">Projects Completed</small>
                </div>
                <div className="text-center">
                  <div className="display-6 fw-bold text-primary">5★</div>
                  <small className="text-muted">Average Rating</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
