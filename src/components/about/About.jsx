import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="about_me_image"/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className="about_icon" />
              <h5>Expierence</h5>
              <small>1 Year Learning</small>
            </article>
            <article className='about_card'>
              <FiUsers className="about_icon" />
              <h5>Potential Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className="about_icon" />
              <h5>Pet Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          For the last 6 months I have been intensively learning the basics of programming both in the form of self-study and various courses. The basics of HTML, CSS and JavaScript are learned. Performed many different types of tasks in Javascript, and also worked on the development of website templates. The basics of both Git and GitHub are known, as well as usage of Bootstrap. Applications and samples can be viewed in my GitHub repositories: <a href = "https://github.com/HermanisD">GitHub</a>. My CV as a web-page is also available here: <a href="https://hermanisd.github.io/CV-HTML-CSS-JS/">Curriculum Vitae</a>. I am currently continuing to move towards REACT. I have also started learning Python. Given that theoretical knowledge without practice is not sustainable, I am interested in finding an opportunity to use my knowledge and grow in the direction of a programming specialist. I very much hope and believe that I can be useful to you.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About