import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick = () => {},
	disabled = false,
}) => {
	return (
		<div className={`${disabled ? styles.disabled : ''} ${styles.button}`} onClick={onClick}>
			{label}
		</div>
	);
};

export default Button;
