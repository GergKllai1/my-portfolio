import React, { Component } from 'react'
import axios from 'axios';
import ProjectCard from './ProjectCard';
import { NavLink } from 'react-router-dom'

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get('projects.json')
            .then(response => {
                console.log(response.data)
                this.setState({
                    projects: response.data
                });
            });
    }
    render() {
        let projectList = this.state.projects.map(project => {
            return (
                <ProjectCard project={project} />
            )
        })
        return (
            <div className='main page h-auto'>
                <div className='container'>
                    <div className='row'>
                        {projectList}
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-around pb-5'>
                        <NavLink
                        className='btn btn-outline-light btn-lg'
                        to='/'>
                            Projects
                        </NavLink>
                        <NavLink
                        className='btn btn-outline-light btn-lg'
                        to='/about'>
                            About Me
                        </NavLink>
                    </div>
            </div>

        )
    }
}
