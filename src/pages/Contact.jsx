import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-section py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold">Get In Touch</h2>
              <div className="underline mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
              <p className="lead mt-3 text-muted">
                I'd love to hear from you! Whether you have a question or just want to say hi.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="contact-info">
                <h3 className="mb-4">Contact Information</h3>
                <div className="info-item mb-4">
                  <div className="d-flex align-items-start">
                    <div className="icon-box bg-primary text-white rounded-circle p-3 me-3">
                      <i className="bi bi-geo-alt-fill fs-4"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Address</h5>
                      <p className="text-muted mb-0">Ahmedabad, India</p>
                    </div>
                  </div>
                </div>
                <div className="info-item mb-4">
                  <div className="d-flex align-items-start">
                    <div className="icon-box bg-primary text-white rounded-circle p-3 me-3">
                      <i className="bi bi-envelope-fill fs-4"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Email</h5>
                      <p className="text-muted mb-0">ayushmoradiya01@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="info-item mb-4">
                  <div className="d-flex align-items-start">
                    <div className="icon-box bg-primary text-white rounded-circle p-3 me-3">
                      <i className="bi bi-telephone-fill fs-4"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Phone</h5>
                      <p className="text-muted mb-0">+91 8511363083</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="social-links mt-5">
                  <h5 className="mb-3">Follow Me</h5>
                  <div className="d-flex gap-3">
                    <a href="https://github.com/ayush0104200" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aayush-moradiya-07496b284/" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://x.com/Aayush_Moradiya" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/aayush_0104_/" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form bg-light p-4 rounded shadow-sm">
                <h3 className="mb-4">Send Me a Message</h3>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Your Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        placeholder="Project Inquiry"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        rows="5" 
                        placeholder="Your message here..."
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg px-5">
                        <i className="bi bi-send me-2"></i>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold mb-4">Let's Work Together</h2>
              <p className="lead mb-4">
                I'm currently available for freelance work and full-time opportunities. 
                If you have a project that you want to get started, think you need my 
                help with something, or just fancy saying hey, then get in touch.
              </p>
              <a href="https://mail.google.com/mail/?view=cm&to=ayushmoradiya01@gmail.com" className="btn btn-light btn-lg px-5 py-3">
                <i className="bi bi-envelope me-2"></i>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
