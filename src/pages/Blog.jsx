import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'React',
      link: '#'
    },
    {
      id: 2,
      title: 'Responsive Web Design Best Practices',
      excerpt: 'Discover the modern techniques for creating responsive designs that work on all devices.',
      date: 'January 10, 2025',
      readTime: '7 min read',
      category: 'CSS',
      link: '#'
    },
    {
      id: 3,
      title: 'Performance Optimization Tips',
      excerpt: 'Explore practical strategies to improve your web application performance and user experience.',
      date: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Performance',
      link: '#'
    },
    {
      id: 4,
      title: 'JavaScript ES6 Features You Should Know',
      excerpt: 'Master the modern JavaScript features that make your code cleaner and more efficient.',
      date: 'December 28, 2024',
      readTime: '8 min read',
      category: 'JavaScript',
      link: '#'
    }
  ]

  return (
    <div className="blog-page">
      <section className="blog-section py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold">My Blog</h2>
              <div className="underline mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
              <p className="lead mt-3 text-muted">
                Insights, tips, and knowledge from my journey in web development.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {articles.map((article) => (
              <div key={article.id} className="col-lg-6 col-md-12">
                <article className="card border-0 shadow-sm h-100 blog-card transition-shadow">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-primary">{article.category}</span>
                      <small className="text-muted">{article.readTime}</small>
                    </div>
                    <h4 className="card-title mb-3 flex-grow-1">
                      <a href={article.link} className="text-decoration-none text-dark">
                        {article.title}
                      </a>
                    </h4>
                    <p className="card-text text-muted mb-3">{article.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <small className="text-muted">{article.date}</small>
                      <a href={article.link} className="btn btn-sm btn-outline-primary">
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="text-muted mb-3">More articles coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
