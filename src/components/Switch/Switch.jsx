import SwitchReact from "react-switch";

import "./switch.css";

const Switch = ({
	color,
	backgroundColor,
	onChange,
	checked,
	icon
}) => (
	<div className="switch-container">
		<SwitchReact
			onChange={onChange}
			offHandleColor={color}
			onHandleColor={color}
			onColor={backgroundColor}
			offColor={backgroundColor}
			checkedIcon={false}
			uncheckedIcon={false}
			checked={checked}
			activeBoxShadow={null}
			width={65}
			height={36}
			borderRadius={25}
		/>

		{ icon && <img src={icon} alt="" className="" /> }
	</div>
);

export default Switch;
