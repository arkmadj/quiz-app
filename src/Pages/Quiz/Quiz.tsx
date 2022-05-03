import React, { useEffect } from "react";
import Button from "../../Components/Button/Button";
import styles from "./Quiz.module.css";
import { getAllQuestions } from "../../Services";
import { Question } from "../../Types";
import { useNavigate } from "react-router-dom";

const Quiz: React.FC = () => {
	const [questions, setQuestions] = React.useState<Question[]>([]);
	const [loadError, setLoadError] = React.useState("");
	const [currentQuestion, setCurrentQuestion] = React.useState(0);

	const navigate = useNavigate();

	useEffect(() => {
		getAllQuestions()
			.then((response) => {
				if (response) setQuestions(response.data.results);
			})
			.catch((error) => {
				setLoadError(error.message + ". Please try again later...");
			});
	}, []);

	const reloadPage = () => {
		navigate(0);
	};

	const handleAnswer = (answer: boolean) => {
		questions[currentQuestion].user_answer =
			Boolean(questions[currentQuestion].correct_answer) === answer;
		setCurrentQuestion(currentQuestion + 1);
	};

	const goToNextQuestion = () => {
		if(currentQuestion > questions.length - 2) navigate('/result');
		setCurrentQuestion(currentQuestion + 1);
	};

	return (
		<div className={styles.pageContainer}>
			{loadError ? (
				<div className={styles.pageTitle}>
					<span>{loadError}</span>
				</div>
			) : (
				<div className={styles.pageTitle}>
					{questions[currentQuestion]?.category || "Loading..."}
				</div>
			)}

			<div className={styles.questionContainer}>
				{loadError ? (
					<div className={styles.questionBox}>
						{loadError}
						<Button label="RELOAD" onClick={reloadPage} />
					</div>
				) : (
					<div
						className={styles.questionBox}
						dangerouslySetInnerHTML={{
							__html: questions[currentQuestion]?.question || "Loading...",
						}}
					></div>
				)}
				<div>{currentQuestion + 1} of 10</div>
			</div>
			<div className={styles.buttonContainer}>
				<Button
					label="TRUE"
					disabled={questions.length < 1}
					onClick={goToNextQuestion}
				/>
				<Button
					label="FALSE"
					disabled={questions.length < 1}
					onClick={goToNextQuestion}
				/>
			</div>
		</div>
	);
};

export default Quiz;
