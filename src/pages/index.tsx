import * as React from "react";
import Layout from "../component/Layout";

import pokemonTinder from "/static/images/pokemon-tinder.png";
import wordDictionary from "/static/images/word-dictionary.png";
import powerofnumbers from "/static/images/power-of-numbers.png";
import styleverse from "/static/images/styleverse.png";
import managementPortal from "/static/images/management-portal.png";
import reactLogo from "/static/images/react-logo.png";
import vuejsLogo from "/static/images/vuejs-logo.png";
import cssLogo from "/static/images/css-logo.png";
import secureage from "/static/images/companies/secureage.png";
import dsta from "/static/images/companies/dsta.png";
import crimsonlogic from "/static/images/companies/crimsonlogic.png";

export default function IndexPage() {
  return (
    <Layout>
      <section className="intro">
        <h1 className="position">Senior Frontend Software Engineer</h1>
        <div className="caption">
          Passionate about building high-performance, scalable user interfaces.
        </div>
        <span className="yongkuanIcon"></span>
      </section>
      <section className="about">
        <h1>Hi, I'm Yong Kuan!</h1>
        <p>
          I'm a Senior Frontend Software Engineer with expertise in TypeScript,
          React, Vue, and Tailwind CSS. I specialize in creating scalable UIs
          for cybersecurity and enterprise clients, with a focus on optimizing
          frontend architecture and enhancing user experience through close
          collaboration with UX designers.
        </p>
      </section>
      <section className="skillset">
        <div className="skillset-container">
          <div className="skillset-content">
            <h2 className="title">Language I speak</h2>
            <p>HTML, Typescript, CSS, SCSS</p>
          </div>
          <div className="skillset-content">
            <h2 className="title">Framework I use</h2>
            <div className="framework">
              <div className="framework-content">
                <img
                  src={reactLogo}
                  className="framework-logo"
                  alt="reactLogo"
                />
                <div className="framework-name">
                  <a href="https://nextjs.org/" target="_blank" rel="noopener">
                    NextJS
                  </a>
                  <a
                    href="https://www.gatsbyjs.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    GatsbyJS
                  </a>
                  <a href="https://mui.com/" target="_blank" rel="noopener">
                    Material UI
                  </a>
                </div>
              </div>
              <div className="framework-content">
                <img src={vuejsLogo} className="framework-logo" alt="vueLogo" />
                <div className="framework-name">
                  <a href="https://quasar.dev/" target="_blank" rel="noopener">
                    Quasar
                  </a>
                </div>
              </div>
              <div className="framework-content">
                <img src={cssLogo} className="framework-logo" alt="cssLogo" />
                <div className="framework-name">
                  <a
                    href="https://styled-components.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    styled-components
                  </a>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    Tailwind CSS
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="skillset-content">
            <h2 className="title">Development Tools</h2>
            <div id="devtools">
              <ul>
                <li>Cursor</li>
                <li>Visual Studio Code</li>
                <li>Claude</li>
                <li>ChatGPT</li>
                <li>Github</li>
                <li>TortoiseSVN</li>
                <li>Prettier</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1>Portfolio</h1>
        <p>Check out my latest web development portfolio projects</p>
        <div className="portfolio">
          <div className="portfolio-item">
            <img src={powerofnumbers} alt="powerofnumbers" />
            <div className="portfolio-overlay">
              <h2>Power of Numbers</h2>
              <ul>
                <li>NextJS</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
                <li>shadcn/ui</li>
                <li>Drizzle</li>
                <li>tRPC</li>
              </ul>
              <div>
                <a
                  href="https://github.com/tanyongkuan/power-of-numbers"
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </a>
                <a
                  href="https://power-of-numbers.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={styleverse} alt="styleverse" />
            <div className="portfolio-overlay">
              <h2>Styleverse</h2>
              <ul>
                <li>VueJS</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
              </ul>
              <div>
                <a
                  href="https://github.com/tanyongkuan/styleverse"
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </a>
                <a
                  href="https://styleverse.netlify.app/"
                  target="_blank"
                  rel="noopener"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio-item">
            <img src={pokemonTinder} alt="pokemonTinder" />
            <div className="portfolio-overlay">
              <h2>Pokemon Tinder</h2>
              <ul>
                <li>NextJS</li>
                <li>Typescript</li>
                <li>Material UI</li>
                <li>styled-components</li>
              </ul>
              <div>
                <a
                  href="https://github.com/tanyongkuan/pokemon-tinder"
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </a>
                <a
                  href="https://pokemon-tinder.netlify.app/"
                  target="_blank"
                  rel="noopener"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={managementPortal} alt="management-portal" />
            <div className="portfolio-overlay">
              <h2>Management Portal</h2>
              <ul>
                <li>VueJS</li>
                <li>Quasar</li>
                <li>Typescript</li>
              </ul>
              <div>
                {/* <a
									href="https://github.com/tanyongkuan/styleverse"
									target="_blank"
									rel="noopener"
								>
									Github
								</a> */}
                <a
                  href="https://central.secureage.com/login"
                  target="_blank"
                  rel="noopener"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={wordDictionary} alt="wordDictionary" />
            <div className="portfolio-overlay">
              <h2>Word Dictionary</h2>
              <ul>
                <li>React</li>
                <li>Typescript</li>
                <li>SCSS</li>
              </ul>
              <div>
                <a
                  href="https://github.com/tanyongkuan/word-dictionary"
                  target="_blank"
                  rel="noopener"
                >
                  Github
                </a>
                <a
                  href="https://yk-word-dictionary.netlify.app/"
                  target="_blank"
                  rel="noopener"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <p>I'm proud to have worked with these companies</p>
        <div className="companies">
          <div className="company-item">
            <img src={secureage} alt="secureageLogo" height="120" />
          </div>
          <div className="company-item">
            <img src={dsta} alt="dstaLogo" height="120" />
          </div>
          <div className="company-item">
            <img src={crimsonlogic} alt="crimsonLogicLogo" height="120" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
