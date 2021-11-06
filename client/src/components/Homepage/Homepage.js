import React, { useState } from 'react';
import LandingPage from './LandingPage/LandingPage';
import UserPage from './UserPage/UserPage';

const Homepage = () => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	if (isUserLoggedIn) {
		return (
			<UserPage />
		)
	} else {
		return (
			<LandingPage />
		)
	}
}

export default Homepage;