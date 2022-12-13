import { useTranslation } from "react-i18next";

import dataCategories from "../../data/DataCategories";

import { ListCategories } from "../../containers";

import "./home.css";

const Home = () => {
    const { t } = useTranslation();
    const data = dataCategories(t);

    return (
        <div className="home-container">
            <span className="home-presentation">
                Bienvenue sur LemonTri, une web app pour apprendre les différentes consignes sur le recyclage afin d'adopter un mode de vie plus durable.
            </span>

            <ListCategories data={data} />
        </div>
    );
};

export default Home;