import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { dataLSV } from '../../data';

import HelpCircle from "../../assets/icons/help-circle.png";
import LemonQuestion from "../../assets/images/lemon-question.png";

import "./lsv.css";

// TODO : Trad
const Lsv = () => {
    const { t } = useTranslation();
    const data = dataLSV(t);

    const [ currentLSV, setCurrentLSV ] = useState(data[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * data.length);
            setCurrentLSV(data[random]);
        }, 60000);

        return () => clearInterval(interval);
    }, [ data ]);

    return (
        <div className="lsv-container">
            <div className="lsv-title">
				<img src={HelpCircle} alt="" className="lsv-help-icon" />
				<span>Le saviez-vous ?</span>

				<div className="lsv-lemon">
					<img src={LemonQuestion} alt="" />
				</div>
			</div>

			<div className="lsv-data">
				<span>{ currentLSV }</span>
			</div>
        </div>
    );
};

export default Lsv;
