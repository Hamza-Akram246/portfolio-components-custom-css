import React from 'react'
import Heading from './Heading'
import Card from './Card'
import '../app/styles/projects.css';

const data = [
    {
        id: 0,
        title: "Todo App",
        img: "/project1copy.png",
        tags: ["React", "Node", "CSS", "Typescript"]
    },
    {
        id: 1,
        title: "Facebook page",
        img: "/project2copy.png",
        tags: ["React", "Node", "CSS", "Typescript"]
    },
    {
        id: 2,
        title: "Countdown Timer",
        img: "/project3copy.png",
        tags: ["React", "Node", "CSS", "Typescript"]
    },
]

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <Heading title='My Projects'/>
      <div className='projects-grid projects-grid-xl  projects-grid-md-2 projects-grid-lg-3 projects-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
      
    </div>
  )
}

export default Projects