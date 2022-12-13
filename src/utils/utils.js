/** Rendering specific component according to location */

import { Biowaste, Home } from "../pages";

export const renderComponent = (location) => {
	switch (location) {
		case "/":
			return <Home />;
        case "/dechets-alimentaire":
            return <Biowaste />
		default:
            return <Home />
	}
}

/** Function to get random number */

export const random = (max) => Math.floor(Math.random() * max);

/** Function to get random number different each time */

export const randomNumber = (number, max) => {
	console.log('number: ', number);
	const n = random(max);
	console.log('n: ', n);

	if (n === number) randomNumber(number, max);
	console.log('number: ', number);
	return n;
}
