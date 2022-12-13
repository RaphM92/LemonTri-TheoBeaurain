import { useTranslation } from "react-i18next";

import {
	CategoryTitle,
	Infos,
	Banned,
	Lsv,
	SeeMore
} from "../../components";
import { DataBiowaste as dataBiowaste } from "../../data/DataCategories";

import "./biowaste.css";

const Biowaste = () => {
	const { t } = useTranslation();
	const data = dataBiowaste(t);

	return (
		<div className="biowaste-container">
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

			<Lsv
				color={data?.color}
				icon={data?.help}
			/>

			<SeeMore color={data?.color} />
		</div>
	);
};

export default Biowaste;
