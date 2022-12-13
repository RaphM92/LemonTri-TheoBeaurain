import { useTranslation } from "react-i18next";

import dataCategories from "../../data/DataCategories";

import { ListCategories } from "../../containers";
import { Title } from "../../components";

import LemonFoot from "../../assets/images/lemon-foot.png";

import "./home.css";

const Home = () => {
    const { t } = useTranslation();
    const data = dataCategories(t);

    return (
        <div className="home-container">
            <Title title={t("SortingInstructions")} image={LemonFoot} />
            <ListCategories data={data} />
        </div>
    );
};

export default Home;