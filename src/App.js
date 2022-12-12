import React from "react";
import { useLocation } from 'react-router-dom';

import { renderComponent } from "./utils/utils";

// Pages components
import { Footer } from "./containers";

// CSS imports
import './App.css';

const App = () => {
    const location = useLocation();
    
    return (
        <div className="App">
            { renderComponent(location && location.pathname) }
            
            <Footer />
        </div>
    )
}

export default App;
