// Biowaste
import Biowaste from "../assets/images/iconsCategory/Biodechet.png";
import BiowasteIcon from "../assets/images/imagesCategory/biowaste-1.png";
import Biowaste1 from "../assets/images/imagesCycle/biowaste/1.png";
import Biowaste2 from "../assets/images/imagesCycle/biowaste/2.png";
import Biowaste3 from "../assets/images/imagesCycle/biowaste/3.png";
import Biowaste4 from "../assets/images/imagesCycle/biowaste/4.png";
import Biowaste5 from "../assets/images/imagesCycle/biowaste/5.png";
import Biowaste6 from "../assets/images/imagesCycle/biowaste/6.png";

export const DataBiowaste = (t) => ({
	title: t("Biowaste"),
	icon: Biowaste,
	color: "#79472E",
	infos: {
		image: BiowasteIcon,
		subtitle: t("BiowasteScraps"),
		text: t("BiowasteBanned")
	},
	banned: t("BiowastePackaging"),
	cycleData: [
		{ image: Biowaste1, label: t("BiowasteCycle1") },
		{ image: Biowaste2, label: t("BiowasteCycle2") },
		{ image: Biowaste3, label: t("BiowasteCycle3") },
		{ image: Biowaste4, label: t("BiowasteCycle4") },
		{ image: Biowaste5, label: t("BiowasteCycle5") },
		{ image: Biowaste6, label: t("BiowasteCycle6") }
	]
});

// TODO : Change icon, infos, image
export const DataBottle = (t) => ({
	title: t("Bottle"),
	icon: Biowaste,
	color: "#ECB342",
	infos: { image: BiowasteIcon },
	banned: t("BottleBanned"),
	cycleData: [
		{ image: Biowaste1, label: t("BiowasteCycle1") },
		{ image: Biowaste2, label: t("BottleCycle2") },
		{ image: Biowaste2, label: t("BottleCycle3") },
		{ image: Biowaste2, label: t("BottleCycle4") },
		{ image: Biowaste2, label: t("BottleCycle5") },
		{ image: Biowaste2, label: t("BottleCycle6") },
		{ image: Biowaste2, label: t("BottleCycle7") },
		{ image: Biowaste2, label: t("BottleCycle8") }
	]
});
