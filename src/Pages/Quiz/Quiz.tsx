import React, { useCallback, useEffect, useRef } from "react";
import Button from "../../Components/Button/Button";
import styles from "./Quiz.module.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuestions as getQuestions, addUserAnswer } from "../../features/questions/questionsSlice";
import { AppDispatch, RootState } from "../../redux/store";

const Quiz: React.FC = () => {
	const [currentQuestion, setCurrentQuestion] = React.useState(0);

	const navigate = useNavigate();

	const {questions: newQuestions, isLoading, error} = useSelector((store: RootState) => store.questions);

	const dispatch = useDispatch<AppDispatch>();

	let isFirstRender = useRef(true);

	const getAllQuestions = useCallback(() => {
		dispatch(getQuestions());
	}, [dispatch]);

	useEffect(() => {
		if(isFirstRender.current) {
			isFirstRender.current = false;
			return
		}
		getAllQuestions();
	}, [getAllQuestions]);

	const reloadPage = () => {
		navigate(0);
	};


	const goToNextQuestion = (answer:string, id:number) => {
		dispatch(addUserAnswer({answer, id}));
		if (currentQuestion > newQuestions.length - 2) navigate("/result");
		setCurrentQuestion(currentQuestion + 1);
	};

	return (
		<div className={styles.pageContainer}>
			{isLoading ? (
				<div className={styles.pageTitle}>
					<span>Loading...</span>
				</div>
			) : (
				<div className={styles.pageTitle}>
					{newQuestions[currentQuestion]?.category || error}
				</div>
			)}

			<div className={styles.questionContainer}>
				{error ? (
					<div className={styles.questionBox}>
						{error}
						<Button label="RELOAD" onClick={reloadPage} />
					</div>
				) : (
					<div
						className={styles.questionBox}
						dangerouslySetInnerHTML={{
							__html: newQuestions[currentQuestion]?.question || "Loading...",
						}}
					></div>
				)}
				<div>{currentQuestion + 1} of 10</div>
			</div>
			<div className={styles.buttonContainer}>
				<Button
					label="TRUE"
					disabled={newQuestions.length < 1}
					onClick={() => goToNextQuestion("True", currentQuestion)}
				/>
				<Button
					label="FALSE"
					disabled={newQuestions.length < 1}
					onClick={() => goToNextQuestion("False", currentQuestion)}
				/>
			</div>
		</div>
	);
};

export default Quiz;
