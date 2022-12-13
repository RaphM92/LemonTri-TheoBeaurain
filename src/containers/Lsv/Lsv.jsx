import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { dataLSV } from '../../data';

import "./lsv.css";

const Lsv = () => {
    const { t } = useTranslation();
    const data = dataLSV(t);

    const [ currentLSV, setCurrentLSV ] = useState(data[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * data.length);
            setCurrentLSV(data[random]);
        }, 3000);
        
        return () => clearInterval(interval);
    }, [ data ]);

    return (
        <div className="container">
            <div className="logo">
                <h1 className="title">Le Saviez Vous ?</h1>
            </div>

            <div className="card">
                <div className="texte">{ currentLSV }</div>
            </div>
        </div>
    );
};

export default Lsv;