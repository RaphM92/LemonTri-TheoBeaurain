import Biodechet from "../assets/images/iconsCategory/biodechet.png";
import BottleCan from "../assets/images/iconsCategory/bottle-can.png";
import Can from "../assets/images/iconsCategory/can.png";
import FoldedCarboard from "../assets/images/iconsCategory/folded-cardboard.png";
import PaperCardboard from "../assets/images/iconsCategory/paper-cardboard.png";

const DataRouting = () => ([
    { url: "dechets-alimentaire", image: Biodechet },
	{ url: "bouteille-cannette", image: BottleCan },
	{ url: "cannette", image: Can },
	{ url: "carton-plie", image: FoldedCarboard},
	{ url: "carton", image: PaperCardboard},
	{ url: "carton-papier", image: PaperCardboard}
]);

export default DataRouting;
