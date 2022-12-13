import "./infos.css";

const Infos = ({ infos, color }) => {
	return (
		<div className="infos-container">
			{
				infos && infos?.map((info, index) => (
					<div className="info-container" key={index}>
						<img src={info?.image} alt="" />
						<span className="title" style={{ color: color }}>{info?.subtitle}</span>
						<span className="text" style={{ color: color }}>{info?.text}</span>
					</div>
				))
			}
		</div>
	);
};

export default Infos;
