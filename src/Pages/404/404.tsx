import React from "react";
import Button from "../../Components/Button/Button";
import styles from "./404.module.css";
import { useNavigate } from "react-router-dom";

const NoMatch: React.FC = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};

	return (
		<div className={styles.pageContainer}>
			<div className={styles.pageTitle}>Page not Found</div>
			<div className={styles.pageDescription}>
				Looks like someone is getting lost
			</div>
			<div className={styles.pageGotcha}>No worries, we gotcha</div>
			<div className={styles.buttonContainer}>
				<Button label="HOME" onClick={handleClick} />
			</div>
		</div>
	);
};

export default NoMatch;
