import React from 'react';

import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<p>@Copyright - App created by Carlos Robles</p>
			<div className='social-medias'>
				<a href='/'>
					<i class='fab fa-twitter-square'></i>
				</a>
				<a href='/'>
					<i class='fab fa-github'></i>
				</a>
				<a href='/'>
					<i class='fab fa-linkedin'></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
