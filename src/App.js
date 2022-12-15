import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { renderComponent } from "./utils/utils";

import { Logo, Lottie } from "./components";

import LogoURL from "./assets/images/logo.png";

import './App.css';

const App = () => {
    const location = useLocation();

    const [ showLoader, setShowLoader ] = useState(true);

	useEffect(() => {
		const initConnexion = async () => {
			await fetch('https://www.nyckel.com/connect/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				// TODO : Move before push inside .env
				// body: `client_id=${process.env.REACT_APP_NYCKEL_ID}&client_secret=${process.env.REACT_APP_NYCKEL_SECRET}&grant_type=client_credentials`
				body: "client_id=i0uvres19a8lbcswhoz50jd2j11b46ry&client_secret=jftpqfgeh7xdapcaukolt80znrbpdgw2j91vi2627losmzsuoqhjh55beu2y3q00&grant_type=client_credentials"
			})
			.then(response => response.json())
			.then(data => localStorage.setItem("bearer-token", data.access_token));
		}
		initConnexion();
	}, []);

	// TODO : 3000
    useEffect(() => {
        setTimeout(() => setShowLoader(false), 0);
    }, [])

    if (showLoader) {
        return (
            <div className="app-loader">
                <div className="logo">
                    <Logo image={LogoURL} />
                </div>

				{ /* TODO : I18N */ }
                <span className="app-presentation">
                    Bienvenue sur LemonTri, une web app pour apprendre les différentes consignes sur le recyclage afin d'adopter un mode de vie plus durable.
                </span>

                <div className="app-lottie">
                    <Lottie show={showLoader} />
                </div>
            </div>
        );
    }

    return (
        <div className="app">
            { renderComponent(location && location.pathname) }
        </div>
    );
}

export default App;
