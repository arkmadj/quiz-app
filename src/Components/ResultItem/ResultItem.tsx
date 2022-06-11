import React from "react";
import { Question } from "../../Types";
import styles from "./ResultItem.module.css";

interface ResultItemProps {
	question: Question;
}

const ResultItem: React.FC<ResultItemProps> = ({question }) => {
	return (
		<div className={styles.itemContainer}>
			<div className={styles.itemIcon}>
				<span className={styles.iconContainer}>{question.correct_answer === question.user_answer ? "+" : "−"}</span>
			</div>
			<div className={styles.itemQuestion}>
				<div dangerouslySetInnerHTML={{ __html: question.question }}></div>
			</div>
		</div>
	);
};

export default ResultItem;
