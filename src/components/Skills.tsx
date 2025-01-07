import React from 'react'
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        {/* first colum: heading and paragraph */}
        <div data-aos="zoom-in-up" className='skills-left'>
          <h2 className='skills-heading'>Technologies I work with</h2>
          <p className='skills-text'>
            I have a solid foundationin web development, specializing in HTML, CSS, and JavaScript.
            My experience extands to using frameworks like React and Next.js to create dynamic and 
            user-frindlyapplication. I'm also proficient in Tailwind CSS for afficient styling and
            design. With a passion for learning, I stay updated on the latest technologies to
            enhance my skill set and contribute effectively to projects.
            </p>
        </div>
        {/* second colum: skills */}
        <div className='skills-right'>
          <div className='skills-icon-grid'>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              </div>
              <div className='skills-space'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills