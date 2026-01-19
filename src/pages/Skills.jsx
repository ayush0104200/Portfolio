import React from 'react'

const Skills = () => {
  const frontend = [
    { name: 'HTML', icon: 'bi bi-filetype-html', level: '90%' },
    { name: 'CSS', icon: 'bi bi-filetype-css', level: '85%' },
    { name: 'JavaScript', icon: 'bi bi-filetype-js', level: '88%' },
    { name: 'React.js', icon: 'bi bi-code-square', level: '90%' },
  ]

  const tools = [
    { name: 'Git', icon: 'bi bi-git', level: '85%' },
    { name: 'GitHub', icon: 'bi bi-github', level: '87%' },
  ]

  const learning = [
    { name: 'TypeScript', icon: 'bi bi-filetype-tsx', level: '70%' },
    { name: 'APIs', icon: 'bi bi-diagram-3', level: '72%' },
  ]

  const renderGroup = (title, skills) => (
    <div className="col-12 col-lg-4">
      <div className="mb-4">
        <h4 className="fw-bold text-center mb-3">{title}</h4>
        <div className="row g-3">
          {skills.map(({ name, icon, level }) => (
            <div className="col-12" key={name}>
              <div className="skill-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="skill-icon mb-2 fs-1 text-primary">
                  <i className={icon}></i>
                </div>
                <h5 className="mb-2">{name}</h5>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: level }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

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
            {renderGroup('Frontend', frontend)}
            {renderGroup('Tools', tools)}
            {renderGroup('Currently Learning', learning)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
