import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import dataLSVGeneral from '../../data/DataLSVGeneral';

import HelpCircle from "../../assets/icons/helpCategory/help-default.svg";
import LemonQuestion from "../../assets/images/lemon-question.png";

import "./lsv.css";

const Lsv = ({ color, icon }) => {
    const { t, i18n } = useTranslation();
    const data = dataLSVGeneral(t);

	const [ currentLanguage, setCurrentLanguage ] = useState(i18n?.language);
    const [ currentLSV, setCurrentLSV ] = useState(data[0]);
	const [ selectedLSV, setSelectedLSV ] = useState(0);

	useEffect(() => {
		if (currentLanguage !== i18n?.language) {
			setCurrentLanguage(i18n.language);
			setCurrentLSV(data[selectedLSV]);
		}
	}, [ currentLanguage, data, i18n.language, selectedLSV ])

    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * data.length);

            setCurrentLSV(data[random]);
			setSelectedLSV(random);
        }, 5000);

        return () => clearInterval(interval);
    }, [ data ]);

    return (
        <div className="lsv-container">
            <div className="lsv-title">
				<img src={icon || HelpCircle} alt="" className="lsv-help-icon" />
				<span style={{ color: color }}>{t("DidUKnow")}</span>

				<div className="lsv-lemon">
					<img src={LemonQuestion} alt="" />
				</div>
			</div>

			<div className="lsv-data">
				<span style={{ color: color }}>{ currentLSV }</span>
			</div>
        </div>
    );
};

export default Lsv;
