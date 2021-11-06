import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div>
			<h1>Short Stories</h1>
			<p>Welcome to Short Stories.</p>
			<p>Click <Link to="/stories">here</Link> to see the stories.</p>
		</div>
	)
}
export default LandingPage;