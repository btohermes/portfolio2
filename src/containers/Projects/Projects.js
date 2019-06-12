import React, { Component } from 'react';

import classes from './Projects.css';

import Project from '../../components/Project/Project';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import axios_firebase from '../../axios-firebase';

class Projects extends Component {
  state = {
    projects: [1, 2, 3]
  };

  componentDidMount() {
    axios_firebase
      .get('https://myportfolio-f671e.firebaseio.com/Project.json')
      .then(response => {
        const LoadedProjects = Object.keys(response.data).map(key => {
          return { ...response.data[key] };
        });

        //Logic that get's the image
        this.setState({ projects: LoadedProjects });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id='projects'>
        <SectionTitle Title='Projects' />
        <div className={classes} />
        {this.state.projects.map(project => {
          console.log(project);
          return (
            <Project
              key={Math.random()}
              title={project.title}
              description={project.description}
              img={project.image}
            />
          );
        })}
      </div>
    );
  }
}
export default Projects;
