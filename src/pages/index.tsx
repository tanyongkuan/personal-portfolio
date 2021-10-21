import * as React from 'react';
import Layout from '../component/Layout';

import pokemonTinder from '/static/images/pokemon-tinder.png';
import reactLogo from '/static/images/react-logo.png';
import vuejsLogo from '/static/images/vuejs-logo.png';
import cssLogo from '/static/images/css-logo.png';
import secureage from '/static/images/companies/secureage.png';
import dsta from '/static/images/companies/dsta.png';
import crimsonlogic from '/static/images/companies/crimsonlogic.png';

export default function IndexPage() {
	return (
		<Layout>
			<section className="intro">
				<h1 className="position">Software Engineer</h1>
				<div className="caption">
					I enjoy solving complex technical problems while delivering the best
					user experience.
				</div>
				<span className="yongkuanIcon"></span>
			</section>
			<section className="about">
				<h1>Hi, I'm Yong Kuan!</h1>
				<p>
					I have graduated from Nanyang Technological University with a Computer
					Science degree. Being a software engineer myself, I enjoy delivering
					solutions that tackles business challenges. My work focus on
					implementing frontend web applications with the latest technologies.
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
									<a href="https://www.gatsbyjs.com/">GatsbyJS</a>
									<a href="https://nextjs.org/">NextJS</a>
									<a href="https://mui.com/">Material UI</a>
								</div>
							</div>
							<div className="framework-content">
								<img src={vuejsLogo} className="framework-logo" alt="vueLogo" />
								<div className="framework-name">
									<a href="https://quasar.dev/">Quasar</a>
								</div>
							</div>
							<div className="framework-content">
								<img src={cssLogo} className="framework-logo" alt="cssLogo" />
								<div className="framework-name">
									<a href="https://styled-components.com/">styled-components</a>
									<a href="https://tailwindcss.com/">tailwindcss</a>
								</div>
							</div>
						</div>
					</div>
					<div className="skillset-content">
						<h2 className="title">Development Tools</h2>
						<div id="devtools">
							<ul>
								<li>Visual Studio Code</li>
								<li>Github</li>
								<li>Prettier</li>
								<li>EsLint</li>
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
						<img src={pokemonTinder} alt="pokemonTinder" />
						<div className="portfolio-overlay">
							<h2>Pokemon Tinder</h2>
							<ul>
								<li>NextJS</li>
								<li>Typescript</li>
								<li>Material UI</li>
							</ul>
							<div>
								<a
									href="https://github.com/tanyongkuan/pokemon-tinder"
									target="_blank"
								>
									Github
								</a>
								<a href="https://pokemon-tinder.netlify.app/" target="_blank">
									Visit Website
								</a>
							</div>
						</div>
					</div>
					<div className="portfolio-item"></div>
				</div>
			</section>

			<section className="experience">
				<p>I'm glad to have work with these companies</p>
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
