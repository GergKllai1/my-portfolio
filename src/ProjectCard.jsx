import React from 'react'


function ProjectCard(props) {
    let project = props.project
    return (
        <div className='card m-4 bg-light' style={{width: '18rem', height:'18rem'}}>
            <img style={{width: '18rem', height:'10rem'}} src={project.image} alt=""/>
            <div className='card-body'>
                <h4 className='card-title'>{project.name}</h4>
            </div>
        </div>
    )
}

export default ProjectCard
