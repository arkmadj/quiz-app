import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import ResultItem from "../../Components/ResultItem/ResultItem";
import styles from "./Result.module.css";

const Result: React.FC = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }
	return (
		<div className={styles.pageContainer}>
			<div className={styles.resultContainer}>
				<span>You scored</span>
				<span>3 / 10</span>
			</div>
			<div className={styles.resultList}>
				{[...Array(10)].map((_, i) => (
          <ResultItem correct={false} question="My name is Zultan" key={i}/>
				))}
			</div>
			<div className={styles.buttonContainer}>
				<Button label="PLAY AGAIN?" onClick={handleClick}/>
			</div>
		</div>
	);
};

export default Result;
