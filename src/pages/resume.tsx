import React from 'react';
import Layout from '../component/Layout';

import resumeImg from '/static/yongkuan_resume.jpg';
import resumePDF from '/static/yongkuan_resume.pdf';

export default function resume() {
	return (
		<Layout>
			<div id="container">
				<section className="resume">
					<img src={resumeImg} alt="resume" width="930" />
					<div>
						<a
							className="button"
							href={resumePDF}
							target="_blank"
							rel="noopener"
						>
							Download Resume
						</a>
					</div>
				</section>
			</div>
		</Layout>
	);
}
