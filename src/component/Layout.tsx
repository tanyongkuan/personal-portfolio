import React from 'react';
import { Helmet } from 'react-helmet';
import { useRef } from 'react';

import icon from '/static/images/logo.png';

export default function Layout(prop: {
	children: JSX.Element | JSX.Element[];
}) {
	const scrollToTopButton = useRef<HTMLAnchorElement>(null);
	const navMenu = useRef<HTMLDivElement>(null);

	const scrollFunc = () => {
		let y = window.scrollY;

		if (y > 0) {
			scrollToTopButton.current.className = 'top-link show';
		} else {
			scrollToTopButton.current.className = 'top-link hide';
		}
	};

	const scrollToTop = () => {
		const c = document.documentElement.scrollTop || document.body.scrollTop;

		if (c > 0) {
			window.requestAnimationFrame(scrollToTop);
			window.scrollTo(0, c - c / 10);
		}
	};

	const scrollTop = function (e) {
		e.preventDefault();
		scrollToTop();
	};

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', scrollFunc);
	}

	const showMenu = () => {
		if (navMenu.current.style.display === 'block') {
			navMenu.current.style.display = 'none';
		} else {
			navMenu.current.style.display = 'block';
		}
	};

	return (
		<main>
			<Helmet>
				<html lang="en" />
				<meta charSet="utf-8" />
				<meta name="description" content="yong kuan portfolio" />
				<meta
					name="keyword"
					content="portfolio, typescript, software engineer"
				/>
				<title>Yong Kuan | Software Engineer</title>
			</Helmet>
			<nav role="navigation" className="navBar">
				<div className="nav-logo">
					<a href="/" aria-label="home">
						<img src={icon} className="icon" alt="logo" height="48" />
					</a>
					<a className="menu" onClick={showMenu}>
						<span></span>
						<span></span>
						<span></span>
					</a>
				</div>
				<div id="nav-menu" ref={navMenu}>
					<a className="nav-menu-item" href="/resume">
						Resume
					</a>
				</div>
			</nav>
			{prop.children}
			<footer>
				<div className="social-media">
					<a
						href="https://www.linkedin.com/in/tanyongkuan/"
						aria-label="LinkedIn"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							viewBox="0 0 24 24"
						>
							<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
						</svg>
					</a>
					<a href="https://github.com/tanyongkuan" aria-label="GitHub">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							viewBox="0 0 24 24"
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
						</svg>
					</a>
					<a href="mailto:yongkuan94@gmail.com" aria-label="Email">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="50"
							viewBox="0 0 24 24"
							width="50"
							fill="#000000"
						>
							<path d="M0 0h24v24H0V0z" fill="none" />
							<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
						</svg>
					</a>
				</div>
				<p>Copyright © {new Date().getFullYear()}</p>
				<p>
					Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>. Hosted on{' '}
					<a href="https://www.netlify.com/">Netlify</a>
				</p>
			</footer>
			<a
				className="top-link hide"
				href="#"
				ref={scrollToTopButton}
				onClick={scrollTop}
				aria-label="scrollTop"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
					<path d="M12 6H0l6-6z" />
				</svg>
				{/*<span className="screen-reader-text">Back to top</span>*/}
			</a>
		</main>
	);
}
