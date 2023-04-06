import "./index.css";

import { Component } from "react";

import Portfolio from "../Portfolio";
import Sphere from "../Sphere";
import Contact from "../Contact";
import MyBlog from "../MyBlog";
import Follow from "../Follow";

import Header from "../Header";

class Home extends Component {
  isPortfolioClicked = () => {
    document.getElementById("portfolio").scrollIntoView();
  };
  isContactClicked = () => {
    document.getElementById("contact").scrollIntoView();
  };
  render() {
    return (
      <>
        <div class="bg-container">
          <Header
            isPortfolioClicked={this.isPortfolioClicked}
            isContactClicked={this.isContactClicked}
          />
          <section className="section-1">
            <h1 className="main-head">
              Hi,
              <br />
              I'm Kousik <br />
              Web developer
            </h1>
            <p className="main-description">Frontend developer | UI designer</p>
            <button
              className="button"
              type="button"
              onClick={this.isContactClicked}
            >
              Contact Me
            </button>
          </section>
        </div>
        <section className="section-2">
          <div className="about-container">
            <h1 className="sub-head">About</h1>
            <p className="description">
              Multi-Talented Professional in Architecture, UI/UX Design, and
              Full-Stack Development | Committed to Continuous Learning and
              Innovation
            </p>
            <a
              href="https://drive.google.com/file/d/1JMVihKI6ez454IqChG-j2sycHTDbzbiI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button" type="button">
                Download My Resume
              </button>
            </a>
          </div>
          <div class="my-skill-container">
            <div className="skill-text">
              <h1 className="sub-head">My Skills</h1>
              <p className="description">
                I am an entry-level designer and developer with a passion for
                creating beautiful and functional websites.I am proficient in
                HTML, CSS, JavaScript, React JS, Python, and design tools like
                Adobe XD and Figma.I am a fast learner, always eager to improve,
                and excited to contribute to a team that shares my passion for
                web development.
              </p>
            </div>
            <Sphere />
          </div>
          <div className="home-blog-container">
            <MyBlog />
            <br />
            <br />
            <hr />
            <div id="portfolio">
              <Portfolio />
            </div>
            <br />
            <br />
            <hr />
            <div className="code-snippets">
              <h1 className="sub-head">Code Snippets</h1>
              <p className="description">
                To see the components that I've created, please visit my CodePen
                page by clicking the button.
              </p>
              <a
                href="https://codepen.io/Ramachandruni-Kousik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button codeButton" type="button">
                  Link to Codepen
                </button>
              </a>
            </div>
          </div>
          <div className="contact-container" id="contact">
            <div>
              <Contact />
            </div>
          </div>
          <div className="follow-me-section">
            <Follow />
          </div>
        </section>
      </>
    );
  }
}

export default Home;
