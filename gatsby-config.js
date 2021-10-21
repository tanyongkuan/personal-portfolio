module.exports = {
	siteMetadata: {
		//siteUrl: 'https://www.yourdomain.tld',
		title: 'Yong Kuan | Software Engineer',
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: 'static/images/logo.png',
			},
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true, // defaults to false
				jsxPragma: `jsx`, // defaults to "React"
				allExtensions: true, // defaults to false
			},
		},
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-sass',
	],
};
