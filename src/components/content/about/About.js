import React, { Component } from 'react';
import image2 from '../../../data/img/image2.jpg';
import './About.css'

class About extends Component {

  render() {
    return (
      <div className="about">
        <div className="image-container">
          <div className="image" style={{"backgroundImage": `url(${image2})`}}></div>
        </div>
        <div className="about-text">
          <p>Hi! My name is Joshua. I am a software engineer based in New York City. My first exposure to coding was a C++ class in college. About two years ago, I decided to go further and taught myself Javascript, HTML, and CSS and after building my first app, I knew that this was what I wanted to do and in May of 2019, I embarked on my journey with Flatiron School's Full Stack Web Development Bootcamp Prep course, where I strengthened my Javascript skills as well as having learned React, Ruby, Rails, and SQL. Since graduating in August of 2019, I have continued to build on these foundations. I enjoy puzzle-solving and finding solutions to unique problems and I am eager to make my impact on the world!</p>
        </div>
      </div>
    );
  }

}

export default About;
