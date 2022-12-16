// Biowaste
import Biowaste from "../assets/images/iconsCategory/Biodechet.png";
import Ampoule from "../assets/images/imagesCategory/Ampoule.png";
import Bois from "../assets/images/imagesCategory/Bois.png";
import DIB from "../assets/images/imagesCategory/DIB.png";
import Marc from "../assets/images/imagesCategory/Marc.png";
import PapierConfidentiel from "../assets/images/imagesCategory/PapierConfidenciel.png";
import GobeletsPlastique from "../assets/images/imagesCategory/GobeletsPlastique.png";
import Carton from "../assets/images/imagesCategory/Carton.png";
import Bouteille from "../assets/images/imagesCategory/Bouteille.png";
import BiowasteIcon from "../assets/images/imagesCategory/biowaste-1.png";
import Biowaste1 from "../assets/images/imagesCycle/biowaste/1.png";
import Biowaste2 from "../assets/images/imagesCycle/biowaste/2.png";
import Biowaste3 from "../assets/images/imagesCycle/biowaste/3.png";
import Biowaste4 from "../assets/images/imagesCycle/biowaste/4.png";
import Biowaste5 from "../assets/images/imagesCycle/biowaste/5.png";
import Biowaste6 from "../assets/images/imagesCycle/biowaste/6.png";
import BoisIcon from "../assets/images/iconsCategory/Bois.png";
import CartonIcon from "../assets/images/iconsCategory/CartonPlie.png";
import GobeletPlastiqueIcon from "../assets/images/iconsCategory/GobeletPlastique.png";
import MarcIcon from "../assets/images/iconsCategory/Marc.png";
import NeonAmpouleIcon from "../assets/images/iconsCategory/NeonAmpoule.png";
import PapierConfidentielIcon from "../assets/images/iconsCategory/PapierConfidentiel.png";
import DIBIcon from "../assets/images/iconsCategory/DIB.png";
import BouteilleIcon from "../assets/images/iconsCategory/BouteillePlastique.png";

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
	icon: BouteilleIcon,
	color: "#ECB342",
	infos: { image: Bouteille },
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

// TODO : Change icon, infos, image
export const DataTree = (t) => ({
	title: t("Tree"),
	icon: BoisIcon,
	color: "#73a348",
	infos: { image: Bois },
	banned: t("TreeBanned"),
	cycleData: [
		{ image: Biowaste1, label: t("TreeCycle1") },
		{ image: Biowaste2, label: t("TreeCycle2") },
		{ image: Biowaste2, label: t("TreeCycle3") },
		{ image: Biowaste2, label: t("TreeCycle4") },
		{ image: Biowaste2, label: t("TreeCycle5") },
		{ image: Biowaste2, label: t("TreeCycle6") },
		{ image: Biowaste2, label: t("TreeCycle7") },
		{ image: Biowaste2, label: t("TreeCycle8") }
	]
});

export const DataCardboard = (t) => ({
	title: t("Carton"),
	icon: CartonIcon,
	color: "#b08f65",
	infos: { image: Carton },
	banned: t("CartonBanned"),
	cycleData: [
		{ image: Biowaste1, label: t("CartonCycle1") },
		{ image: Biowaste2, label: t("CartonCycle2") },
		{ image: Biowaste2, label: t("CartonCycle3") },
		{ image: Biowaste2, label: t("CartonCycle4") },
		{ image: Biowaste2, label: t("CartonCycle5") },
		{ image: Biowaste2, label: t("CartonCycle6") },
		{ image: Biowaste2, label: t("CartonCycle7") },
		{ image: Biowaste2, label: t("CartonCycle8") }
	]
});

export const DataGobeletPlastique = (t) => ({
	title: t("GobeletPlastique"),
	icon: GobeletPlastiqueIcon,
	color: "#e3743b",
	infos: { image: GobeletsPlastique },
	banned: t("GobeletPlastiqueBanned"),
	cycleData: [
		{ image: Biowaste1, label: t("GobeletPlastiqueCycle1") },
		{ image: Biowaste2, label: t("GobeletPlastiqueCycle2") },
		{ image: Biowaste2, label: t("GobeletPlastiqueCycle3") },
		{ image: Biowaste2, label: t("GobeletPlastiqueCycle4") },
		{ image: Biowaste2, label: t("GobeletPlastiqueCycle5") },
		{ image: Biowaste2, label: t("GobeletPlastiqueCycle6") },
		{ image: Biowaste2, label: t("GobeletPlastiqueCycle7") },
		{ image: Biowaste2, label: t("GobeletPlastiqueCycle8") }
	]
});

export const DataMarc = (t) => ({
	title: t("Marc"),
	icon: MarcIcon,
	color: "#2e241b",
	infos: { image: Marc },
	banned: t("MarcBanned"),
	cycleData: [
		{ image: Biowaste1, label: t("MarcCycle1") },
		{ image: Biowaste2, label: t("MarcCycle2") },
		{ image: Biowaste2, label: t("MarcCycle3") },
		{ image: Biowaste2, label: t("MarcCycle4") },
		{ image: Biowaste2, label: t("MarcCycle5") },
		{ image: Biowaste2, label: t("MarcCycle6") }
	]
});

export const DataNeonAmpoule = (t) => ({
	title: t("NeonAmpoule"),
	icon: NeonAmpouleIcon,
	color: "#7f3a67",
	infos: { image: Ampoule },
	banned: t("NeonAmpouleBanned"),
	cycleData: [
		{ image: Biowaste1, label: t("NeonAmpouleCycle1") },
		{ image: Biowaste2, label: t("NeonAmpouleCycle2") },
		{ image: Biowaste2, label: t("NeonAmpouleCycle3") },
		{ image: Biowaste2, label: t("NeonAmpouleCycle4") },
		{ image: Biowaste2, label: t("NeonAmpouleCycle5") },
		{ image: Biowaste2, label: t("NeonAmpouleCycle6") }
	]
});

export const DataPapierConfidentiel = (t) => ({
	title: t("PapierConfidentiel"),
	icon: PapierConfidentielIcon,
	color: "#365aaa",
	infos: { image: BiowasteIcon },
	banned: t("PapierConfidentielBanned"),
	cycleData: [
		{ image: Biowaste1, label: t("PapierConfidentielCycle1") },
		{ image: Biowaste2, label: t("PapierConfidentielCycle2") },
		{ image: Biowaste2, label: t("PapierConfidentielCycle3") },
		{ image: Biowaste2, label: t("PapierConfidentielCycle4") },
		{ image: Biowaste2, label: t("PapierConfidentielCycle5") },
		{ image: Biowaste2, label: t("PapierConfidentielCycle6") },
		{ image: Biowaste2, label: t("PapierConfidentielCycle7") },
		{ image: Biowaste2, label: t("PapierConfidentielCycle8") }
	]
});

export const DataAutres = (t) => ({
	title: t("Autres"),
	icon: DIBIcon,
	color: "#1d1d1b",
	infos: { image: DIB },
	banned: t("AutresBanned")
});
