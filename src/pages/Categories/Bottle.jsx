import { useTranslation } from "react-i18next";

import {
	CategoryTitle,
	Infos,
	Banned,
	Lsv,
} from "../../components";
import { SeeMore } from "../../containers";
import { DataBottle as dataBottle } from "../../data/DataCategories";

import "./categories.css";

const Bottle = () => {
	const { t } = useTranslation();
	const data = dataBottle(t);

	return (
		<div className="categories-container">
			<CategoryTitle
				icon={data?.icon}
				title={data?.title}
				color={data?.color}
			/>

			<Infos
				infos={data?.infos}
				color={data?.color}
			/>

			<Banned banned={data?.banned} />

			<Lsv color={data?.color} />

			<SeeMore
				color={data?.color}
				data={data?.cycleData}
			/>
		</div>
	);
};

export default Bottle;
