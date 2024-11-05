// MyProfile.js
import React, { Component } from 'react';
import './MyProfile.css';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  toggleReadMore = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  render() {
    const { showMore } = this.state;

    return (
      <div className="profile-container">
        <img src="Profilepic.jpg" alt="Profile" className="profile-picture" />
        <h1>Pavan Kumar</h1>

        <p className="bio">
          {showMore
            ? "As a dedicated software engineer with a solid background in information technology, I have had the opportunity to work with industry-leading companies and hone my technical skills. Currently, I am a Senior Software Engineer at IBM, a role I've held since March 2020, where I work on developing innovative solutions and enhancing system efficiency My experience also spans cloud platforms, particularly AWS and Azure. Throughout my career, I’ve been committed to building scalable, efficient software solutions that drive organizational success.."
            : "Experienced Software Developer passionate about leveraging technology to solve complex problems and enhance system functionality...."}
        </p>
        <button onClick={this.toggleReadMore} className="toggle-button">
          {showMore ? 'Show Less' : 'Read More'}
        </button>

        <h2>Highlighted Projects</h2>
        <div className="projects">
          <div className="project">
            <img src="react.png" alt="React App" />
            <h3>React App</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.</p>
            <a href="#!" className="project-link">Project Link</a>
          </div>
          <div className="project">
            <img src="api.png" alt="API" />
            <h3>API</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.</p>
            <a href="#!" className="project-link">Project Link</a>
          </div>
          <div className="project">
            <img src="OS.png" alt="Operating Systems" />
            <h3>Operating Systems</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.</p>
            <a href="#!" className="project-link">Project Link</a>
          </div>
        </div>

        <h2>Connect with me!!!</h2>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="twitter.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    );
  }
}

export default MyProfile;
