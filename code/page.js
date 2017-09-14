import PropTypes from 'prop-types';
import React from 'react';

const Page = ( page ) => (
	<html>
	<head>
		<title>{ page.title }</title>
		<meta charSet="utf-8" />
		<meta http-equiv="x-ua-compatible" content="ie=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<link rel="stylesheet" href={ `/assets/css/site.css` } />
		{
			page.stylesheet != undefined
				? ( <link rel="stylesheet" href={ `/assets/css/${ page.stylesheet }.css` } /> )
				: null
		}
	</head>
	<body>
		<div className="top">
			<header role="banner">{ page.header }</header>
			<main>{ page.main }</main>
		</div>

		<footer>{ page.footer }</footer>
		{
			page.script != undefined
				? ( <script rel="stylesheet" href={ `/assets/js/${ page.script }.js` } /> )
				: null
		}
	</body>
	</html>
);

Page.propTypes = {
	title: PropTypes.string.isRequired,
	main: PropTypes.node.isRequired,
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
