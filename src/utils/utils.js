/** Rendering specific component according to location */

import { Home } from "../pages";

export const renderComponent = (location) => {
	switch (location) {
		case "/": 
			return <Home />;
        // case "/bois": 
        //     return <Bois />
		default:
            return <Home />
	}
}