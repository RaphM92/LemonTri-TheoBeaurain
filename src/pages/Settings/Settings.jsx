import { useTranslation } from "react-i18next";

import { Language, Profil } from "../../containers";
import { ButtonParams } from "../../components";

import Award from "../../assets/icons/award.svg";

import "./settings.css";

const Settings = () => (
	<div className="settings-container">
		<Profil />
		<ButtonParams icon={Award} color="#B18E65" />
		<Language />
	</div>
);

export default Settings;
