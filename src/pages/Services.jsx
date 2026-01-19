import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'UI/UX Design Implementation',
      description: 'Transform design mockups into responsive, pixel-perfect web interfaces with attention to user experience.',
      features: [
        'Responsive design implementation',
        'Cross-browser compatibility',
        'Accessibility (WCAG) compliance',
        'Performance optimization'
      ]
    },
    {
      id: 2,
      icon: '⚛️',
      title: 'React Development',
      description: 'Build scalable and maintainable React applications with modern best practices and clean architecture.',
      features: [
        'Component-based architecture',
        'State management (Redux, Context)',
        'API integration',
        'Testing and debugging'
      ]
    },
    {
      id: 3,
      icon: '📱',
      title: 'Responsive Web Development',
      description: 'Create mobile-first, responsive websites that work seamlessly across all devices and screen sizes.',
      features: [
        'Mobile-first approach',
        'CSS Grid & Flexbox layouts',
        'Media query optimization',
        'Device testing'
      ]
    },
    {
      id: 4,
      icon: '⚡',
      title: 'Web Performance Optimization',
      description: 'Improve your website\'s speed and performance through code optimization and best practices.',
      features: [
        'Code splitting',
        'Image optimization',
        'Caching strategies',
        'Performance audits'
      ]
    },
    {
      id: 5,
      icon: '🔧',
      title: 'Website Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your website running smoothly and up-to-date.',
      features: [
        'Bug fixes',
        'Feature updates',
        'Security patches',
        '24/7 support'
      ]
    },
    {
      id: 6,
      icon: '📊',
      title: 'Web Analytics & SEO',
      description: 'Implement analytics and optimize your website for search engines to increase visibility.',
      features: [
        'Google Analytics setup',
        'SEO optimization',
        'Meta tag management',
        'Performance tracking'
      ]
    }
  ]

  const packages = [
    {
      id: 1,
      name: 'Starter',
      price: '$499',
      duration: 'one-time',
      description: 'Perfect for small projects and landing pages',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO',
        '2 revision rounds',
        '30 days support'
      ],
      color: 'secondary'
    },
    {
      id: 2,
      name: 'Professional',
      price: '$1,299',
      duration: 'one-time',
      description: 'Ideal for small to medium businesses',
      features: [
        'Up to 15 pages',
        'Advanced functionality',
        'SEO optimization',
        'Unlimited revisions',
        '90 days support',
        'Analytics setup'
      ],
      color: 'primary',
      featured: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      duration: 'contact us',
      description: 'For large-scale projects and applications',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced features',
        'Ongoing support',
        'Dedicated developer',
        'Quarterly reviews'
      ],
      color: 'success'
    }
  ]

  return (
    <div className="services-page">
      {/* Services Section */}
      <section className="services-section py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold">Services I Offer</h2>
              <div className="underline mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
              <p className="lead mt-3 text-muted">
                Comprehensive web development and design services tailored to your needs.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 service-card">
                  <div className="card-body">
                    <div className="service-icon mb-3" style={{ fontSize: '3rem' }}>
                      {service.icon}
                    </div>
                    <h5 className="card-title mb-3">{service.title}</h5>
                    <p className="card-text text-muted mb-4">{service.description}</p>
                    <ul className="list-unstyled">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-muted small mb-2">
                          <i className="bi bi-check-circle text-primary me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold">Pricing Packages</h2>
              <div className="underline mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
              <p className="lead mt-3 text-muted">
                Choose the perfect package for your project.
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {packages.map((pkg) => (
              <div key={pkg.id} className="col-lg-4 col-md-6">
                <div className={`card border-0 shadow-sm h-100 ${pkg.featured ? 'border-3' : ''}`} 
                     style={pkg.featured ? { borderColor: 'var(--bs-primary)' } : {}}>
                  {pkg.featured && (
                    <div className="text-center bg-primary text-white py-2">
                      <span className="badge bg-light text-primary">POPULAR</span>
                    </div>
                  )}
                  <div className="card-body text-center">
                    <h5 className="card-title mb-3">{pkg.name}</h5>
                    <div className="mb-3">
                      <span className="display-5 fw-bold">{pkg.price}</span>
                      <small className="text-muted d-block">{pkg.duration}</small>
                    </div>
                    <p className="text-muted small mb-4">{pkg.description}</p>
                    <Link 
                      to="/contact" 
                      className={`btn btn-${pkg.color} mb-4`}
                    >
                      Get Started
                    </Link>
                    <ul className="list-unstyled">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="text-muted small mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="text-muted mb-3">Don't see what you need?</p>
              <Link to="/contact" className="btn btn-outline-primary">
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
