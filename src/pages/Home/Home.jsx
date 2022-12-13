import { useTranslation } from "react-i18next";

import dataCategories from "../../data/DataCategories";

import { ListCategories } from "../../containers";

import "./home.css";

const Home = () => {
    const { t } = useTranslation();
    const data = dataCategories(t);

    return (
        <div className="home-container">
            <ListCategories data={data} />
        </div>
    );
};

export default Home;