import React, { Component } from 'react'
import axios from 'axios';
import ProjectCard from './ProjectCard';

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
        debugger;
        return (
            <div>
                {projectList}
            </div>
        )
    }
}
