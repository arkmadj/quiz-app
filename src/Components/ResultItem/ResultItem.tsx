import React from "react";
import { Question } from "../../Types";
import styles from "./ResultItem.module.css";

interface ResultItemProps {
	correct: boolean;
	question: Question;
}

const ResultItem: React.FC<ResultItemProps> = ({ correct, question }) => {
	return (
		<div className={styles.itemContainer}>
			<div className={styles.itemIcon}>{correct ? "+" : "-"}</div>
			<div className={styles.itemQuestion}>
				<div dangerouslySetInnerHTML={{ __html: question.question }}></div>
				<div className={styles.answerSection}>
					<div className={styles.answerContainer}>
						<span>Your answer:</span>
						<span>{question.user_answer}</span>
					</div>
					<div className={styles.answerContainer}>
						<span>Correct answer:</span>
						<span>{question.correct_answer}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultItem;
