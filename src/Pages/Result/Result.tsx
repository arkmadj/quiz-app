import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import ResultItem from "../../Components/ResultItem/ResultItem";
import { resetResult } from "../../features/questions/questionsSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Result.module.css";
import { AppDispatch, RootState } from "../../redux/store";

const Result: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { questions, isLoading, correctAnswers } = useSelector(
		(store: RootState) => store.questions
	);

	const handleClick = () => {
		dispatch(resetResult());
		navigate("/");
	};

	return (
		<div className={styles.pageContainer}>
			{!isLoading && (
				<div className={styles.resultContainer}>
					<span>You scored</span>
					<span>{correctAnswers} / 10</span>
				</div>
			)}
			{isLoading ? (
				<div className={styles.noResult}>
					<span>No results</span>
				</div>
			) : (
				<div className={styles.resultList}>
					{questions.map((question, index) => (
						<ResultItem question={question} key={index} />
					))}
				</div>
			)}
			<div className={styles.buttonContainer}>
				<Button label="PLAY AGAIN?" onClick={handleClick} />
			</div>
		</div>
	);
};

export default Result;
