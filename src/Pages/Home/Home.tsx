import React from "react";
import Button from "../../Components/Button/Button";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home:React.FC = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/quiz");
  }

	return (
		<div className={styles.homeContainer}>
			<div className={styles.pageTitle}>Welcome to the trival Challenge</div>
			<div className={styles.pageDescription}>
				You will be presented with 10 True or False questions
			</div>
			<div className={styles.pageQuestion}>Can you score 100%?</div>
			<div className={styles.buttonContainer}>
				<Button label="BEGIN" onClick={handleClick}/>
			</div>
		</div>
	);
}

export default Home;
