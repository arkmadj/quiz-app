import React from "react";
import "./Button.css";

interface ButtonProps {
	label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
	return <div className="button">{label}</div>;
};

export default Button;
