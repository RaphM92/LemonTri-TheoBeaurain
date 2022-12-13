import Biodechet from "../assets/images/iconsCategory/biodechet.png";
import Biodechet1 from "../assets/images/imagesCategory/biodechet-1.png";
import BiodechetHelp from "../assets/icons/helpCategory/help-biowaste.svg"
// import BottleCan from "../assets/images/bottle-can.png";
// import Can from "../assets/images/can.png";
// import FoldedCarboard from "../assets/images/folded-cardboard.png";
// import PaperCardboard from "../assets/images/paper-cardboard.png";


export const DataBiowaste = (t) => ({
	title: t("Biowaste"),
	icon: Biodechet,
	help: BiodechetHelp,
	color: "#79472E",
	infos: [
		{
			image: Biodechet1,
			subtitle: t("FoodScraps"),
			text: t("BannedBiowaste") }
	],
	banned: t("FoodPackaging")
});
