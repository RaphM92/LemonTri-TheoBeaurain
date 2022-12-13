import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { renderComponent } from "./utils/utils";

// Pages components
import { Header, Footer } from "./containers";
import { Lottie } from "./components";

// CSS imports
import './App.css';

const App = () => {
    const [ showLoader, setShowLoader ] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => setShowLoader(false), 1500)
    }, []);

    return (
        showLoader
            ? <div className="App-loader">
                <Lottie show={showLoader} />
            </div>
            : <div className="App">
                <Header />

                { renderComponent(location && location.pathname) }
            
                <Footer />
            </div>
    )
}

export default App;
