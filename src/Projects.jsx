import React, { Component } from 'react'
import axios from 'axios';

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
                console.log(response)
                this.setState({
                    projects: response.data
                });
            });
    }
    render() {
        return (
            <div>
                Projects
            </div>
        )
    }
}
