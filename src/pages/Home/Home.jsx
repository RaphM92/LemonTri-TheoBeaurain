import { HomeCategory } from "../../components";

import "./home.css";

import Bottles from "../../assets/images/bottles.png";
import Cardboard from "../../assets/images/cardboards.png";
import Cupboards from "../../assets/images/cupboards.png";


const Home = () => {
    console.log();

    return (
        <div className="home-container">
            Coucou les z'amis
            
            <div className="home-categories">
                <HomeCategory title="Bouteille en plastique" image={Cupboards} />
                <HomeCategory title="Cartons" image={Cardboard} />
                <HomeCategory title="Bouteille en plastique" image={Bottles} />
                <HomeCategory title="Cartons" image={Cardboard} />
                <HomeCategory title="Cartons" image={Cardboard} />
                <HomeCategory title="Bouteille en plastique" image={Bottles} />
                <HomeCategory title="Bouteille en plastique" image={Bottles} />
            </div>
        </div>
    );
};

export default Home;