/** Rendering specific component according to location */

import {
	Home,
	Settings,
	Biowaste,
	Bottle,
} from "../pages";

export const renderComponent = (location) => {
	switch (location) {
		case "/":
			return <Home />;
		case "/settings":
			return <Settings />
        case "/dechets-alimentaire":
            return <Biowaste />;
		case "/bouteilles":
			return <Bottle />;

		default:
            return <Home />;
	}
}

/** Function to get random number */

export const random = (max) => Math.floor(Math.random() * max);

/** Function to get random number different each time */

export const randomNumber = (number, max) => {
	const n = random(max);

	if (n === number) randomNumber(number, max);
	return n;
}
