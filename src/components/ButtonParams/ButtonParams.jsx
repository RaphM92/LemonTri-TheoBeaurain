import { useTranslation } from "react-i18next";

import "./buttonParams.css";

const ButtonParams = ({ color, icon }) => {
	const { t } = useTranslation();
	return (
		<button className="params-button" style={{ backgroundColor: color }}>
			{ icon && <img src={icon} alt="" /> }
			<span>{t("SortingScore")}</span>
		</button>
	)
};

export default ButtonParams;
