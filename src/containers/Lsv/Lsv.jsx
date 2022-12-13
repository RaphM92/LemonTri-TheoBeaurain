import { useEffect, useState } from 'react';

import "./lsv.css";

const Lsv = () => {
    const Texte = [
        {   id:0,
            value: " Seulement 1 % des gobelets en plastique sont recyclés 40% des gobelets en plastique sont incinérés 60% sont enfouis 3,2 g de pétrole sont nécessaires à la fabrication d’un gobelet plastique "
        },
        {   id:1,
            value: " 5,2 milliards de canettes sont consommées chaque année en France En France, 38% des canettes sont recyclées comme matière première secondaire (donc participent à la création de nouvelles canettes) et 22% sont valorisées en sous-couche routière La canette a une paroi de 0,1 mm d’épaisseur, moins que l’épaisseur d’un cheveu Elle peut pourtant supporter jusqu'à 90 kg sans problème ! "
        },
        {
            id:2,
            value:" 2,5 millions de tonnes de verre ont été collectées en France en 2017 L’utilisation de verre recyclé s’élève à 56% Le taux de recyclage du verre en 2016 s’élève à 76 % 227 000 tonnes de verre ont été réemployées en 2017"
        },
        {
            id:3,
            value:"1,3 milliard de piles sont mises sur le marché français chaque année La durée du processus de dégradation d'une pile dans la nature est estimée à plus de 7000 ans. Le taux de collecte des piles s'élève à 49% en 2020 Chaque français utilise en moyenne 20 piles/petites batteries par an"
        },
        {
            id:4,
            value:" 3,5 millions de tonnes de papier ont été consommées en 2017 en France 60,5% ont été recyclés grâce au geste de tri des français Au bureau, un salarié consomme en moyenne 70 à 85 kg de papier par an. La fabrication du papier recyclé consomme 6 fois moins d'eau et 4 fois moins d'énergie que la fabrication du papier neuf."
        },
        {
            id:5,
            value:"La cendre, le papier et le tabac représentent 25% du mégot de cigarette. Les 75% restants sont composés du filtre, majoritairement du plastique (acétate de cellulose) Un mégot met 12 ans à se dégrader dans la nature Et peut polluer jusqu'à 500 litres d'eau"
        },
        {
            id:6,
            value:"200 millions de masques sont consommés chaque semaine en France 15% à 31%, c'est la part que représente les microplastiques sur les 9,5 millions de tonnes de plastiques déversées chaque année en mer Un masque jeté dans la nature met plus de 400 ans à se dégrader"
        },
        {
            id:7,
            value:"83% de la population française dit consommer régulièrement du café Chaque français consomme en moyenne 5,8 kg de café par an : 1500 tasses de café sont bues chaque minute en France. 55 % : C’est l’objectif de valorisation des biodéchets en 2020 fixé par la Loi de Transition Énergétique."
        }
    ];
    const [ TexteData, setTexteData ] = useState(Texte[0].value);

    useEffect(() => { 
        autoSlide() 
    }, []);

    const timer = ms => new Promise(res => setTimeout(res, ms))

    const autoSlide = async () => {
        for (let i = 0; i < Texte.length; i++) {
            let slider = Texte[i].value;
            setTexteData((slider));
            await timer(3000);
        }
    }

    return (
        <div className="container">
            <div className="logo">
                <h1 className="title">Le Saviez Vous ?</h1>
            </div>

            <div className="card">
                <div className="texte">{TexteData}</div>
            </div>
        </div>
    );
};

export default Lsv;