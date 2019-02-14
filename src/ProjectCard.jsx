import React from 'react'


function ProjectCard(props) {
    let project = props.project
    return (
        <div className='card m-4 bg-light shadow-lg' style={{ width: '20rem', height: '22rem' }}>
            <img style={{ width: '20rem', height: '10rem' }} src={project.image} alt="" />
            <div className='card-body'>
                <h3 className='card-title pb-2'>{project.name}</h3>
                <div className='d-flex pb-4'>
                    <a href={project.github} target='_blank'>
                        <img className='pr-4' style={{ height: '30px' }} src="https://image.flaticon.com/icons/png/512/37/37318.png" alt="" />
                    </a>
                    <a href={project.website} target='_blank' style={ project.website ? {} : {display: 'none'}}>
                        <img className='pr-4'style={{ height: '30px' }} src="https://openclipart.org/image/300px/svg_to_png/216096/WWW-Icon.png" alt="" />
                    </a>
                </div>
                <h5>Techonologies used:</h5>
                <div className='d-flex'>
                    <img className='pr-4' style={{ height: '30px' }} src={project.technology1} alt="" />
                    <img className='pr-4' style={{ height: '30px' }} src={project.technology2} alt="" />
                    <img className='pr-4' style={{ height: '30px' }} src={project.technology3} alt="" />
                    <img className='pr-4' style={{ height: '30px' }} src={project.technology4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
